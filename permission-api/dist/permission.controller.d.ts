import { ConfirmedStrategyService } from './services/confirmed-strategy.service';
import { IPermissionCheckResponse } from './interfaces/permission-check-response.interface';
import { IUser } from './interfaces/user.interface';
export declare class PermissionController {
    private confirmedStrategy;
    constructor(confirmedStrategy: ConfirmedStrategyService);
    permissionCheck(permissionParams: {
        user: IUser;
        permission: string;
    }): IPermissionCheckResponse;
}
