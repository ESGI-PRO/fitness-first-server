import { Controller, HttpStatus, Inject } from '@nestjs/common';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';

import { UserService } from './services/user.service';
import { IUser } from './interfaces/user.interface';
import { IUserCreateResponse } from './interfaces/user-create-response.interface';
import { IUserSearchResponse } from './interfaces/user-search-response.interface';
import { IUserConfirmResponse } from './interfaces/user-confirm-response.interface';
import { firstValueFrom } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('MAILER_SERVICE') private readonly mailerServiceClient: ClientProxy,
  ) {}

  @MessagePattern('user_search_by_credentials')
  public async searchUserByCredentials(searchParams: {
    email: string;
    password: string;
  }): Promise<IUserSearchResponse> {
    let result: IUserSearchResponse;

    if (searchParams.email && searchParams.password) {
      const user = await this.userService.searchUser({
        email: searchParams.email,
      });

      if (user && user[0]) {
        const isValidePassword = await user[0].compareEncryptedPassword(searchParams.password)
        if (isValidePassword) {
          result = {
            status: HttpStatus.OK,
            message: 'user_search_by_credentials_success',
            user: user[0],
          };
        } else {
          result = {
            status: HttpStatus.NOT_FOUND,
            message: 'user_search_by_credentials_not_match',
            user: null,
          };
        }
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'user_search_by_credentials_not_found',
          user: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.NOT_FOUND,
        message: 'user_search_by_credentials_not_found',
        user: null,
      };
    }

    return result;
  }

  @MessagePattern('user_get_by_id')
  public async getUserById(id: string): Promise<IUserSearchResponse> {
    let result: IUserSearchResponse;

    if (id) {
      const user = await this.userService.searchUserById(id);
      if (user) {
        result = {
          status: HttpStatus.OK,
          message: 'user_get_by_id_success',
          user: user,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'user_get_by_id_not_found',
          user: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_get_by_id_bad_request',
        user: null,
      };
    }

    return result;
  }

  @MessagePattern('user_confirm')
  public async confirmUser(confirmParams: {
    link: string;
  }): Promise<IUserConfirmResponse> {
    let result: IUserConfirmResponse;

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
          status: HttpStatus.OK,
          message: 'user_confirm_success',
          errors: null,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'user_confirm_not_found',
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_confirm_bad_request',
        errors: null,
      };
    }

    return result;
  }

  @MessagePattern('user_create')
  public async createUser(userParams: IUser): Promise<IUserCreateResponse> {
    let result: IUserCreateResponse;

    if (userParams) {

      const usersWithEmail = await this.userService.searchUser({
        email: userParams.email,
      });

      if (usersWithEmail && usersWithEmail.length > 0) {
        result = {
          status: HttpStatus.CONFLICT,
          message: 'user_create_conflict',
          user: null,
          errors: {
            email: {
              message: 'Email already exists',
              path: 'email',
            },
          },
        };
      } else {

        try {
          userParams.is_confirmed = false;
          const createdUser = await this.userService.createUser(userParams);
          const userLink = await this.userService.createUserLink(
            createdUser.id,
          );
          delete createdUser.password;
          result = {
            status: HttpStatus.CREATED,
            message: 'user_create_success',
            user: createdUser,
            errors: null,
          };
          await firstValueFrom(
            this.mailerServiceClient
            .send('mail_send', {
              to: createdUser.email,
              subject: 'Email confirmation',
              html: `<center>
              <b>Hi there, please confirm your email to use Smoothday.</b><br>
              Use the following link for this.<br>
              <a href="${this.userService.getConfirmationLink(
                userLink.link,
              )}"><b>Confirm The Email</b></a>
              </center>`,
            })
          );
        } catch (e) {
          result = {
            status: HttpStatus.PRECONDITION_FAILED,
            message: 'user_create_precondition_failed',
            user: null,
            errors: e.errors,
          };
        }
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_create_bad_request',
        user: null,
        errors: null,
      };
    }

    return result;
  }

  // user update
  @MessagePattern('user_update')
  public async updateUser(data: {
    id: string,
    userParams: any,
  }): Promise<IUserSearchResponse> {
    let result: IUserSearchResponse;
    const { id, userParams } = data;

    if (id && userParams) {
      const user = await this.userService.updateUserById(id, userParams);

      if (user) {
        result = {
          status: HttpStatus.OK,
          message: 'user_update',
          user: user,
        };
      } else {
        result = {
          status: HttpStatus.BAD_REQUEST,
          message: 'user_update_bad_request',
          user: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_update_bad_request',
        user: null,
      };
    }

    return result;
  }


  // search user by email
  @MessagePattern('user_search_by_email')
    public async searchUserByEmail(email: string): Promise<IUserSearchResponse> {
      let result: IUserSearchResponse;
  
      if (email) {
        const user = await this.userService.searchUser({
          email: email,
        });
  
        if (user && user[0]) {
          result = {
            status: HttpStatus.OK,
            message: 'user_search_by_email',
            user: user[0],
          };
        } else {
          result = {
            status: HttpStatus.NOT_FOUND,
            message: 'user_search_by_email_not_found',
            user: null,
          };
        }
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'user_search_by_email_not_found',
          user: null,
        };
      }
  
      return result;
    }

    @MessagePattern('user_get_all')
    public async getAllUsers(): Promise<any> {  
      const users = await this.userService.getAllUsers();
      return users;
    }

    @MessagePattern('get_user_by_id')
    public async getByUserId(id: string): Promise<any> {
      const user = await this.userService.getByUserId(id);
      return user;
    }

    @MessagePattern('user_delete_by_id')
    public async deleteUser(id: string): Promise<any> {
      const user = await this.userService.deleteUserById(id);
      return user;
    }

    @MessagePattern('user_update_by_id')
    public async updateUserById(data: {id: string, user: any}): Promise<any> {
      const { id, user } = data;
      const updatedUser = await this.userService.updateUser(id, user);
      return updatedUser;
    }

    @MessagePattern('user_new')
    public async newUser(user: any): Promise<any> {
      const newUser = await this.userService.newUser(user);
      return newUser;
    }
    
  // search user by params object
  @MessagePattern('user_search_by_params')
  public async searchUserByParams(userParams: any): Promise<any> {
    return await this.userService.searchUser(userParams);
  }

    // get users from array of ids
    @MessagePattern('user_get_by_ids')
    public async getUsersByIds(data:{ids: string[]}): Promise<any> {
      const {ids} = data;
      return await this.userService.getUsersByIds(ids);
    }

  // connect user to trainer
  @MessagePattern('user_connect_to_trainer')
  public async connectUserToTrainer(data: {
    userId: string,
    trainerId: string,
  }): Promise<IUserSearchResponse> {
    let result: IUserSearchResponse;
    const { userId, trainerId } = data;

    if (userId && trainerId) {
      const user = await this.userService.updateUserById(userId, {
        trainerId: trainerId,
      });
      // if user had trainerId before, remove user from trainer traineesIds list
      if(user.trainerId){
        let trainer = await this.userService.searchUserById(user.trainerId);
        trainer = await this.userService.updateUserById(trainer.id, {
          traineeIds: trainer.traineeIds.filter((id) => id !== userId),
        });
      }
     // update trainer traineesIds list
     let trainer = await this.userService.searchUserById(trainerId);
     if(!trainer.traineeIds.includes(userId)){
      trainer = await this.userService.updateUserById(trainerId, {
        traineeIds:[...trainer.traineeIds, userId],
       })
     }



      if (user && trainer) {
        result = {
          status: HttpStatus.OK,
          message: 'user_connect_to_trainer',
          user: null,
        };
      } else {
        result = {
          status: HttpStatus.BAD_REQUEST,
          message: 'user_connect_to_trainer_bad_request',
          user: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_connect_to_trainer_bad_request',
        user: null,
      };
    }

    return result;
  }

  @MessagePattern('user_request_role_change')
  public async requestRoleChange(id: string): Promise<IUserSearchResponse> {
    try {
      await this.userService.requestTrainerRoleChange(id);
      return {
        status: HttpStatus.OK,
        message: 'user_request_role_change_success',
        user: null,
      };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_request_role_change_failed',
        user: null,
      };
    }
  }

  @MessagePattern('list_role_change_requests')
  public async listRoleChangeRequests(): Promise<any> {
    const requests = await this.userService.listRoleChangeRequests();
    return requests;
  }

  @MessagePattern('approve_role_change_request')
  public async approveRoleChangeRequest(id: string): Promise<any> {
    // return await this.userService.approveRoleChangeRequest(id);
    try {
      await this.userService.approveRoleChangeRequest(id);
      return {
        status: HttpStatus.OK,
        message: 'approve_role_change_request_success',
        user: null,
      };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'approve_role_change_request_failed',
        user: null,
      };
    }
  }

}