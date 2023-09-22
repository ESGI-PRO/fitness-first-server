import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRoom } from './interfaces/room.interface';
import { IMessage } from './interfaces/message.interface';
import { IMeetingCreate } from './interfaces/meeting.interface';
import { firstValueFrom } from 'rxjs';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    @InjectModel('Room') private readonly roomModel: Model<IRoom>,
    @InjectModel('Message') private readonly messageModel: Model<IMessage>,
    @InjectModel('Meeting') private readonly meetingModel: Model<IMeetingCreate>,
  ) { }

  onModuleInit() {
    const cleardb = async () => {
      await this.roomModel.deleteMany({}).exec();
      await this.messageModel.deleteMany({}).exec();
    };
    const seedAlgo = async () => {
      //get all users which are trainers
      const trainers = await firstValueFrom(
        this.userServiceClient.send('user_search_by_params', {
          isTrainer: true,
        }),
      );

      // for each trainer create a room with each of his traineeIds
      for (let i = 0; i < trainers.length; i++) {
        const trainer = trainers[i];
        const trainees = trainer.traineeIds;

        for (let j = 0; j < trainees.length; j++) {
          const traineeId = trainees[j];
          const members = [trainer.id, traineeId];
          const room = await this.roomModel.create({
            sender_id: traineeId,
            members: members,
          });

          // for each trainer and trainee create 2 meetings
          for (let k = 0; k < 2; k++) {
            await this.meetingModel.create({
              sender_id: traineeId,
              members: [trainer.id, traineeId],
              date: faker.date.soon().toISOString(),
              time: faker.date.anytime().toISOString(),
              description: faker.lorem.sentence({
                min: 20,
                max: 30
              })
            });
          }


          // for each room create 10 messages
          for (let k = 0; k < 10; k++) {
            await this.messageModel.create({
              sender_id: members[Math.floor(Math.random() * 2)],
              room_id: room.id,
              message: faker.lorem.sentence(),
            });
          }

        }
      }
    };

    // cleardb()
    this.roomModel.countDocuments({})
      .then(async (count) => {
        //console.log(' count is ' + count + '', await this.roomModel.find({}).exec());
        if (count < 1) {
          await seedAlgo();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
