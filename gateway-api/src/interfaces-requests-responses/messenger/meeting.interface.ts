interface IMeetingCreate {
    sender_id: string;
    members: Array<string>;
    date: string;
    time: string;
}

interface IMeetingUpdate {
    id: string;
    sender_id: string;
    members: Array<string>;
    date: string;
    time: string;
}

export {
    IMeetingCreate,
    IMeetingUpdate
}