"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingSchema = exports.Meeting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
let Meeting = class Meeting {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", typeof (_a = typeof mongoose_3.ObjectId !== "undefined" && mongoose_3.ObjectId) === "function" ? _a : Object)
], Meeting.prototype, "sender_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.SchemaTypes.ObjectId] }),
    __metadata("design:type", Array)
], Meeting.prototype, "members", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Meeting.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Meeting.prototype, "time", void 0);
Meeting = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Meeting);
exports.Meeting = Meeting;
exports.MeetingSchema = mongoose_1.SchemaFactory.createForClass(Meeting);
//# sourceMappingURL=meeting.schema.js.map