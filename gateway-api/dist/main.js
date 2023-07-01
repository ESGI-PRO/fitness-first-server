"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const config_service_1 = require("./services/config/config.service");
const helmet_1 = require("helmet");
const raw_body_middleware_1 = require("./middlewares/raw-body.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API docs')
        .addTag('users')
        .addTag('analytic')
        .addTag('training')
        .addTag('nutrition')
        .addTag('subscription')
        .addTag('messenger')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use((0, helmet_1.default)());
    app.use((0, raw_body_middleware_1.default)());
    await app.listen(new config_service_1.ConfigService().get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map