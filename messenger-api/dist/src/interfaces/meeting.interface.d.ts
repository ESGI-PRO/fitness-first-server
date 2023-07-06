interface IMeetingCreate {
    sender_id: string;
    members: Array<string>;
    date: string;
    time: string;
    description: string;
}
interface IMeetingUpdate {
    id: string;
    sender_id: string;
    members: Array<string>;
    date: string;
    time: string;
    description: string;
}
export { IMeetingCreate, IMeetingUpdate };
