import { IngredientsService } from './ingredients.service';
export declare class IngredientsController {
    private readonly ingredientsApi;
    constructor(ingredientsApi: IngredientsService);
    get(): Promise<any>;
    getbyID(params: {
        id: number;
    }): Promise<any>;
    create(data: any): Promise<any>;
    getIngredientForUserByID(params: {
        userId: number;
    }): Promise<any>;
}
