export declare class TrainingService {
    createTraining(data: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        description: string;
        category: number;
        userId: string;
        image: string;
        listExercices: string[];
        durationStart: Date;
        durationEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAllTrainings(): Promise<Array<any>>;
    findAllByID(userId: string): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        description: string;
        category: number;
        userId: string;
        image: string;
        listExercices: string[];
        durationStart: Date;
        durationEnd: Date;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
