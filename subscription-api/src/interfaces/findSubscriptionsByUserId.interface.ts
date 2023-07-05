import { ISubcription } from './subcription.interface';

export interface ISubcriptionResponse {
  status: number;
  message: string;
  subscriptions: ISubcription[] | null;
}
