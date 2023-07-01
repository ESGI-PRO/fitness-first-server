"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
function rawBodyMiddleware() {
    return (0, body_parser_1.json)({
        verify: (request, response, buffer) => {
            if (request.url === '/subscription/webhook/stripe' && Buffer.isBuffer(buffer)) {
                request.rawBody = Buffer.from(buffer);
            }
            return true;
        },
    });
}
exports.default = rawBodyMiddleware;
//# sourceMappingURL=raw-body.middleware.js.map