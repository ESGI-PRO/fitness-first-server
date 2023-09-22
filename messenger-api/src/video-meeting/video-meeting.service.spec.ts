import { Test, TestingModule } from '@nestjs/testing';
import { VideoMeetingService } from './video-meeting.service';

describe('VideoMeetingService', () => {
  let service: VideoMeetingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoMeetingService],
    }).compile();

    service = module.get<VideoMeetingService>(VideoMeetingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
