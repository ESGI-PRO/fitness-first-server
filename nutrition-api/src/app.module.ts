import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from './ingredients/ingredients.controller';
import { IngredientsService } from './ingredients/ingredients.service';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecettesController } from './recettes/recettes.controller';
import { RecettesService } from './recettes/recettes.service';
import { RecettesModule } from './recettes/recettes.module';

@Module({
  imports: [IngredientsModule, RecettesModule],
  controllers: [AppController, IngredientsController, RecettesController],
  providers: [AppService, IngredientsService, RecettesService],
})
export class AppModule {}
