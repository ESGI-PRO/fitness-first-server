"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
function rawBodyMiddleware() {
    return (0, body_parser_1.json)({
        verify: (request, response, buffer) => {
            if (request.url === '/subscription/webhook/stripe' && Buffer.isBuffer(buffer)) {
                console.log("[/webhook/stripe]-rawbefore", buffer);
                request.rawBody = Buffer.from(buffer);
                console.log("[/webhook/stripe]-rawafter", request.rawBody);
            }
            return true;
        },
    });
}
exports.default = rawBodyMiddleware;
//# sourceMappingURL=raw-body.middleware.js.map