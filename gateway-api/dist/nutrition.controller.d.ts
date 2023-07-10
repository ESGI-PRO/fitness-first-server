import { ClientProxy } from '@nestjs/microservices';
import { GetNutritionResponseDto } from './interfaces-requests-responses/nutrition/dto/get-nutrition-response.dto';
import { CreateIngredientDTO } from './interfaces-requests-responses/nutrition/dto/CreateIngredientDTO';
import { getIngredientIdDTO } from './interfaces-requests-responses//nutrition/dto/getIngredientId';
import { getIngredientUserIdDTO } from './interfaces-requests-responses/nutrition/dto/getIngredientUserID';
import { getCategorieIdDTO } from './interfaces-requests-responses/nutrition/dto/get-categorie-id-dto';
import { createRecetteDTO } from './interfaces-requests-responses/nutrition/dto/create-recette.dto';
export declare class NutritionController {
    private readonly nutritionServiceClient;
    constructor(nutritionServiceClient: ClientProxy);
    getRecettes(): Promise<GetNutritionResponseDto>;
    createRecettes(recettesData: createRecetteDTO): Promise<GetNutritionResponseDto>;
    getIngredients(): Promise<GetNutritionResponseDto>;
    createIngredient(ingredientData: CreateIngredientDTO): Promise<GetNutritionResponseDto>;
    updateIngredient(params: getIngredientIdDTO, ingredientData: any): Promise<GetNutritionResponseDto>;
    getCategories(): Promise<GetNutritionResponseDto>;
    getRecetteByID(params: getIngredientIdDTO): Promise<GetNutritionResponseDto>;
    getIngredientByID(params: getIngredientIdDTO): Promise<GetNutritionResponseDto>;
    deleteIngredient(id: string): Promise<GetNutritionResponseDto>;
    deleteRecette(id: string): Promise<GetNutritionResponseDto>;
    getCategorieById(params: getCategorieIdDTO): Promise<GetNutritionResponseDto>;
    getRecettesByUserId(params: getIngredientUserIdDTO): Promise<GetNutritionResponseDto>;
}
