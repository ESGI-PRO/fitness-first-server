import { IPermissionStrategy } from '../interfaces/permission-strategy.interface';
import { IUser } from '../interfaces/user.interface';
export declare class ConfirmedStrategyService implements IPermissionStrategy {
    getAllowedPermissions(user: IUser): string[];
}
