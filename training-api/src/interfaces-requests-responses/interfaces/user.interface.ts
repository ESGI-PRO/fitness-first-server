import { Document } from 'mongoose';

export interface IUser extends Document {
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
  compareEncryptedPassword: (password: string) => boolean;
  getEncryptedPassword: (password: string) => string;
}
