export declare class ExercicesService {
    findAll(): Promise<unknown>;
    findOne(id: any): Promise<unknown>;
    findAllByCategory(id: any): Promise<unknown>;
    create(data: any): Promise<unknown>;
    update(id: any, data: any): Promise<unknown>;
    delete(id: any): Promise<unknown>;
    getCategoriesExercices(): Promise<unknown>;
    getCategorieExercicesByID(id: any): Promise<unknown>;
}
