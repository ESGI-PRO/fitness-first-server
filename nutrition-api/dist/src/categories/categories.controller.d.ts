import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesApi;
    constructor(categoriesApi: CategoriesService);
    get(): Promise<any>;
    getById(params: {
        id: number;
    }): Promise<any>;
}
