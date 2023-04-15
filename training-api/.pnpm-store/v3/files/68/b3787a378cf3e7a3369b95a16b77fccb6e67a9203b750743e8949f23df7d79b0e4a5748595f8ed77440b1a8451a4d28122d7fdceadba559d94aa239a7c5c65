import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface UsageExceededErrorInfo extends DataProxyAPIErrorInfo {
}
export declare const USAGE_EXCEEDED_DEFAULT_MESSAGE = "Usage exceeded, retry again later";
export declare class UsageExceededError extends DataProxyAPIError {
    name: string;
    code: string;
    constructor(info: UsageExceededErrorInfo, message?: string);
}
