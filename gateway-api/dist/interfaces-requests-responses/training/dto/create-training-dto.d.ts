export declare class CreateTrainingDTO {
    name: string;
    description: string;
    category: number;
    userId: string;
    image: string;
    listExercices: [];
    durationStart: Date;
    durationEnd: Date;
    createdAt: Date;
    updatedAt: Date;
    trainingOnExercices: object;
}
