"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const config_service_1 = require("./services/config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: new config_service_1.ConfigService().get('port'),
        },
    });
    await app.listen();
}
console.log('new ConfigService() port', new config_service_1.ConfigService().get('port'));
bootstrap();
//# sourceMappingURL=main.js.map