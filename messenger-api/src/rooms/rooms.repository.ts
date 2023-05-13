import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDo } from 'src/_schemas/room.do';
import { Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IUserSearchResponse } from '../interfaces-requests-responses/requests/user.request'

export class RoomsRepository {
  constructor(
    @InjectModel('room')
    private roomModel: Model<RoomDo>,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  async createRoom(room): Promise<any> {
    const createOne = await this.roomModel.create(room);
    return createOne;
  }

  async findAllRooms(id): Promise<any> {
    const findAll = await this.roomModel.find({ members: { $all: [id] } });

   // for each room, get the members user's info
    const rooms = await Promise.all(
      findAll.map(async (room) => {
        const members = await Promise.all(
          room.members.map(async (member_id) => {
            const response: IUserSearchResponse = await firstValueFrom(this.userServiceClient
              .send('user_get_by_id', member_id));
            const user = response.user
            return user;
          }),
        );
        return { ...room.toObject(), members };
      }
    ));

    return rooms;

  }
}
