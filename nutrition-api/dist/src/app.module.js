"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const ingredients_controller_1 = require("./ingredients/ingredients.controller");
const ingredients_service_1 = require("./ingredients/ingredients.service");
const ingredients_module_1 = require("./ingredients/ingredients.module");
const recettes_controller_1 = require("./recettes/recettes.controller");
const recettes_service_1 = require("./recettes/recettes.service");
const recettes_module_1 = require("./recettes/recettes.module");
const config_service_1 = require("./services/config/config.service");
const categories_controller_1 = require("./categories/categories.controller");
const categories_service_1 = require("./categories/categories.service");
const categories_module_1 = require("./categories/categories.module");
const microservices_1 = require("@nestjs/microservices");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [ingredients_module_1.IngredientsModule, recettes_module_1.RecettesModule, categories_module_1.CategoriesModule],
        controllers: [app_controller_1.AppController, ingredients_controller_1.IngredientsController, recettes_controller_1.RecettesController, categories_controller_1.CategoriesController],
        providers: [config_service_1.ConfigService, app_service_1.AppService, ingredients_service_1.IngredientsService, recettes_service_1.RecettesService, categories_service_1.CategoriesService, {
                provide: 'USER_SERVICE',
                useFactory: (configService) => {
                    const userServiceOptions = configService.get('userService');
                    return microservices_1.ClientProxyFactory.create(userServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map