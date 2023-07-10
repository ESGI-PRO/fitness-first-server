import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MeetingDo } from 'src/_schemas/meeting.do';
import { Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IUserSearchResponse } from '../interfaces-requests-responses/requests/user.request'
import { CreateVideoMeetingDto } from './dto/create-video-meeting.dto';
import { UpdateVideoMeetingDto } from './dto/update-video-meeting.dto';

export class VideoMeetingRepository {
  constructor(
    @InjectModel('Meeting') private readonly meetingModel: Model<MeetingDo>,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  async createMeeting(meeting: CreateVideoMeetingDto): Promise<any> {
    const data = await this.meetingModel.create(meeting);
    return data;
  }

  async updateMeeting(id: string, meeting: UpdateVideoMeetingDto): Promise<any> {
    this.meetingModel.updateOne({ _id: id }, meeting).exec()
    return this.meetingModel.findById(id).exec()
  }

  async findAllMeetings(id): Promise<any> {
    const findAll = await this.meetingModel.find({ members: { $all: [id] } });

   // for each Meeting, get the members user's info
    const meetings = await Promise.all(
      findAll.map(async (Meeting) => {
        const members = await Promise.all(
          Meeting.members.map(async (member_id) => {
            const response: IUserSearchResponse = await firstValueFrom(this.userServiceClient
              .send('user_get_by_id', member_id.toString()));
            const user = response.user
            return user;
          }),
        );
        return { ...Meeting.toObject(), members };
      }
    ));

    return meetings;

  }
}
