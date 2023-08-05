export declare class TrainingService {
    createTraining(data: any): Promise<import(".prisma/client").Training>;
    findAllTrainings(): Promise<Array<any>>;
    findAllByID(userId: string): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<import(".prisma/client").Training>;
}
