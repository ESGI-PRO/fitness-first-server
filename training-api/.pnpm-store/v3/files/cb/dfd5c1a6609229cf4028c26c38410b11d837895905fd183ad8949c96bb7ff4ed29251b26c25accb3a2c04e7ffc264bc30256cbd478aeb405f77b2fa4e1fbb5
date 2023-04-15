/// <reference types="node" />
import type { ChildProcessByStdio } from 'child_process';
import type { GeneratorConfig, GeneratorManifest, GeneratorOptions } from './types';
type GeneratorProcessOptions = {
    isNode?: boolean;
    /**
     * Time to wait before we consider generator successfully started, ms
     */
    initWaitTime?: number;
};
export declare class GeneratorError extends Error {
    code: number;
    data?: any;
    constructor(message: string, code: number, data?: any);
}
export declare class GeneratorProcess {
    private executablePath;
    child?: ChildProcessByStdio<any, any, any>;
    listeners: {
        [key: string]: (result: any, err?: Error) => void;
    };
    private exitCode;
    private stderrLogs;
    private initPromise?;
    private isNode;
    private initWaitTime;
    private currentGenerateDeferred?;
    constructor(executablePath: string, { isNode, initWaitTime }?: GeneratorProcessOptions);
    init(): Promise<void>;
    initSingleton(): Promise<void>;
    private handleResponse;
    private registerListener;
    private sendMessage;
    private getMessageId;
    stop(): void;
    getManifest(config: GeneratorConfig): Promise<GeneratorManifest | null>;
    generate(options: GeneratorOptions): Promise<any>;
}
export {};
