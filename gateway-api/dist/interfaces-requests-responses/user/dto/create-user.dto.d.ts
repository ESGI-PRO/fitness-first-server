export declare class CreateUserDto {
    email: string;
    password: string;
    userName: string;
    mobileNumber: string;
    isTrainer: boolean;
    isAdmin: boolean;
    trainerId: string;
    traineeIds: Array<string>;
    trainerSpeciality: string;
    is_confirmed: boolean;
}
