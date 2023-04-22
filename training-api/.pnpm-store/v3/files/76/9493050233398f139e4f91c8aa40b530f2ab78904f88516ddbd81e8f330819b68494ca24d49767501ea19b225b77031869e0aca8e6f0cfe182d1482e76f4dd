import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface BadRequestErrorInfo extends DataProxyAPIErrorInfo {
}
export declare const BAD_REQUEST_DEFAULT_MESSAGE = "This request could not be understood by the server";
export declare class BadRequestError extends DataProxyAPIError {
    name: string;
    code: string;
    constructor(info: BadRequestErrorInfo, message?: string, code?: string);
}
