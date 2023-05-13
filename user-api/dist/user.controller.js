"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const user_service_1 = require("./services/user.service");
const rxjs_1 = require("rxjs");
let UserController = class UserController {
    constructor(userService, mailerServiceClient) {
        this.userService = userService;
        this.mailerServiceClient = mailerServiceClient;
    }
    async searchUserByCredentials(searchParams) {
        let result;
        if (searchParams.email && searchParams.password) {
            const user = await this.userService.searchUser({
                email: searchParams.email,
            });
            if (user && user[0]) {
                if (user[0].compareEncryptedPassword(searchParams.password)) {
                    result = {
                        status: common_1.HttpStatus.OK,
                        message: 'user_search_by_credentials_success',
                        user: user[0],
                    };
                }
                else {
                    result = {
                        status: common_1.HttpStatus.NOT_FOUND,
                        message: 'user_search_by_credentials_not_match',
                        user: null,
                    };
                }
            }
            else {
                result = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    message: 'user_search_by_credentials_not_found',
                    user: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'user_search_by_credentials_not_found',
                user: null,
            };
        }
        return result;
    }
    async getUserById(id) {
        let result;
        if (id) {
            const user = await this.userService.searchUserById(id);
            if (user) {
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'user_get_by_id_success',
                    user,
                };
            }
            else {
                result = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    message: 'user_get_by_id_not_found',
                    user: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'user_get_by_id_bad_request',
                user: null,
            };
        }
        return result;
    }
    async confirmUser(confirmParams) {
        let result;
        if (confirmParams) {
            const userLink = await this.userService.getUserLink(confirmParams.link);
            if (userLink && userLink[0]) {
                const userId = userLink[0].user_id;
                await this.userService.updateUserById(userId, {
                    is_confirmed: true,
                });
                await this.userService.updateUserLinkById(userLink[0].id, {
                    is_used: true,
                });
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'user_confirm_success',
                    errors: null,
                };
            }
            else {
                result = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    message: 'user_confirm_not_found',
                    errors: null,
                };
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'user_confirm_bad_request',
                errors: null,
            };
        }
        return result;
    }
    async createUser(userParams) {
        let result;
        if (userParams) {
            const usersWithEmail = await this.userService.searchUser({
                email: userParams.email,
            });
            if (usersWithEmail && usersWithEmail.length > 0) {
                result = {
                    status: common_1.HttpStatus.CONFLICT,
                    message: 'user_create_conflict',
                    user: null,
                    errors: {
                        email: {
                            message: 'Email already exists',
                            path: 'email',
                        },
                    },
                };
            }
            else {
                try {
                    userParams.is_confirmed = false;
                    const createdUser = await this.userService.createUser(userParams);
                    const userLink = await this.userService.createUserLink(createdUser.id);
                    delete createdUser.password;
                    result = {
                        status: common_1.HttpStatus.CREATED,
                        message: 'user_create_success',
                        user: createdUser,
                        errors: null,
                    };
                    await (0, rxjs_1.firstValueFrom)(this.mailerServiceClient
                        .send('mail_send', {
                        to: createdUser.email,
                        subject: 'Email confirmation',
                        html: `<center>
              <b>Hi there, please confirm your email to use Smoothday.</b><br>
              Use the following link for this.<br>
              <a href="${this.userService.getConfirmationLink(userLink.link)}"><b>Confirm The Email</b></a>
              </center>`,
                    }));
                }
                catch (e) {
                    result = {
                        status: common_1.HttpStatus.PRECONDITION_FAILED,
                        message: 'user_create_precondition_failed',
                        user: null,
                        errors: e.errors,
                    };
                }
            }
        }
        else {
            result = {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'user_create_bad_request',
                user: null,
                errors: null,
            };
        }
        return result;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('user_search_by_credentials'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "searchUserByCredentials", null);
__decorate([
    (0, microservices_1.MessagePattern)('user_get_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, microservices_1.MessagePattern)('user_confirm'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "confirmUser", null);
__decorate([
    (0, microservices_1.MessagePattern)('user_create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __param(1, (0, common_1.Inject)('MAILER_SERVICE')),
    __metadata("design:paramtypes", [user_service_1.UserService, typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map