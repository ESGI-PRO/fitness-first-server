import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async createRoom(createRoomDto: CreateRoomDto) {
    return await this.roomsRepository.createRoom(createRoomDto);
  }

  async findAllRooms(id: string) {
    return await this.roomsRepository.findAllRooms(id);
  }
  // get romms from ids list
  async getRoomsByIds(ids: string[]) {
    return await this.roomsRepository.getRoomsByIds(ids);
  }
}
