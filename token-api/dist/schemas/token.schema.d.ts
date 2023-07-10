import * as mongoose from 'mongoose';
declare function transformValue(doc: any, ret: {
    [key: string]: any;
}): void;
export declare const TokenSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
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
    user_id: string;
    token: string;
    type: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    user_id: string;
    token: string;
    type: string;
}>> & Omit<mongoose.FlatRecord<{
    user_id: string;
    token: string;
    type: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export {};
