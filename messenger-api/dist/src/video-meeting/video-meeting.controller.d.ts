import { HttpStatus } from '@nestjs/common';
import { VideoMeetingService } from './video-meeting.service';
import { CreateVideoMeetingDto } from './dto/create-video-meeting.dto';
import { UpdateVideoMeetingDto } from './dto/update-video-meeting.dto';
export declare class VideoMeetingController {
    private readonly videoMeetingService;
    constructor(videoMeetingService: VideoMeetingService);
    create(createVideoMeetingDto: CreateVideoMeetingDto): Promise<{
        status: HttpStatus;
        data: any;
        errors: any;
    }>;
    findAllUserMeetings(id: string): Promise<{
        status: HttpStatus;
        data: any;
        errors: any;
    }>;
    update(updateVideoMeetingDto: UpdateVideoMeetingDto): Promise<{
        status: HttpStatus;
        data: any;
        errors: any;
    }>;
    getTwilioToken(id: string): Promise<{
        status: HttpStatus;
        data: {
            token: any;
        };
        errors: any;
    }>;
}
