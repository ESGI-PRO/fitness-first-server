import { Injectable, NotFoundException } from '@nestjs/common';
import { ExercisesRepository } from './exercises.repository';
import { IExercise } from "../interfaces-requests-responses/interfaces/exercise.interface"
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(private readonly exercisesRepository: ExercisesRepository) {}

  async createExercises(createExerciseDto: IExercise[]) {
    return await this.exercisesRepository.createExercises(createExerciseDto);
  }

  async findUserCurrentExercises(data: { user_id: string; trainer_id: string }) {
    return await this.exercisesRepository.findUserCurrentExercises(data);
  }

  async findAllExercises() {
    return await this.exercisesRepository.findAllExercises();
  }

  async deleteExercise(id: string) {
    try {
      return await this.exercisesRepository.deleteExercise(id);
    } catch (error) {
      throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
    }
  }


  // async updateExercise(id: string, updateExerciseDto: UpdateExerciseDto): Promise<any> {
  //   try {
  //     const existingExercise = await this.exercisesRepository.exerciseModel.findById(id);

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
  //       existingExercise.content = { ...existingExercise.content, ...updateExerciseDto.content };
  //     }
  //     // Ajoutez plus de champs à mettre à jour au besoin...

  //     // Enregistrez l'exercice mis à jour dans la base de données
  //     await existingExercise.save();

  //     // Retournez l'exercice mis à jour ou un message de succès si nécessaire
  //     return existingExercise; // Vous pouvez personnaliser la réponse en fonction de vos besoins.
  //   } catch (error) {
  //     throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
  //   }
  // }

  async findExerciseById(id: string) {
    return await this.exercisesRepository.findExerciseById(id);
  }

  
}
