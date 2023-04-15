import type { RequestResponse } from '../utils/request';
import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface HealthcheckTimeoutErrorInfo extends DataProxyAPIErrorInfo {
    response: RequestResponse;
}
export declare class HealthcheckTimeoutError extends DataProxyAPIError {
    name: string;
    code: string;
    logs: string[];
    constructor(info: HealthcheckTimeoutErrorInfo, logs: string[]);
}
