import {
  Controller,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('analytic')
@ApiTags('analytic')
export class AnalyticController {
  constructor(
    @Inject('ANALYTIC_SERVICE') private readonly trainingServiceClient: ClientProxy,
  ) {}

}
