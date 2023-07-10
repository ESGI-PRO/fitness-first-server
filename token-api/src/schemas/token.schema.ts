import * as mongoose from 'mongoose';
import { tokenTypes } from '../services/config/token.types';

function transformValue(doc, ret: { [key: string]: any }) {
  delete ret._id;
}

export const TokenSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, 'User can not be empty'],
    },
    token: {
      type: String,
      required: [true, 'Token can not be empty'],
    },
    type: {
      type: String,
      enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL, tokenTypes.ACCESS],
      required: true,
    },
  },
  {
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformValue,
    },
  },
);
