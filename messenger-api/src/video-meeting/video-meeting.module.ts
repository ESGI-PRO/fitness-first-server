import { Module } from '@nestjs/common';
import { VideoMeetingService } from './video-meeting.service';
import { VideoMeetingController } from './video-meeting.controller';
import { VideoMeetingRepository } from './video-meeting.repository';
import { ConfigService } from '../services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingSchema, Meeting } from 'src/_schemas/meeting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }]),
  ],
  controllers: [VideoMeetingController],
  providers: [VideoMeetingService, VideoMeetingRepository,
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService]
    }
  ]
})
export class VideoMeetingModule {}
