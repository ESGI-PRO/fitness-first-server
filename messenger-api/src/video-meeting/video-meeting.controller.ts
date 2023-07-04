import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VideoMeetingService } from './video-meeting.service';
import { CreateVideoMeetingDto } from './dto/create-video-meeting.dto';
import { UpdateVideoMeetingDto } from './dto/update-video-meeting.dto';

const AccessToken = require('twilio').jwt.AccessToken;

@Controller()
export class VideoMeetingController {
  constructor(private readonly videoMeetingService: VideoMeetingService) {}

  @MessagePattern('create_video_meeting')
  async create(@Payload() createVideoMeetingDto: CreateVideoMeetingDto) {
   const data = await this.videoMeetingService.create(createVideoMeetingDto);
   console.log("create_video_meeting", data)
    if(data){
      return {
        status: HttpStatus.OK,
        data: data,
        errors: null
      }
    }else{
      return {
        status: HttpStatus.BAD_REQUEST,
        data: null,
        errors: null
      }
    }
  }

  @MessagePattern('find_all_video_meeting')
  async findAllUserMeetings(@Payload() id: string) {
    const data = await this.videoMeetingService.findAllUserMeetings(id);
    console.log("find_all_video_meeting", data)
    if(data){
      return {
        status: HttpStatus.OK,
        data: data,
        errors: null
      }
    }else{
      return {
        status: HttpStatus.BAD_REQUEST,
        data: null,
        errors: null
      }
    }
  }

  @MessagePattern('update_video_meeting')
  async update(@Payload() updateVideoMeetingDto: UpdateVideoMeetingDto) {
    const data = await this.videoMeetingService.updateMeeting(updateVideoMeetingDto.id, updateVideoMeetingDto);
    console.log("update_video_meeting", data)
    if(data){
      return {
        status: HttpStatus.OK,
        data: data,
        errors: null
      }
    }else{
      return {
        status: HttpStatus.BAD_REQUEST,
        data: null,
        errors: null
      }
    }
  }

  @MessagePattern('get_twilio_token')
  async getTwilioToken(@Payload() id: string) {
    const VideoGrant = AccessToken.VideoGrant;

    const videoGrant = new VideoGrant();
    const token = new AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY_SID,
      process.env.TWILIO_API_KEY_SECRET,
      { identity: id}
    );
    token.identity = id;
    token.addGrant(videoGrant);
    console.log("get_twilio_token", token)
    return {
     status: HttpStatus.OK,
     data: {
      token: token.toJwt()
     },
     errors: null
    };
  }
}
