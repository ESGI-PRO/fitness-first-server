import { Model } from 'mongoose';
import { MeetingDo } from 'src/_schemas/meeting.do';
import { ClientProxy } from '@nestjs/microservices';
import { CreateVideoMeetingDto } from './dto/create-video-meeting.dto';
import { UpdateVideoMeetingDto } from './dto/update-video-meeting.dto';
export declare class VideoMeetingRepository {
    private readonly meetingModel;
    private readonly userServiceClient;
    constructor(meetingModel: Model<MeetingDo>, userServiceClient: ClientProxy);
    createMeeting(meeting: CreateVideoMeetingDto): Promise<any>;
    updateMeeting(id: string, meeting: UpdateVideoMeetingDto): Promise<any>;
    findAllMeetings(id: any): Promise<any>;
}
