import { MailerOptionsFactory, MailerOptions } from '@nestjs-modules/mailer';
export declare class MailerConfigService implements MailerOptionsFactory {
    createMailerOptions(): MailerOptions;
}
