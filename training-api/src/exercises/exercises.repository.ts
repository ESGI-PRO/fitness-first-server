import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExerciseDo } from 'src/_schemas/exercise.do';
import { Inject, NotFoundException } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IUserSearchResponse } from '../interfaces-requests-responses/requests/user.request'
import { IExercise } from "../interfaces-requests-responses/interfaces/exercise.interface"
import { UpdateExerciseDto } from './dto/update-exercise.dto';

export class ExercisesRepository {
  constructor(
    @InjectModel('Exercise')
    public exerciseModel: Model<ExerciseDo>
  ) { }

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
  }: { user_id: string; trainer_id: string }): Promise<any> {
    const exercises = await this.exerciseModel.find({ user_id, trainer_id });
    return exercises;
  }

  async findAllExercises(): Promise<any> {
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

  async deleteExercise(id: string): Promise<any> {
    try {
      return await this.exerciseModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
    }

  }

  // async updateExercise(id: string, updateExerciseDto: UpdateExerciseDto): Promise<any> {

  // }

  // async updateExercise(id: string, updateExerciseDto: UpdateExerciseDto): Promise<any> {
  //   try {
  //     // Recherchez l'exercice existant par son ID
  //     const existingExercise = await this.exerciseModel.findById(id);
  
  //     if (!existingExercise) {
  //       throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
  //     }
  
  //     // Mettez à jour les champs de l'exercice en fonction de updateExerciseDto
  //     if (updateExerciseDto.user_id) {
  //       existingExercise.user_id = updateExerciseDto.user_id;
  //     }
  //     if (updateExerciseDto.trainer_id) {
  //       existingExercise.trainer_id = updateExerciseDto.trainer_id;
  //     }
  //     if (updateExerciseDto.content) {
  //       // Mettez à jour les champs du contenu de l'exercice si nécessaire
  //       existingExercise.content.bodyPart = updateExerciseDto.content.bodyPart;
  //       existingExercise.content.equipment = updateExerciseDto.content.equipment;
  //       existingExercise.content.gifUrl = updateExerciseDto.content.gifUrl;
  //       existingExercise.content.name = updateExerciseDto.content.name;
  //       existingExercise.content.target = updateExerciseDto.content.target;
  //       // Ajoutez plus de champs à mettre à jour au besoin...
  //     }
  
  //     // Enregistrez l'exercice mis à jour dans la base de données
  //     await existingExercise.save();
  
  //     // Retournez l'exercice mis à jour ou un message de succès si nécessaire
  //     return existingExercise; // Vous pouvez personnaliser la réponse en fonction de vos besoins.
  //   } catch (error) {
  //     throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
  //   }
  // }

  /// REPOSITORY EXERCICES
  async findExerciseById(id: string) : Promise<any> {
    return await this.exerciseModel.findOne({ _id: id }).exec();
  }
}
