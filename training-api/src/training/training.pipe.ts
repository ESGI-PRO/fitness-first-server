import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TrainingPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}