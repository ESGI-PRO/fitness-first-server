import type { RequestResponse } from '../utils/request';
import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface InvalidRequestErrorInfo extends DataProxyAPIErrorInfo {
    response: RequestResponse;
}
export declare const INVALID_REQUEST_DEFAULT_MESSAGE = "Request parameters are invalid";
/**
 * Used when the request validation failed.
 * The difference from `BadRequestError` is the latter is used when the server couldn't understand the request,
 * while this error means the server could understand it but rejected due to some parameters being invalid.
 */
export declare class InvalidRequestError extends DataProxyAPIError {
    name: string;
    code: string;
    constructor(info: InvalidRequestErrorInfo, message?: string);
}
