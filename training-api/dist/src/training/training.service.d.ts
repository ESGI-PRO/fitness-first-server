export declare class TrainingService {
    createTraining(data: any): Promise<any>;
    findAllTrainings(): Promise<Array<any>>;
    findAllByID(userId: string): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<any>;
}
