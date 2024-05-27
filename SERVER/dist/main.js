"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const nest_winston_1 = require("nest-winston");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: true,
        },
    });
    const logger = app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER);
    app.useLogger(logger);
    app.use(cookieParser('MY SECRET KEY'));
    app.useGlobalPipes(new common_1.ValidationPipe());
    const configService = app.get(config_1.ConfigService);
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle('KNOWLEDGE TEST RESTfull API Documentation ')
        .setDescription('FULL STACK ENGINEER PT WIDYA INFORMASI NUSANTARA')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' }, 'access_token')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' }, 'refresh_token')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup('api/documentation', app, document);
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map