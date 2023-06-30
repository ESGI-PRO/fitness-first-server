"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const token_module_1 = require("./token.module");
const config_service_1 = require("./services/config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(token_module_1.TokenModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: new config_service_1.ConfigService().get('port'),
        },
        logger: ['error', 'warn', 'log']
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map