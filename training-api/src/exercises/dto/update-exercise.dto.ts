// update-exercise.dto.ts
export class UpdateExerciseDto {
    user_id: string;
    trainer_id: string;
    content: {
      bodyPart: string;
      equipment: string;
      gifUrl: string;
      id: string;
      name: string;
      target: string;
    };
  }