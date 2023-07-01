"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
const common_1 = require("@nestjs/common");
const Authorization = (secured) => (0, common_1.SetMetadata)('secured', secured);
exports.Authorization = Authorization;
//# sourceMappingURL=authorization.decorator.js.map