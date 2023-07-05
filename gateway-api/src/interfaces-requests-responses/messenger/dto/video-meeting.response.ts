import { ApiProperty } from '@nestjs/swagger';
import { IMeetingCreate, IMeetingUpdate } from '../meeting.interface';

class CreateMeetingResponseDto {
  @ApiProperty({ example: 201 })
  status: number;
  @ApiProperty({ example: 'meeting_create_success' })
  message: string;
  @ApiProperty({
    example: {
      meeting: {
        id: '5d987c3bfb881ec86b476b89',
        sender_id: '5d987c3bfb881ec86b476bcc',
        members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476b09'],
        date: '2023-07-05T12:26:58.225Z',
        time: '2023-07-05T12:24:58.225Z',
        description: 'This is a description',
      },
    },
    nullable: true,
  })
  data: {
    meeting: IMeetingCreate;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}

class UpdateMeetingResponseDto {
    @ApiProperty({ example: 200 })
    status: number;
    @ApiProperty({ example: 'meeting_update_success' })
    message: string;
    @ApiProperty({
      example: {
        meeting: {
          id: '5d987c3bfb881ec86b476b89',
          sender_id: '5d987c3bfb881ec86b476bcc',
          members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476b09'],
          date: '23/07/2023',
          time: '08:12',
          description: 'This is a description',
        },
      },
      nullable: true,
    })
    data: {
      meeting: IMeetingUpdate;
    };
    @ApiProperty({ example: null, nullable: true })
    errors: { [key: string]: any };
}

class GetTwilioTokenResponseDto {
    @ApiProperty({ example: 200 })
    status: number;
    @ApiProperty({ example: 'get_twilio_token_success' })
    message: string;
    @ApiProperty({
      example: {
          token: '5d987c3bTYfb88TY1ec86b476b8HJBHdsq9O09sqssdfqPwqd',
      }
    })
    data: {
        token: string
    };
    @ApiProperty({ example: null, nullable: true })
    errors: { [key: string]: any };
}

class GetAllMeetingResponseDto {
  @ApiProperty({ example: 201 })
  status: number;
  @ApiProperty({ example: 'meeting_create_success' })
  message: string;
  @ApiProperty({
    example: {
      meetings: [{
        id: '5d987c3bfb881ec86b476b89',
        sender_id: '5d987c3bfb881ec86b476bcc',
        members: ['5d987c3bfb881ec86b476bcc', '5d987c3bfb881ec86b476b09'],
        date: '23/07/2023',
        time: '08:12',
        description: 'This is a description',
      }]
    },
    nullable: true,
  })
  data: {
    meeting: IMeetingCreate;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}

export {
    CreateMeetingResponseDto,
    UpdateMeetingResponseDto,
    GetTwilioTokenResponseDto,
    GetAllMeetingResponseDto
}