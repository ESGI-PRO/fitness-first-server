import { DMMF } from '@prisma/generator-helper';
import type { Platform } from '@prisma/get-platform';
import type { BatchQueryEngineResult, EngineBatchQueries, EngineConfig, EngineEventType, EngineQuery, RequestBatchOptions, RequestOptions } from '../common/Engine';
import { Engine } from '../common/Engine';
import { Metrics, MetricsOptionsJson, MetricsOptionsPrometheus } from '../common/types/Metrics';
import type { QueryEngineLogLevel } from '../common/types/QueryEngine';
import type * as Tx from '../common/types/Transaction';
import { type BeforeExitListener } from './ExitHooks';
import type { LibraryLoader } from './types/Library';
export declare class LibraryEngine extends Engine<undefined> {
    private engine?;
    private libraryInstantiationPromise?;
    private libraryStartingPromise?;
    private libraryStoppingPromise?;
    private libraryStarted;
    private executingQueryPromise?;
    private config;
    private QueryEngineConstructor?;
    private libraryLoader;
    private library?;
    private logEmitter;
    private engineProtocol;
    libQueryEnginePath?: string;
    platform?: Platform;
    datasourceOverrides: Record<string, string>;
    datamodel: string;
    logQueries: boolean;
    logLevel: QueryEngineLogLevel;
    lastQuery?: string;
    loggerRustPanic?: any;
    versionInfo?: {
        commit: string;
        version: string;
    };
    get beforeExitListener(): BeforeExitListener | undefined;
    set beforeExitListener(listener: BeforeExitListener | undefined);
    constructor(config: EngineConfig, loader?: LibraryLoader);
    private checkForTooManyEngines;
    transaction(action: 'start', headers: Tx.TransactionHeaders, options?: Tx.Options): Promise<Tx.InteractiveTransactionInfo<undefined>>;
    transaction(action: 'commit', headers: Tx.TransactionHeaders, info: Tx.InteractiveTransactionInfo<undefined>): Promise<undefined>;
    transaction(action: 'rollback', headers: Tx.TransactionHeaders, info: Tx.InteractiveTransactionInfo<undefined>): Promise<undefined>;
    private instantiateLibrary;
    private getPlatform;
    private parseEngineResponse;
    private convertDatasources;
    private loadEngine;
    private logger;
    private getErrorMessageWithLink;
    private parseInitError;
    private parseRequestError;
    on(event: EngineEventType, listener: (args?: any) => any): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    getDmmf(): Promise<DMMF.Document>;
    version(): string;
    /**
     * Triggers an artificial panic
     */
    debugPanic(message?: string): Promise<never>;
    request<T>(query: EngineQuery, { traceparent, interactiveTransaction }: RequestOptions<undefined>): Promise<{
        data: T;
        elapsed: number;
    }>;
    requestBatch<T>(queries: EngineBatchQueries, { transaction, traceparent }: RequestBatchOptions<undefined>): Promise<BatchQueryEngineResult<T>[]>;
    private buildQueryError;
    metrics(options: MetricsOptionsJson): Promise<Metrics>;
    metrics(options: MetricsOptionsPrometheus): Promise<string>;
}
