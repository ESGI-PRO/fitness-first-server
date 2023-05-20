export interface IUser {
  id?: string;
  email: string;
  userName: string;
  mobileNumber?: string;
  is_confirmed: boolean;
  isTrainer?: boolean;
  trainerSpeciality?: string;
  password?: string;
}
