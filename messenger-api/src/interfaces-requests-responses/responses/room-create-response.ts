import { IRoom } from '../interfaces/room.interface';

export interface IRoomCreateResponse {
  status: number;
  message: string;
  room: IRoom | null;
  errors: { [key: string]: any };
}
