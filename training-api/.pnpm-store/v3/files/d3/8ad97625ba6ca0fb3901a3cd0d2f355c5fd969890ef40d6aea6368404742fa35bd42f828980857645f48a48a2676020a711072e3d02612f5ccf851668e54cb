import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface ServerErrorInfo extends DataProxyAPIErrorInfo {
}
export declare const SERVER_ERROR_DEFAULT_MESSAGE = "Unknown server error";
export declare class ServerError extends DataProxyAPIError {
    name: string;
    code: string;
    logs?: string[];
    constructor(info: ServerErrorInfo, message?: string, logs?: string[]);
}
