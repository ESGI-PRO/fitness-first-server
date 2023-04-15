import type { RequestResponse } from '../utils/request';
import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface InteractiveTransactionErrorInfo extends DataProxyAPIErrorInfo {
    response: RequestResponse;
}
export declare const INTERACTIVE_TRANSACTION_ERROR_DEFAULT_MESSAGE = "Interactive transaction error";
export declare class InteractiveTransactionError extends DataProxyAPIError {
    name: string;
    code: string;
    constructor(info: InteractiveTransactionErrorInfo, message?: string);
}
