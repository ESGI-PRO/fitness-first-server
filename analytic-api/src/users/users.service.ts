import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getNumberOfUers(): number {
        return 30;
    }
}
