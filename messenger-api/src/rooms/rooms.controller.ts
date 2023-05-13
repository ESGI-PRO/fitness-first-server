import { Controller, HttpStatus } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { MessagePattern } from '@nestjs/microservices';
import { IRoomCreateResponse } from '../interfaces-requests-responses/responses/room-create-response'
import { IRoomsGetResponse } from '../interfaces-requests-responses/responses/get-all-rooms-response'

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) { }


  @MessagePattern('create-room')
  async createRoom(createRoomDto: CreateRoomDto) {
    let result: IRoomCreateResponse;

    if (createRoomDto) {


      try {
        const room = await this.roomsService.createRoom(createRoomDto);
        result = {
          status: HttpStatus.CREATED,
          message: 'room_create_success',
          room: room,
          errors: null,
        };

      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'room_create_precondition_failed',
          room: null,
          errors: e.errors,
        };
      }

    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'room_create_bad_request',
        room: null,
        errors: null,
      };
    }

    return result;
  }


  @MessagePattern('get-all-rooms')
  async getAllRoomsByUserId(id: string) {
    let result: IRoomsGetResponse;

    if (id) {
      const rooms = await this.roomsService.findAllRooms(id);
      if (rooms) {
        result = {
          status: HttpStatus.OK,
          message: 'get_rooms_success',
          rooms: rooms,
          errors: null,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'rooms_get_by_id_not_found',
          rooms: null,
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'room_create_bad_request',
        rooms: null,
        errors: null,
      };
    }
  }
}
