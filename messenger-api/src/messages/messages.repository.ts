import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDo } from 'src/_schemas/message.do';
import { Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IUserSearchResponse } from '../interfaces-requests-responses/requests/user.request'

export class MessagesRepository {
  constructor(
    @InjectModel('Message')
    private messageModel: Model<MessageDo>,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  async createMessage(message): Promise<any> {
    const createOne = await this.messageModel.create(message);
    return createOne;
  }

  async findAllMessages(id): Promise<any> {
    const findAll = await this.messageModel.find({ room_id: { $all: [id] } });
    // for each user, get the sender user's info
    const messages = await Promise.all(
      findAll.map(async (message) => {
        const response: IUserSearchResponse =  await firstValueFrom(this.userServiceClient
          .send('user_get_by_id', message.sender_id));
        const sender_id = response.user
        return { ...message.toObject(), sender_id };
      }
    ));
    return messages;
  }
}
