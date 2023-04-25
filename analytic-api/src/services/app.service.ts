import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isLive(): any {
    return {
      isLive: true,
      message: 'analytic api is live'
    };
  }
}
