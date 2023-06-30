import { RecettesService } from './recettes.service';
export declare class RecettesController {
    private readonly recettesApi;
    constructor(recettesApi: RecettesService);
    get(): Promise<any>;
    getbyID(params: {
        id: number;
    }): Promise<any>;
    create(data: any): Promise<any>;
    getRecetteForUserByID(userId: number): Promise<any>;
}
