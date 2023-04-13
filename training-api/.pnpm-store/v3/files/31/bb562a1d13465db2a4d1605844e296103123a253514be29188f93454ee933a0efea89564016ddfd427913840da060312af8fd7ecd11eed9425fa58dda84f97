import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface UnauthorizedErrorInfo extends DataProxyAPIErrorInfo {
}
export declare const UNAUTHORIZED_DEFAULT_MESSAGE = "Unauthorized, check your connection string";
export declare class UnauthorizedError extends DataProxyAPIError {
    name: string;
    code: string;
    constructor(info: UnauthorizedErrorInfo, message?: string);
}
