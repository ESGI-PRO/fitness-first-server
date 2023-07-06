import { Document } from 'mongoose';
export interface IRoom extends Document {
    id?: string;
    member: string[];
}
