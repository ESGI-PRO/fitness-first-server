import { Injectable } from '@nestjs/common';
import { CreateVideoMeetingDto } from './dto/create-video-meeting.dto';
import { UpdateVideoMeetingDto } from './dto/update-video-meeting.dto';
import { VideoMeetingRepository } from './video-meeting.repository';

@Injectable()
export class VideoMeetingService {
  constructor(private readonly meetingsRepository: VideoMeetingRepository) {}

  create(createVideoMeetingDto: CreateVideoMeetingDto) {
    return this.meetingsRepository.createMeeting(createVideoMeetingDto);
  }

  findAllUserMeetings(id: string) {
    return this.meetingsRepository.findAllMeetings(id);
  }

  updateMeeting(id: string, updateVideoMeetingDto: UpdateVideoMeetingDto) {
    return this.meetingsRepository.updateMeeting(id, updateVideoMeetingDto)
  }
}
