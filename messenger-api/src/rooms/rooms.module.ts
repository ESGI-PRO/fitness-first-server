import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema, room } from 'src/_schemas/room.schema';
import { RoomsRepository } from './rooms.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: room.name, schema: RoomSchema }]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService, RoomsRepository],
  exports: [RoomsService],
})
export class RoomsModule {}
