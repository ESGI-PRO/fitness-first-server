import { Controller, HttpStatus } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { MessagePattern } from '@nestjs/microservices';
import { IExercisesGetResponse } from '../interfaces-requests-responses/responses/get-all-exercises-response'
import { IExerciseCreateResponse } from '../interfaces-requests-responses/responses/exercise-create-response'

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}


  @MessagePattern('create_exercise')
  async createExercises(createExerciseDto: CreateExerciseDto) {
    let result: IExerciseCreateResponse;

    if (createExerciseDto) {
      const exercises =  await this.exercisesService.createExercises(createExerciseDto.exercises);

      if (exercises) {
        result = {
          status: HttpStatus.CREATED,
          message: 'exercises_create_success',
          data: {
            exercises: exercises,
          },
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'exercises_create_bad_request',
        data: {
          exercises: null,
        },
        errors: null,
      };
    }

    return result;
  }


  @MessagePattern('get_user_current_exercises')
  async getUserCurrentExercises(data: {user_id: string, trainer_id: string}) {
    let result: IExercisesGetResponse;

    if (data) {
      const exercises =  await this.exercisesService.findUserCurrentExercises(data);
      if (exercises) {
        result = {
          status: HttpStatus.OK,
          message: 'user_current_exercises_get_success',
          data: {
            exercises: exercises,
          },
          errors: null,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'user_current_exercises_get_not_found',
          data: {
            exercises: null,
          },
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_current_exercises_get_bad_request',
        data: {
          exercises: null,
        },
        errors: null,
      };
    }

    return result
  }
}
