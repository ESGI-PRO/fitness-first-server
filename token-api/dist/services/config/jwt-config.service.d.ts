import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
export declare class JwtConfigService implements JwtOptionsFactory {
    createJwtOptions(): JwtModuleOptions;
}
