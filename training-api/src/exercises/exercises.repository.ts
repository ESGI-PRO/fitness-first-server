import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExerciseDo } from 'src/_schemas/exercise.do';
import { Inject, NotFoundException } from '@nestjs/common'
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
    // for each exercise insert only if it doesn't exist
    let exercisesInserted = []

    exercises.forEach(async (exercise) => {
      const exerciseExists = await this.exerciseModel.exists({ user_id: exercise.user_id, trainer_id: exercise.trainer_id, content: exercise.content });
      if (!exerciseExists) {
        const exerciseDo = new this.exerciseModel(exercise);
        await exerciseDo.save()
        exercisesInserted.push(exercise)
      }
    });

    return exercisesInserted;

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

  // async deleteExercise(id: string) : Promise<any> {
  //   try {
  //     // Utilisez Mongoose pour supprimer l'exercice par son ID
  //     return await this.exerciseModel.findByIdAndDelete(id).exec();
  //   } catch (error) {
  //     // Gérez les erreurs ici (par exemple, NotFoundException si l'exercice n'est pas trouvé)
  //     throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
  //   }
  // }

  async deleteExercise(id: string) : Promise<any> {
    try {
      return await this.exerciseModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
    }
    
  }
}
