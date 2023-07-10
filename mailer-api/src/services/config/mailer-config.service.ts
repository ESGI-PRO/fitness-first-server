import { MailerOptionsFactory, MailerOptions } from '@nestjs-modules/mailer';

export class MailerConfigService implements MailerOptionsFactory {
  createMailerOptions(): MailerOptions {
    return {
      transport: {
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          //pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      },
      defaults: {
        from: process.env.MAILER_FROM,
      },
    };
  }
}
