import {
    Controller,
    Inject,
  } from '@nestjs/common';
  import { ClientProxy } from '@nestjs/microservices';
  import { ApiTags } from '@nestjs/swagger';
  
  @Controller('messenger')
  @ApiTags('messenger')
  export class MessengerController {
    constructor(
      @Inject('MESSENGER_SERVICE') private readonly messengerServiceClient: ClientProxy,
    ) {
      
    }
  
  }
  