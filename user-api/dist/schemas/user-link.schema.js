"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLinkSchema = void 0;
const mongoose = require("mongoose");
function transformValue(doc, ret) {
    delete ret._id;
}
function generateLink() {
    return Math.random().toString(36).replace('0.', '');
}
exports.UserLinkSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, 'User can not be empty'],
    },
    is_used: {
        type: Boolean,
        default: false,
    },
    link: {
        type: String,
        default: generateLink(),
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
//# sourceMappingURL=user-link.schema.js.map