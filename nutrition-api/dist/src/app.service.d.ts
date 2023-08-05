import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly userServiceClient;
    constructor(userServiceClient: ClientProxy);
    getHello(): string;
    onModuleInit(): void;
}
