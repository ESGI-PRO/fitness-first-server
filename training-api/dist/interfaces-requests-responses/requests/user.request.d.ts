import { IUser } from '../interfaces/user.interface';
export interface IUserSearchResponse {
    status: number;
    message: string;
    user: IUser | null;
}
