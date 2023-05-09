import * as mongoose from 'mongoose';
export interface IUserSchema extends mongoose.Document {
    email: string;
    password: string;
    is_confirmed: boolean;
    comparePassword: (password: string) => Promise<boolean>;
    getEncryptedPassword: (password: string) => Promise<string>;
}
export declare const UserSchema: mongoose.Schema<IUserSchema, mongoose.Model<IUserSchema, any, any, any, mongoose.Document<unknown, any, IUserSchema> & Omit<IUserSchema & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUserSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<IUserSchema>> & Omit<mongoose.FlatRecord<IUserSchema> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
