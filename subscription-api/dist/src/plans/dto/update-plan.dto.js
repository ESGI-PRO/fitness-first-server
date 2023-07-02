"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_plan_dto_1 = require("./create-plan.dto");
class UpdatePlanDto extends (0, mapped_types_1.PartialType)(create_plan_dto_1.CreatePlanDto) {
}
exports.UpdatePlanDto = UpdatePlanDto;
//# sourceMappingURL=update-plan.dto.js.map