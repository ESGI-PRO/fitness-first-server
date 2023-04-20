import { IPermissionStrategy } from '../interfaces/permission-strategy.interface';
import { IUser } from '../interfaces/user.interface';

export class ConfirmedStrategyService implements IPermissionStrategy {
  public getAllowedPermissions(user: IUser, permissions: string[]): string[] {
    /* all the routes for the services not access to public */
    const forbiddenPermissions = [];
    return user.is_confirmed
      ? permissions
      : permissions.filter((permission: string) => {
          return !forbiddenPermissions.includes(permission);
        });
  }
}
