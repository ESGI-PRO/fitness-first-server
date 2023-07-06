import { IngredientsService } from './ingredients.service';
export declare class IngredientsController {
    private readonly ingredientsApi;
    constructor(ingredientsApi: IngredientsService);
    get(): Promise<any>;
    getbyID(params: {
        id: number;
    }): Promise<any>;
    create(ingredientData: any): Promise<any>;
    getIngredientForUserByID(params: {
        userId: number;
    }): Promise<any>;
    updateIngredient(params: {
        id: number;
        ingredientData: any;
    }): Promise<any>;
    deleteIngredient(data: {
        id: number;
    }): Promise<any>;
}
