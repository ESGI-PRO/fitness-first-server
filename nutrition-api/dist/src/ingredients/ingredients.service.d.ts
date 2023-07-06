export declare class IngredientsService {
    getIngredients(): Promise<unknown>;
    getIngredientByID(id: any): Promise<unknown>;
    createIngredient(data: any): Promise<unknown>;
    getIngredientForUserByID(userId: any): Promise<unknown>;
    updateIngredient(id: number, data: any): Promise<any>;
    deleteIngredient(id: number): Promise<any>;
}
