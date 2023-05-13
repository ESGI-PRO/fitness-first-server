import { Document } from 'mongoose';

export interface IUser extends Document {
  id?: string;
  email: string;
  userName: string;
  mobileNumber?: string;
  is_confirmed: boolean;
  isTrainer?: boolean;
  trainerSpeciality?: string;
  password?: string;
}
