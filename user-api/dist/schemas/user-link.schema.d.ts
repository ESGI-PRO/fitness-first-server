import * as mongoose from 'mongoose';
declare function transformValue(doc: any, ret: {
    [key: string]: any;
}): void;
export declare const UserLinkSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    toObject: {
        virtuals: true;
        versionKey: false;
        transform: typeof transformValue;
    };
    toJSON: {
        virtuals: true;
        versionKey: false;
        transform: typeof transformValue;
    };
}>, {
    link: string;
    user_id: string;
    is_used: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    link: string;
    user_id: string;
    is_used: boolean;
}>> & Omit<mongoose.FlatRecord<{
    link: string;
    user_id: string;
    is_used: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export {};
