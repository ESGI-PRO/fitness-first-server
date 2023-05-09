import {
  Controller,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('training')
@ApiTags('training')
export class TrainingController {
  constructor(
    @Inject('TRAINING_SERVICE') private readonly trainingServiceClient: ClientProxy,
  ) {
    
  }

}
