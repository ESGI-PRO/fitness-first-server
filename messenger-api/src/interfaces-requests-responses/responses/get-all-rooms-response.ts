import { IRoom } from '../interfaces/room.interface';

export interface IRoomsGetResponse {
  status: number;
  message: string;
  data: {
    rooms: Array<IRoom>;
  };
  errors: { [key: string]: any };
}
