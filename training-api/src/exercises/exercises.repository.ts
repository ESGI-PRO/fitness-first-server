import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExerciseDo } from 'src/_schemas/exercise.do';
import { Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IUserSearchResponse } from '../interfaces-requests-responses/requests/user.request'
import { IExercise } from "../interfaces-requests-responses/interfaces/exercise.interface"

export class ExercisesRepository {
  constructor(
    @InjectModel('Exercise')
    private exerciseModel: Model<ExerciseDo>
  ) {}

  async createExercises(exercises: IExercise[]): Promise<any> {
    const createOne = await this.exerciseModel.insertMany(exercises);
    return createOne;
  }

  async findUserCurrentExercises({
    user_id,
    trainer_id,
  }: { user_id: string; trainer_id: string}): Promise<any> {
    const exercises = await this.exerciseModel.find({ user_id, trainer_id});
    return exercises;
  }

  async findAllExercises() : Promise<any> {
    return await this.exerciseModel.find({}).exec();
  }
}
