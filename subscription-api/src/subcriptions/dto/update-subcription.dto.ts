import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcriptionDto } from './create-subcription.dto';

export class UpdateSubcriptionDto extends PartialType(CreateSubcriptionDto) {
  id: string;
}
