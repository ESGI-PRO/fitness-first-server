"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideoMeetingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_video_meeting_dto_1 = require("./create-video-meeting.dto");
class UpdateVideoMeetingDto extends (0, mapped_types_1.PartialType)(create_video_meeting_dto_1.CreateVideoMeetingDto) {
}
exports.UpdateVideoMeetingDto = UpdateVideoMeetingDto;
//# sourceMappingURL=update-video-meeting.dto.js.map