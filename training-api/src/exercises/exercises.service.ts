import { Injectable } from '@nestjs/common';
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

  async deleteExercise(id: string) {
    return await this.exercisesRepository.deleteExercise(id);
  }

  async findExerciseById(id: string) {
    return await this.exercisesRepository.findExerciseById(id);
  }

  async updateExerciseById(id: string, exerciseParams: any) {
    return await this.exercisesRepository.updateExerciseById(id, exerciseParams);
  }
}
