import { ClientProxy } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { IExercise } from './interfaces/exercise.interface';
<<<<<<< HEAD
=======
export declare const fetchData: (url: any, options: any) => Promise<any>;
>>>>>>> b776f9860 (modification get ingredients for web)
export declare class AppService {
    private readonly userServiceClient;
    private readonly exerciseModel;
    constructor(userServiceClient: ClientProxy, exerciseModel: Model<IExercise>);
    onModuleInit(): void;
}
