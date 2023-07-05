import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoMeetingDto } from './create-video-meeting.dto';

export class UpdateVideoMeetingDto extends PartialType(CreateVideoMeetingDto) {
  id: string;
}
