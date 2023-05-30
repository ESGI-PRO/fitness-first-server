export interface IUser {
  id?: string;
  email: string;
  userName: string;
  mobileNumber?: string;
  is_confirmed: boolean;
  isTrainer?: boolean;
  trainerId?: string;
  traineeIds?: Array<string>;
  trainerSpeciality?: string;
  password?: string;
}
