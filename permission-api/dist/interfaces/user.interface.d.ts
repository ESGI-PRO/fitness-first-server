export interface IUser {
    id?: string;
    email: string;
    password: string;
    is_confirmed: boolean;
    userName?: string;
    mobileNumber?: string;
    isTrainer?: boolean;
    isAdmin?: boolean;
    trainerId?: string;
    traineeIds?: Array<string>;
    trainerSpeciality?: string;
}
