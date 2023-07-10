import { CreateVideoMeetingDto } from './dto/create-video-meeting.dto';
import { UpdateVideoMeetingDto } from './dto/update-video-meeting.dto';
import { VideoMeetingRepository } from './video-meeting.repository';
export declare class VideoMeetingService {
    private readonly meetingsRepository;
    constructor(meetingsRepository: VideoMeetingRepository);
    create(createVideoMeetingDto: CreateVideoMeetingDto): Promise<any>;
    findAllUserMeetings(id: string): Promise<any>;
    updateMeeting(id: string, updateVideoMeetingDto: UpdateVideoMeetingDto): Promise<any>;
}
