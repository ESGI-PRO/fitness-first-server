declare class CreateMeetingDto {
    sender_id: string;
    members: Array<string>;
    date: string;
    time: string;
}
declare class UpdateMeetingDto {
    id: string;
    sender_id: string;
    members: Array<string>;
    date: string;
    time: string;
}
export { CreateMeetingDto, UpdateMeetingDto };
