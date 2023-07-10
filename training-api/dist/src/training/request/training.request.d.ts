export declare class TrainingRequest {
    name: string;
    description: string;
    category: number;
    listExercices: Array<String>;
    durationStart: Date;
    durationEnd: Date;
    image: string;
    userId: string;
    trainingOnExercices: Array<String>;
}
export declare class UpdateTrainingRequest {
    name: string;
    description: string;
    repetition: number;
    category: string;
    outils: string;
    image: string;
    temps: number;
    userId: number;
}
