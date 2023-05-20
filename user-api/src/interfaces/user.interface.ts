import { Document } from 'mongoose';

export interface IUser extends Document {
  id?: string;
  email: string;
  password: string;
  is_confirmed: boolean;
  userName?: string;
  mobileNumber?: string;
  isTrainer?: boolean;
  trainerSpeciality?: string;
  compareEncryptedPassword: (password: string) => boolean;
  getEncryptedPassword: (password: string) => string;
}
