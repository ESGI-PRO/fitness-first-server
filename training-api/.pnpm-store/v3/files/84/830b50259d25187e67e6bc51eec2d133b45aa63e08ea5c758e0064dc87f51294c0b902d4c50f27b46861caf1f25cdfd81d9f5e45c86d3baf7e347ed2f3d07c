import type { RequestResponse } from '../utils/request';
import type { DataProxyAPIErrorInfo } from './DataProxyAPIError';
import { DataProxyAPIError } from './DataProxyAPIError';
export interface EngineStartupErrorInfo extends DataProxyAPIErrorInfo {
    response: RequestResponse;
}
export declare class EngineStartupError extends DataProxyAPIError {
    name: string;
    code: string;
    logs: string[];
    constructor(info: EngineStartupErrorInfo, message: string, logs: string[]);
}
