import type { DMMF } from '@prisma/generator-helper';
import type { BatchQueryEngineResult, EngineBatchQueries, EngineConfig, EngineEventType, EngineQuery, RequestBatchOptions, RequestOptions } from '../common/Engine';
import { Engine } from '../common/Engine';
import { Metrics, MetricsOptionsJson, MetricsOptionsPrometheus } from '../common/types/Metrics';
import type { QueryEngineResult } from '../common/types/QueryEngine';
import type * as Tx from '../common/types/Transaction';
import type { Result } from './Connection';
export type Deferred = {
    resolve: () => void;
    reject: (err: Error) => void;
};
export type StopDeferred = {
    resolve: (code: number | null) => void;
    reject: (err: Error) => void;
};
export declare class BinaryEngine extends Engine<undefined> {
    private logEmitter;
    private showColors;
    private logQueries;
    private env?;
    private flags;
    private port?;
    private enableDebugLogs;
    private allowTriggerPanic;
    private child?;
    private clientVersion?;
    private globalKillSignalReceived?;
    private startCount;
    private previewFeatures;
    private engineEndpoint?;
    private lastError?;
    private getDmmfPromise?;
    private stopPromise?;
    private beforeExitListener?;
    private dirname?;
    private cwd;
    private datamodelPath;
    private prismaPath?;
    private stderrLogs;
    private currentRequestPromise?;
    private platformPromise?;
    private platform?;
    private generator?;
    private incorrectlyPinnedBinaryTarget?;
    private datasources?;
    private startPromise?;
    private versionPromise?;
    private engineStartDeferred?;
    private engineStopDeferred?;
    private connection;
    private lastQuery?;
    private lastVersion?;
    private lastActiveProvider?;
    private activeProvider?;
    private tracingConfig;
    /**
     * exiting is used to tell the .on('exit') hook, if the exit came from our script.
     * As soon as the Prisma binary returns a correct return code (like 1 or 0), we don't need this anymore
     */
    constructor({ cwd, datamodelPath, prismaPath, generator, datasources, showColors, logQueries, env, flags, clientVersion, previewFeatures, engineEndpoint, enableDebugLogs, allowTriggerPanic, dirname, activeProvider, tracingConfig, logEmitter, }: EngineConfig);
    private setError;
    private checkForTooManyEngines;
    private resolveCwd;
    on(event: EngineEventType, listener: (args?: any) => any): void;
    emitExit(): Promise<void>;
    private getPlatform;
    private getQueryEnginePath;
    private resolvePrismaPath;
    private getPrismaPath;
    private getFixedGenerator;
    private printDatasources;
    /**
     * Starts the engine, returns the url that it runs on
     */
    start(): Promise<void>;
    private getEngineEnvVars;
    private internalStart;
    stop(): Promise<void>;
    /**
     * If Prisma runs, stop it
     */
    _stop(): Promise<void>;
    kill(signal: string): void;
    /**
     * Use the port 0 trick to get a new port
     */
    private getFreePort;
    getDmmf(): Promise<DMMF.Document>;
    private _getDmmf;
    version(forceRun?: boolean): Promise<string>;
    internalVersion(): Promise<string>;
    request<T>(query: EngineQuery, { traceparent, numTry, isWrite, interactiveTransaction }: RequestOptions<undefined>): Promise<QueryEngineResult<T>>;
    requestBatch<T>(queries: EngineBatchQueries, { traceparent, transaction, numTry, containsWrite }: RequestBatchOptions<undefined>): Promise<BatchQueryEngineResult<T>[]>;
    /**
     * Send START, COMMIT, or ROLLBACK to the Query Engine
     * @param action START, COMMIT, or ROLLBACK
     * @param headers headers for tracing
     * @param options to change the default timeouts
     * @param info transaction information for the QE
     */
    transaction(action: 'start', headers: Tx.TransactionHeaders, options?: Tx.Options): Promise<Tx.InteractiveTransactionInfo<undefined>>;
    transaction(action: 'commit', headers: Tx.TransactionHeaders, info: Tx.InteractiveTransactionInfo<undefined>): Promise<undefined>;
    transaction(action: 'rollback', headers: Tx.TransactionHeaders, info: Tx.InteractiveTransactionInfo<undefined>): Promise<undefined>;
    private get hasMaxRestarts();
    /**
     * This processes errors that didn't occur synchronously during a request, and were instead inferred
     * from the STDOUT/STDERR streams of the Query Engine process.
     *
     * See `setError` for more information.
     */
    private throwAsyncErrorIfExists;
    private getErrorMessageWithLink;
    /**
     * handleRequestError will process existing errors coming from the request, or else look
     * for the last error happening in the Query Engine process and processed from the STDOUT/STEDERR
     * streams.
     *
     * See `setError` and `throwAsyncErrorIfExists` for more information.
     */
    private handleRequestError;
    metrics(options: MetricsOptionsJson): Promise<Metrics>;
    metrics(options: MetricsOptionsPrometheus): Promise<string>;
    /**
     * Decides how to handle error responses for transactions
     * @param result
     */
    transactionHttpErrorHandler<R>(result: Result<R>): never;
}
