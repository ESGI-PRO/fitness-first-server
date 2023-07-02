import { Injectable, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRoom } from './interfaces/room.interface';
import { IMessage } from './interfaces/message.interface';
import { firstValueFrom } from 'rxjs';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    @InjectModel('Room') private readonly roomModel: Model<IRoom>,
    @InjectModel('Message') private readonly messageModel: Model<IMessage>,
  ) { }


  onModuleInit() {
    const  cleardb = () => {
       this.roomModel.deleteMany({}).exec();
       this.messageModel.deleteMany({}).exec();
     }
      const seedAlgo = async () => {
            //get all users which are trainers
            const trainers = await firstValueFrom(this.userServiceClient.send('user_search_by_params', {isTrainer: true}));

            // for each trainer create a room with each of his traineeIds
            for (let i = 0; i < trainers.length; i++) {
              const trainer = trainers[i];
              const trainees = trainer.traineeIds;
      
              for (let j = 0; j < trainees.length; j++) {
                const traineeId = trainees[j];
                const room = await this.roomModel.create({
                  sender_id: traineeId,
                  members: [trainer.id, traineeId] });
  
                // for each room create 10 messages
                for (let k = 0; k < 10; k++) {
                  const message = await this.messageModel.create({ sender_id: trainer.id, room_id: room.id, message: faker.lorem.sentence() });
                }

              }
            }
     }
 
 
    //cleardb()
    this.roomModel.countDocuments({}).then(async (count) => {
       //console.log(' count is ' + count + '', await this.userModel.find({}).exec());
       if (count < 1) {
         await seedAlgo()
       }
     }).catch((err) => {
       console.log(err);
     });
   }
}
