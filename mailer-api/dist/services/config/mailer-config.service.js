"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerConfigService = void 0;
class MailerConfigService {
    createMailerOptions() {
        return {
            transport: {
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.MAIL_USERNAME,
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
exports.MailerConfigService = MailerConfigService;
//# sourceMappingURL=mailer-config.service.js.map