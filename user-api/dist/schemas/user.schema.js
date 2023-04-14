"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
function transformValue(doc, ret) {
    delete ret._id;
    delete ret.password;
}
exports.UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email can not be empty'],
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Email should be valid',
        ],
    },
    is_confirmed: {
        type: Boolean,
        required: [true, 'Confirmed can not be empty'],
    },
    password: {
        type: String,
        required: [true, 'Password can not be empty'],
        minlength: [6, 'Password should include at least 6 chars'],
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
exports.UserSchema.methods.getEncryptedPassword = (password) => {
    return bcrypt.hash(String(password), SALT_ROUNDS);
};
exports.UserSchema.methods.compareEncryptedPassword = function (password) {
    return bcrypt.compare(password, this.password);
};
exports.UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await this.getEncryptedPassword(this.password);
    next();
});
//# sourceMappingURL=user.schema.js.map