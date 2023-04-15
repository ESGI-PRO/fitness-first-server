import { DMMF } from '@prisma/generator-helper';
import type { BatchQueryEngineResult, EngineBatchQueries, EngineConfig, EngineEventType, EngineQuery, InteractiveTransactionOptions, RequestBatchOptions, RequestOptions } from '../common/Engine';
import { Engine } from '../common/Engine';
import { Metrics, MetricsOptionsJson, MetricsOptionsPrometheus } from '../common/types/Metrics';
import { QueryEngineResult } from '../common/types/QueryEngine';
import type * as Tx from '../common/types/Transaction';
import { TracingConfig } from '../tracing';
type DataProxyTxInfoPayload = {
    endpoint: string;
};
type DataProxyTxInfo = Tx.InteractiveTransactionInfo<DataProxyTxInfoPayload>;
type DataProxyHeaders = {
    Authorization: string;
    'X-capture-telemetry'?: string;
    traceparent?: string;
};
type HeaderBuilderOptions = {
    traceparent?: string;
    interactiveTransaction?: InteractiveTransactionOptions<DataProxyTxInfoPayload>;
};
declare class DataProxyHeaderBuilder {
    readonly apiKey: string;
    readonly tracingConfig: TracingConfig;
    readonly logLevel: EngineConfig['logLevel'];
    readonly logQueries: boolean | undefined;
    constructor({ apiKey, tracingConfig, logLevel, logQueries, }: {
        apiKey: string;
        tracingConfig: TracingConfig;
        logLevel: EngineConfig['logLevel'];
        logQueries: boolean | undefined;
    });
    build({ traceparent, interactiveTransaction }?: HeaderBuilderOptions): DataProxyHeaders;
    private buildCaptureSettings;
}
export declare class DataProxyEngine extends Engine<DataProxyTxInfoPayload> {
    private inlineSchema;
    readonly inlineSchemaHash: string;
    private inlineDatasources;
    private config;
    private logEmitter;
    private env;
    private clientVersion;
    private tracingConfig;
    readonly remoteClientVersion: Promise<string>;
    readonly host: string;
    readonly headerBuilder: DataProxyHeaderBuilder;
    constructor(config: EngineConfig);
    apiKey(): string;
    version(): string;
    start(): Promise<void>;
    stop(): Promise<void>;
    private propagateResponseExtensions;
    on(event: EngineEventType, listener: (args?: any) => any): void;
    private url;
    getDmmf(): Promise<DMMF.Document>;
    private uploadSchema;
    request<T>(query: EngineQuery, { traceparent, interactiveTransaction, customDataProxyFetch }: RequestOptions<DataProxyTxInfoPayload>): Promise<QueryEngineResult<T>>;
    requestBatch<T>(queries: EngineBatchQueries, { traceparent, transaction, customDataProxyFetch }: RequestBatchOptions<DataProxyTxInfoPayload>): Promise<BatchQueryEngineResult<T>[]>;
    private requestInternal;
    /**
     * Send START, COMMIT, or ROLLBACK to the Query Engine
     * @param action START, COMMIT, or ROLLBACK
     * @param headers headers for tracing
     * @param options to change the default timeouts
     * @param info transaction information for the QE
     */
    transaction(action: 'start', headers: Tx.TransactionHeaders, options?: Tx.Options): Promise<DataProxyTxInfo>;
    transaction(action: 'commit', headers: Tx.TransactionHeaders, info: DataProxyTxInfo): Promise<undefined>;
    transaction(action: 'rollback', headers: Tx.TransactionHeaders, info: DataProxyTxInfo): Promise<undefined>;
    private extractHostAndApiKey;
    private mergeOverriddenDatasources;
    private resolveDatasourceURL;
    metrics(options: MetricsOptionsJson): Promise<Metrics>;
    metrics(options: MetricsOptionsPrometheus): Promise<string>;
    private withRetry;
    private handleError;
}
export {};
