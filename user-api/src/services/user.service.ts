import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from './config/config.service';
import { IUser } from '../interfaces/user.interface';
import { IUserLink } from '../interfaces/user-link.interface';
import * as data from "../mock/users.json";
import { UserSchema } from 'src/schemas/user.schema';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
    @InjectModel('UserLink') private readonly userLinkModel: Model<IUserLink>,
    private readonly configService: ConfigService,
  ) { }

  onModuleInit() {
   const  cleardb = () => {
      this.userModel.deleteMany({}).exec();
    }
     const seedAlgo = async () => {
           // for all users where !isTrainer and trainerId is null add a valid random user id to trainerId field
           const users = await this.userModel.find({ isTrainer: false, isAdmin: false, trainerId: null }).exec();
           console.log('users', users);
           for (let i = 0; i < users.length; i++) {
             const user = users[i];
             const trainers = await this.userModel.find({ isTrainer: true }).exec();
             console.log('trainers', trainers);
             const randomTrainer = trainers[Math.floor(Math.random() * trainers.length)];
             console.log('randomTrainer', randomTrainer);
             user.trainerId = randomTrainer.id;
             await user.save();
           }

           // for all trainers add some valid random users id to traineeIds field
           const trainers = await this.userModel.find({ isTrainer: true, isAdmin: false }).exec();
           console.log('trainers', trainers);
           for (let i = 0; i < trainers.length; i++) {
             const trainer = trainers[i];
             const users = await this.userModel.find({ isTrainer: false }).exec();
             console.log('users', users);
             const randomUsers = users.filter((user) => user.trainerId == trainer.id);
             console.log('randomUsers', randomUsers, randomUsers.map((user) => user.id));
             trainer.traineeIds = randomUsers.map((user) => user.id);
             await trainer.save();
           }
    }


   //cleardb()
   this.userModel.countDocuments({}).then(async (count) => {
      if (count < 2) {
        //encrypt all users password
        let userList = []
        for (let i = 0; i < data.users.length; i++) {
          const user = data.users[i];
          user.password = await UserSchema.methods.getEncryptedPassword(user.password);
          userList = [...userList, user]
        }
        await this.userModel.insertMany(userList);
        await seedAlgo()
      }else{
        await seedAlgo()
      }


    }).catch((err) => {
      console.log(err);
    });
  }

  public async searchUser(params: any): Promise<IUser[]> {
    return this.userModel.find(params).exec();
  }

  public async searchUserById(id: string): Promise<IUser> {
    return this.userModel.findById(id).exec();
  }

  public async updateUserById(
    id: string,
    userParams: any,
  ): Promise<IUser> {
    console.log("update called", id, userParams)
    this.userModel.updateOne({ _id: id }, userParams).exec()
    return this.userModel.findById(id).exec();
  }

  public async createUser(user: IUser): Promise<IUser> {
    const userModel = new this.userModel(user);
    return await userModel.save();
  }

  public async createUserLink(id: string): Promise<IUserLink> {
    const userLinkModel = new this.userLinkModel({
      user_id: id,
    });
    return await userLinkModel.save();
  }

  public async getUserLink(link: string): Promise<IUserLink[]> {
    return this.userLinkModel.find({ link, is_used: false }).exec();
  }

  public async updateUserLinkById(
    id: string,
    linkParams: { is_used: boolean },
  ): Promise<IUserLink> {
    this.userLinkModel.updateOne({ _id: id }, linkParams);
    return this.userLinkModel.findById(id).exec()
  }

  public getConfirmationLink(link: string): string {
    return `${this.configService.get('baseUri')}:${this.configService.get(
      'gatewayPort',
    )}/users/confirm/${link}`;
  }
}
