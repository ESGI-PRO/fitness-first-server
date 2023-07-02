import * as mongoose from 'mongoose';
export interface IUserSchema extends mongoose.Document {
    email: string;
    userName: string;
    mobileNumber: string;
    isTrainer: Boolean;
    trainerSpeciality: string;
    trainerId: string;
    traineeIds: Array<string>;
    password: string;
    is_confirmed: boolean;
    role: string;
    comparePassword: (password: string) => Promise<boolean>;
    getEncryptedPassword: (password: string) => Promise<string>;
}
export declare const UserSchema: mongoose.Schema<IUserSchema, mongoose.Model<IUserSchema, any, any, any, mongoose.Document<unknown, any, IUserSchema> & Omit<IUserSchema & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUserSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<IUserSchema>> & Omit<mongoose.FlatRecord<IUserSchema> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
