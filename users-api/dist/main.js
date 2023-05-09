"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        logger: ['error', 'warn'],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Users API')
        .setDescription('Users API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-users', app, document);
    app.use((0, helmet_1.default)());
    await app.listen(3003);
}
bootstrap();
//# sourceMappingURL=main.js.map