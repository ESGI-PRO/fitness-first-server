import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isLive(): string {
    return 'analytic api is live';
  }
}
