import { Controller, HttpStatus } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { MessagePattern } from '@nestjs/microservices';
import { IRoomCreateResponse } from '../interfaces-requests-responses/responses/room-create-response'
import { IRoomsGetResponse } from '../interfaces-requests-responses/responses/get-all-rooms-response'

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) { }


  @MessagePattern('create_room')
  async createRoom(createRoomDto: CreateRoomDto) {
    let result: IRoomCreateResponse;

    if (createRoomDto) {


      try {
        const room = await this.roomsService.createRoom(createRoomDto);
        result = {
          status: HttpStatus.CREATED,
          message: 'room_create_success',
          data: {
            room: room,
          },
          errors: null,
        };

      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'room_create_precondition_failed',
          data: {
            room: null,
          },
          errors: e.errors,
        };
      }

    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'room_create_bad_request',
        data: {
          room: null,
        },
        errors: null,
      };
    }

    return result;
  }


  @MessagePattern('get_all_rooms')
  async getAllRoomsByUserId(data: { userId: string}) {
    const { userId } = data
    let result: IRoomsGetResponse;

    if (userId) {
      const rooms = await this.roomsService.findAllRooms(userId);
      if (rooms) {
        result = {
          status: HttpStatus.OK,
          message: 'get_rooms_success',
          data: {
            rooms: rooms,
          },
          errors: null,
        };
      } else {
        result = {
          status: HttpStatus.NOT_FOUND,
          message: 'rooms_get_by_id_not_found',
          data: {
            rooms: null,
          },
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'room_create_bad_request',
        data: {
          rooms: null,
        },
        errors: null,
      };
    }

    return result
  }

  // get rooms from ids list
  @MessagePattern('get_rooms_by_member_ids')
  async getRoomsByIds(data: { ids: string[] }) {
    const { ids } = data
    let result: any;

    if (ids && ids.length > 0) {
      result = await this.roomsService.getRoomsByIds(ids);
    }

    return result
  }
}
