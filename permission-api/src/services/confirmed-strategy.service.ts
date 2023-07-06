import { IPermissionStrategy } from '../interfaces/permission-strategy.interface';
import { IUser } from '../interfaces/user.interface';
import { adminPermissions, userPermissions } from '../constants/permissions'

export class ConfirmedStrategyService implements IPermissionStrategy {
  public getAllowedPermissions(user: IUser): string[] {

    return user.isAdmin
      ? adminPermissions
      : userPermissions;
  }
}
