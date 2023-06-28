import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema, Room } from 'src/_schemas/room.schema';
import { RoomsRepository } from './rooms.repository';
import { ConfigService } from '../services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService, RoomsRepository,
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    }
  ],
  exports: [RoomsService],
})
export class RoomsModule {}
