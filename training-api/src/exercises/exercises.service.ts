import { Injectable, NotFoundException } from '@nestjs/common';
import { ExercisesRepository } from './exercises.repository';
import { IExercise } from "../interfaces-requests-responses/interfaces/exercise.interface"

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

  // async deleteExercise(id: string) {
  //   try {
  //     // Utilisez Mongoose pour supprimer l'exercice par son ID
  //     return await this.exercisesRepository.deleteExercise(id);
  //   } catch (error) {
  //     // Gérez les erreurs ici (par exemple, NotFoundException si l'exercice n'est pas trouvé)
  //     throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
  //   }
  // }

  async deleteExercise(id: string) {
    try {
      return await this.exercisesRepository.deleteExercise(id);
    } catch (error) {
      throw new NotFoundException(`Exercice avec l'ID ${id} non trouvé`);
    }
  }
}
