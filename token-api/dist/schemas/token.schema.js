"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSchema = void 0;
const mongoose = require("mongoose");
const token_types_1 = require("../services/config/token.types");
function transformValue(doc, ret) {
    delete ret._id;
}
exports.TokenSchema = new mongoose.Schema({
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
        enum: [token_types_1.tokenTypes.REFRESH, token_types_1.tokenTypes.RESET_PASSWORD, token_types_1.tokenTypes.VERIFY_EMAIL, token_types_1.tokenTypes.ACCESS],
        required: true,
    },
}, {
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
});
//# sourceMappingURL=token.schema.js.map