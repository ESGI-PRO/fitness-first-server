import { Test, TestingModule } from '@nestjs/testing';
import { VideoMeetingController } from './video-meeting.controller';
import { VideoMeetingService } from './video-meeting.service';

describe('VideoMeetingController', () => {
  let controller: VideoMeetingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoMeetingController],
      providers: [VideoMeetingService],
    }).compile();

    controller = module.get<VideoMeetingController>(VideoMeetingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
