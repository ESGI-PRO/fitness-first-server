import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from './services/config/config.service';
import { IEmailData } from './interfaces/email-data.interface';
import { IMailSendResponse } from './interfaces/mail-send-response.interface';
export declare class MailerController {
    private readonly mailerService;
    private readonly configService;
    constructor(mailerService: MailerService, configService: ConfigService);
    mailSend(data: IEmailData): IMailSendResponse;
}
