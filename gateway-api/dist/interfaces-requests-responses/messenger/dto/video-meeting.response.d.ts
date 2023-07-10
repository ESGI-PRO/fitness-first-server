import { IMeetingCreate, IMeetingUpdate } from '../meeting.interface';
declare class CreateMeetingResponseDto {
    status: number;
    message: string;
    data: {
        meeting: IMeetingCreate;
    };
    errors: {
        [key: string]: any;
    };
}
declare class UpdateMeetingResponseDto {
    status: number;
    message: string;
    data: {
        meeting: IMeetingUpdate;
    };
    errors: {
        [key: string]: any;
    };
}
declare class GetTwilioTokenResponseDto {
    status: number;
    message: string;
    data: {
        token: string;
    };
    errors: {
        [key: string]: any;
    };
}
declare class GetAllMeetingResponseDto {
    status: number;
    message: string;
    data: {
        meeting: IMeetingCreate;
    };
    errors: {
        [key: string]: any;
    };
}
export { CreateMeetingResponseDto, UpdateMeetingResponseDto, GetTwilioTokenResponseDto, GetAllMeetingResponseDto };
