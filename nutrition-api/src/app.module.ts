import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from './ingredients/ingredients.controller';
import { IngredientsService } from './ingredients/ingredients.service';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecettesController } from './recettes/recettes.controller';
import { RecettesService } from './recettes/recettes.service';
import { RecettesModule } from './recettes/recettes.module';
import { ConfigService } from './services/config/config.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [IngredientsModule, RecettesModule, CategoriesModule],
  controllers: [AppController, IngredientsController, RecettesController, CategoriesController],
  providers: [ConfigService, AppService, IngredientsService, RecettesService, CategoriesService ,  {
    provide: 'USER_SERVICE',
    useFactory: (configService: ConfigService) => {
      const userServiceOptions = configService.get('userService');
      return ClientProxyFactory.create(userServiceOptions);
    },
    inject: [ConfigService],
  }],
})
export class AppModule {}
