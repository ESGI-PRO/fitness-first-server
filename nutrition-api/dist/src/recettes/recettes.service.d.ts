export declare class RecettesService {
    getRecettes(): Promise<unknown>;
    getRecetteByID(id: any): Promise<unknown>;
    createRecette(data: any): Promise<unknown>;
    getRecetteForUserByID(userId: any): Promise<unknown>;
    deleteRecette(id: number): Promise<any>;
}
