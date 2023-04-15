"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DataProxyEngine_exports = {};
__export(DataProxyEngine_exports, {
  DataProxyEngine: () => DataProxyEngine
});
module.exports = __toCommonJS(DataProxyEngine_exports);
var import_debug = __toESM(require("@prisma/debug"));
var import_Engine = require("../common/Engine");
var import_PrismaClientUnknownRequestError = require("../common/errors/PrismaClientUnknownRequestError");
var import_prismaGraphQLToJSError = require("../common/errors/utils/prismaGraphQLToJSError");
var import_getBatchRequestPayload = require("../common/utils/getBatchRequestPayload");
var import_tracing = require("../tracing");
var import_DataProxyError = require("./errors/DataProxyError");
var import_ForcedRetryError = require("./errors/ForcedRetryError");
var import_InvalidDatasourceError = require("./errors/InvalidDatasourceError");
var import_NotImplementedYetError = require("./errors/NotImplementedYetError");
var import_SchemaMissingError = require("./errors/SchemaMissingError");
var import_responseToError = require("./errors/utils/responseToError");
var import_backOff = require("./utils/backOff");
var import_getClientVersion = require("./utils/getClientVersion");
var import_request = require("./utils/request");
const MAX_RETRIES = 3;
const P = Promise.resolve();
const debug = (0, import_debug.default)("prisma:client:dataproxyEngine");
class DataProxyHeaderBuilder {
  constructor({
    apiKey,
    tracingConfig,
    logLevel,
    logQueries
  }) {
    this.apiKey = apiKey;
    this.tracingConfig = tracingConfig;
    this.logLevel = logLevel;
    this.logQueries = logQueries;
  }
  build({ traceparent, interactiveTransaction } = {}) {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`
    };
    if (this.tracingConfig.enabled) {
      headers.traceparent = traceparent ?? (0, import_tracing.getTraceParent)({});
    }
    if (interactiveTransaction) {
      headers["X-transaction-id"] = interactiveTransaction.id;
    }
    const captureTelemetry = this.buildCaptureSettings();
    if (captureTelemetry.length > 0) {
      headers["X-capture-telemetry"] = captureTelemetry.join(", ");
    }
    return headers;
  }
  buildCaptureSettings() {
    const captureTelemetry = [];
    if (this.tracingConfig.enabled) {
      captureTelemetry.push("tracing");
    }
    if (this.logLevel) {
      captureTelemetry.push(this.logLevel);
    }
    if (this.logQueries) {
      captureTelemetry.push("query");
    }
    return captureTelemetry;
  }
}
__name(DataProxyHeaderBuilder, "DataProxyHeaderBuilder");
class DataProxyEngine extends import_Engine.Engine {
  constructor(config) {
    super();
    this.config = config;
    this.env = { ...this.config.env, ...process.env };
    this.inlineSchema = config.inlineSchema ?? "";
    this.inlineDatasources = config.inlineDatasources ?? {};
    this.inlineSchemaHash = config.inlineSchemaHash ?? "";
    this.clientVersion = config.clientVersion ?? "unknown";
    this.logEmitter = config.logEmitter;
    this.tracingConfig = (0, import_tracing.getTracingConfig)(this.config.previewFeatures || []);
    const [host, apiKey] = this.extractHostAndApiKey();
    this.host = host;
    this.headerBuilder = new DataProxyHeaderBuilder({
      apiKey,
      tracingConfig: this.tracingConfig,
      logLevel: config.logLevel,
      logQueries: config.logQueries
    });
    this.remoteClientVersion = P.then(() => (0, import_getClientVersion.getClientVersion)(this.config));
    debug("host", this.host);
  }
  apiKey() {
    return this.headerBuilder.apiKey;
  }
  version() {
    return "unknown";
  }
  async start() {
  }
  async stop() {
  }
  propagateResponseExtensions(extensions) {
    const tracingConfig = (0, import_tracing.getTracingConfig)(this.config.previewFeatures || []);
    if (extensions?.logs?.length) {
      extensions.logs.forEach((log) => {
        switch (log.level) {
          case "debug":
          case "error":
          case "trace":
          case "warn":
          case "info":
            break;
          case "query": {
            let dbQuery = typeof log.attributes.query === "string" ? log.attributes.query : "";
            if (!tracingConfig.enabled) {
              const [query] = dbQuery.split("/* traceparent");
              dbQuery = query;
            }
            this.logEmitter.emit("query", {
              query: dbQuery,
              timestamp: log.timestamp,
              duration: log.attributes.duration_ms,
              params: log.attributes.params,
              target: log.attributes.target
            });
          }
        }
      });
    }
    if (extensions?.traces?.length && tracingConfig.enabled) {
      void (0, import_tracing.createSpan)({ span: true, spans: extensions.traces });
    }
  }
  on(event, listener) {
    if (event === "beforeExit") {
      throw new import_NotImplementedYetError.NotImplementedYetError("beforeExit event is not yet supported", {
        clientVersion: this.clientVersion
      });
    } else {
      this.logEmitter.on(event, listener);
    }
  }
  async url(s) {
    return `https://${this.host}/${await this.remoteClientVersion}/${this.inlineSchemaHash}/${s}`;
  }
  getDmmf() {
    throw new import_NotImplementedYetError.NotImplementedYetError("getDmmf is not yet supported", {
      clientVersion: this.clientVersion
    });
  }
  async uploadSchema() {
    const spanOptions = {
      name: "schemaUpload",
      internal: true,
      enabled: this.tracingConfig.enabled
    };
    return (0, import_tracing.runInChildSpan)(spanOptions, async () => {
      const response = await (0, import_request.request)(await this.url("schema"), {
        method: "PUT",
        headers: this.headerBuilder.build(),
        body: this.inlineSchema,
        clientVersion: this.clientVersion
      });
      if (!response.ok) {
        debug("schema response status", response.status);
      }
      const err = await (0, import_responseToError.responseToError)(response, this.clientVersion);
      if (err) {
        this.logEmitter.emit("warn", { message: `Error while uploading schema: ${err.message}` });
        throw err;
      } else {
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`
        });
      }
    });
  }
  request(query, { traceparent, interactiveTransaction, customDataProxyFetch }) {
    return this.requestInternal({
      body: query,
      traceparent,
      interactiveTransaction,
      customDataProxyFetch
    });
  }
  async requestBatch(queries, { traceparent, transaction, customDataProxyFetch }) {
    const interactiveTransaction = transaction?.kind === "itx" ? transaction.options : void 0;
    const body = (0, import_getBatchRequestPayload.getBatchRequestPayload)(queries, transaction);
    const { batchResult, elapsed } = await this.requestInternal({
      body,
      customDataProxyFetch,
      interactiveTransaction,
      traceparent
    });
    return batchResult.map((result) => {
      if ("errors" in result && result.errors.length > 0) {
        return (0, import_prismaGraphQLToJSError.prismaGraphQLToJSError)(result.errors[0], this.clientVersion);
      }
      return {
        data: result,
        elapsed
      };
    });
  }
  requestInternal({
    body,
    traceparent,
    customDataProxyFetch,
    interactiveTransaction
  }) {
    return this.withRetry({
      actionGerund: "querying",
      callback: async ({ logHttpCall }) => {
        const url = interactiveTransaction ? `${interactiveTransaction.payload.endpoint}/graphql` : await this.url("graphql");
        logHttpCall(url);
        const response = await (0, import_request.request)(
          url,
          {
            method: "POST",
            headers: this.headerBuilder.build({ traceparent, interactiveTransaction }),
            body: JSON.stringify(body),
            clientVersion: this.clientVersion
          },
          customDataProxyFetch
        );
        if (!response.ok) {
          debug("graphql response status", response.status);
        }
        const e = await (0, import_responseToError.responseToError)(response, this.clientVersion);
        await this.handleError(e);
        const data = await response.json();
        const extensions = data.extensions;
        if (extensions) {
          this.propagateResponseExtensions(extensions);
        }
        if (data.errors) {
          if (data.errors.length === 1) {
            throw (0, import_prismaGraphQLToJSError.prismaGraphQLToJSError)(data.errors[0], this.config.clientVersion);
          } else {
            throw new import_PrismaClientUnknownRequestError.PrismaClientUnknownRequestError(data.errors, { clientVersion: this.config.clientVersion });
          }
        }
        return data;
      }
    });
  }
  async transaction(action, headers, arg) {
    const actionToGerund = {
      start: "starting",
      commit: "committing",
      rollback: "rolling back"
    };
    return this.withRetry({
      actionGerund: `${actionToGerund[action]} transaction`,
      callback: async ({ logHttpCall }) => {
        if (action === "start") {
          const body = JSON.stringify({
            max_wait: arg?.maxWait ?? 2e3,
            timeout: arg?.timeout ?? 5e3,
            isolation_level: arg?.isolationLevel
          });
          const url = await this.url("transaction/start");
          logHttpCall(url);
          const response = await (0, import_request.request)(url, {
            method: "POST",
            headers: this.headerBuilder.build({ traceparent: headers.traceparent }),
            body,
            clientVersion: this.clientVersion
          });
          const err = await (0, import_responseToError.responseToError)(response, this.clientVersion);
          await this.handleError(err);
          const json = await response.json();
          const extensions = json.extensions;
          if (extensions) {
            this.propagateResponseExtensions(extensions);
          }
          const id = json.id;
          const endpoint = json["data-proxy"].endpoint;
          return { id, payload: { endpoint } };
        } else {
          const url = `${arg.payload.endpoint}/${action}`;
          logHttpCall(url);
          const response = await (0, import_request.request)(url, {
            method: "POST",
            headers: this.headerBuilder.build({ traceparent: headers.traceparent }),
            clientVersion: this.clientVersion
          });
          const json = await response.json();
          const extensions = json.extensions;
          if (extensions) {
            this.propagateResponseExtensions(extensions);
          }
          const err = await (0, import_responseToError.responseToError)(response, this.clientVersion);
          await this.handleError(err);
          return void 0;
        }
      }
    });
  }
  extractHostAndApiKey() {
    const datasources = this.mergeOverriddenDatasources();
    const mainDatasourceName = Object.keys(datasources)[0];
    const mainDatasource = datasources[mainDatasourceName];
    const dataProxyURL = this.resolveDatasourceURL(mainDatasourceName, mainDatasource);
    let url;
    try {
      url = new URL(dataProxyURL);
    } catch {
      throw new import_InvalidDatasourceError.InvalidDatasourceError("Could not parse URL of the datasource", {
        clientVersion: this.clientVersion
      });
    }
    const { protocol, host, searchParams } = url;
    if (protocol !== "prisma:") {
      throw new import_InvalidDatasourceError.InvalidDatasourceError("Datasource URL must use prisma:// protocol when --data-proxy is used", {
        clientVersion: this.clientVersion
      });
    }
    const apiKey = searchParams.get("api_key");
    if (apiKey === null || apiKey.length < 1) {
      throw new import_InvalidDatasourceError.InvalidDatasourceError("No valid API key found in the datasource URL", {
        clientVersion: this.clientVersion
      });
    }
    return [host, apiKey];
  }
  mergeOverriddenDatasources() {
    if (this.config.datasources === void 0) {
      return this.inlineDatasources;
    }
    const finalDatasources = { ...this.inlineDatasources };
    for (const override of this.config.datasources) {
      if (!this.inlineDatasources[override.name]) {
        throw new Error(`Unknown datasource: ${override.name}`);
      }
      finalDatasources[override.name] = {
        url: {
          fromEnvVar: null,
          value: override.url
        }
      };
    }
    return finalDatasources;
  }
  resolveDatasourceURL(name, datasource) {
    if (datasource.url.value) {
      return datasource.url.value;
    }
    if (datasource.url.fromEnvVar) {
      const envVar = datasource.url.fromEnvVar;
      const loadedEnvURL = this.env[envVar];
      if (loadedEnvURL === void 0) {
        throw new import_InvalidDatasourceError.InvalidDatasourceError(
          `Datasource "${name}" references an environment variable "${envVar}" that is not set`,
          {
            clientVersion: this.clientVersion
          }
        );
      }
      return loadedEnvURL;
    }
    throw new import_InvalidDatasourceError.InvalidDatasourceError(
      `Datasource "${name}" specification is invalid: both value and fromEnvVar are null`,
      {
        clientVersion: this.clientVersion
      }
    );
  }
  metrics(options) {
    throw new import_NotImplementedYetError.NotImplementedYetError("Metric are not yet supported for Data Proxy", {
      clientVersion: this.clientVersion
    });
  }
  async withRetry(args) {
    for (let attempt = 0; ; attempt++) {
      const logHttpCall = /* @__PURE__ */ __name((url) => {
        this.logEmitter.emit("info", {
          message: `Calling ${url} (n=${attempt})`
        });
      }, "logHttpCall");
      try {
        return await args.callback({ logHttpCall });
      } catch (e) {
        if (!(e instanceof import_DataProxyError.DataProxyError))
          throw e;
        if (!e.isRetryable)
          throw e;
        if (attempt >= MAX_RETRIES) {
          if (e instanceof import_ForcedRetryError.ForcedRetryError) {
            throw e.cause;
          } else {
            throw e;
          }
        }
        this.logEmitter.emit("warn", {
          message: `Attempt ${attempt + 1}/${MAX_RETRIES} failed for ${args.actionGerund}: ${e.message ?? "(unknown)"}`
        });
        const delay = await (0, import_backOff.backOff)(attempt);
        this.logEmitter.emit("warn", { message: `Retrying after ${delay}ms` });
      }
    }
  }
  async handleError(error) {
    if (error instanceof import_SchemaMissingError.SchemaMissingError) {
      await this.uploadSchema();
      throw new import_ForcedRetryError.ForcedRetryError({
        clientVersion: this.clientVersion,
        cause: error
      });
    } else if (error) {
      throw error;
    }
  }
}
__name(DataProxyEngine, "DataProxyEngine");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataProxyEngine
});
