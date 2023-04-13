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
var LibraryEngine_exports = {};
__export(LibraryEngine_exports, {
  LibraryEngine: () => LibraryEngine
});
module.exports = __toCommonJS(LibraryEngine_exports);
var import_debug = __toESM(require("@prisma/debug"));
var import_get_platform = require("@prisma/get-platform");
var import_chalk = __toESM(require("chalk"));
var import_fs = __toESM(require("fs"));
var import_Engine = require("../common/Engine");
var import_PrismaClientInitializationError = require("../common/errors/PrismaClientInitializationError");
var import_PrismaClientKnownRequestError = require("../common/errors/PrismaClientKnownRequestError");
var import_PrismaClientRustPanicError = require("../common/errors/PrismaClientRustPanicError");
var import_PrismaClientUnknownRequestError = require("../common/errors/PrismaClientUnknownRequestError");
var import_getErrorMessageWithLink = require("../common/errors/utils/getErrorMessageWithLink");
var import_prismaGraphQLToJSError = require("../common/errors/utils/prismaGraphQLToJSError");
var import_getBatchRequestPayload = require("../common/utils/getBatchRequestPayload");
var import_getInteractiveTransactionId = require("../common/utils/getInteractiveTransactionId");
var import_tracing = require("../tracing");
var import_DefaultLibraryLoader = require("./DefaultLibraryLoader");
var import_ExitHooks = require("./ExitHooks");
const debug = (0, import_debug.default)("prisma:client:libraryEngine");
function isQueryEvent(event) {
  return event["item_type"] === "query" && "query" in event;
}
__name(isQueryEvent, "isQueryEvent");
function isPanicEvent(event) {
  if ("level" in event) {
    return event.level === "error" && event["message"] === "PANIC";
  } else {
    return false;
  }
}
__name(isPanicEvent, "isPanicEvent");
const knownPlatforms = [...import_get_platform.platforms, "native"];
let engineInstanceCount = 0;
const exitHooks = new import_ExitHooks.ExitHooks();
class LibraryEngine extends import_Engine.Engine {
  constructor(config, loader = new import_DefaultLibraryLoader.DefaultLibraryLoader(config)) {
    super();
    try {
      this.datamodel = import_fs.default.readFileSync(config.datamodelPath, "utf-8");
    } catch (e) {
      if (e.stack.match(/\/\.next|\/next@|\/next\//)) {
        throw new import_PrismaClientInitializationError.PrismaClientInitializationError(
          `Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`,
          config.clientVersion
        );
      }
      throw e;
    }
    this.config = config;
    this.libraryStarted = false;
    this.logQueries = config.logQueries ?? false;
    this.logLevel = config.logLevel ?? "error";
    this.libraryLoader = loader;
    this.logEmitter = config.logEmitter;
    this.engineProtocol = config.engineProtocol;
    this.datasourceOverrides = config.datasources ? this.convertDatasources(config.datasources) : {};
    if (config.enableDebugLogs) {
      this.logLevel = "debug";
    }
    this.libraryInstantiationPromise = this.instantiateLibrary();
    exitHooks.install();
    this.checkForTooManyEngines();
  }
  get beforeExitListener() {
    return exitHooks.getListener(this);
  }
  set beforeExitListener(listener) {
    exitHooks.setListener(this, listener);
  }
  checkForTooManyEngines() {
    if (engineInstanceCount === 10) {
      console.warn(
        `${import_chalk.default.yellow("warn(prisma-client)")} There are already 10 instances of Prisma Client actively running.`
      );
    }
  }
  async transaction(action, headers, arg) {
    await this.start();
    const headerStr = JSON.stringify(headers);
    let result;
    if (action === "start") {
      const jsonOptions = JSON.stringify({
        max_wait: arg?.maxWait ?? 2e3,
        timeout: arg?.timeout ?? 5e3,
        isolation_level: arg?.isolationLevel
      });
      result = await this.engine?.startTransaction(jsonOptions, headerStr);
    } else if (action === "commit") {
      result = await this.engine?.commitTransaction(arg.id, headerStr);
    } else if (action === "rollback") {
      result = await this.engine?.rollbackTransaction(arg.id, headerStr);
    }
    const response = this.parseEngineResponse(result);
    if (response.error_code) {
      throw new import_PrismaClientKnownRequestError.PrismaClientKnownRequestError(response.message, {
        code: response.error_code,
        clientVersion: this.config.clientVersion,
        meta: response.meta
      });
    }
    return response;
  }
  async instantiateLibrary() {
    debug("internalSetup");
    if (this.libraryInstantiationPromise) {
      return this.libraryInstantiationPromise;
    }
    await (0, import_get_platform.isNodeAPISupported)();
    this.platform = await this.getPlatform();
    await this.loadEngine();
    this.version();
  }
  async getPlatform() {
    if (this.platform)
      return this.platform;
    const platform = await (0, import_get_platform.getPlatform)();
    if (!knownPlatforms.includes(platform)) {
      throw new import_PrismaClientInitializationError.PrismaClientInitializationError(
        `Unknown ${import_chalk.default.red("PRISMA_QUERY_ENGINE_LIBRARY")} ${import_chalk.default.redBright.bold(
          platform
        )}. Possible binaryTargets: ${import_chalk.default.greenBright(
          knownPlatforms.join(", ")
        )} or a path to the query engine library.
You may have to run ${import_chalk.default.greenBright("prisma generate")} for your changes to take effect.`,
        this.config.clientVersion
      );
    }
    return platform;
  }
  parseEngineResponse(response) {
    if (!response) {
      throw new import_PrismaClientUnknownRequestError.PrismaClientUnknownRequestError(`Response from the Engine was empty`, {
        clientVersion: this.config.clientVersion
      });
    }
    try {
      const config = JSON.parse(response);
      return config;
    } catch (err) {
      throw new import_PrismaClientUnknownRequestError.PrismaClientUnknownRequestError(`Unable to JSON.parse response from engine`, {
        clientVersion: this.config.clientVersion
      });
    }
  }
  convertDatasources(datasources) {
    const obj = /* @__PURE__ */ Object.create(null);
    for (const { name, url } of datasources) {
      obj[name] = url;
    }
    return obj;
  }
  async loadEngine() {
    if (!this.engine) {
      if (!this.QueryEngineConstructor) {
        this.library = await this.libraryLoader.loadLibrary();
        this.QueryEngineConstructor = this.library.QueryEngine;
      }
      try {
        const weakThis = new WeakRef(this);
        this.engine = new this.QueryEngineConstructor(
          {
            datamodel: this.datamodel,
            env: process.env,
            logQueries: this.config.logQueries ?? false,
            ignoreEnvVarErrors: true,
            datasourceOverrides: this.datasourceOverrides,
            logLevel: this.logLevel,
            configDir: this.config.cwd,
            engineProtocol: this.engineProtocol
          },
          (log) => {
            weakThis.deref()?.logger(log);
          }
        );
        engineInstanceCount++;
      } catch (_e) {
        const e = _e;
        const error = this.parseInitError(e.message);
        if (typeof error === "string") {
          throw e;
        } else {
          throw new import_PrismaClientInitializationError.PrismaClientInitializationError(error.message, this.config.clientVersion, error.error_code);
        }
      }
    }
  }
  logger(log) {
    const event = this.parseEngineResponse(log);
    if (!event)
      return;
    if ("span" in event) {
      if (this.config.tracingConfig.enabled === true) {
        void (0, import_tracing.createSpan)(event);
      }
      return;
    }
    event.level = event?.level.toLowerCase() ?? "unknown";
    if (isQueryEvent(event)) {
      this.logEmitter.emit("query", {
        timestamp: new Date(),
        query: event.query,
        params: event.params,
        duration: Number(event.duration_ms),
        target: event.module_path
      });
    } else if (isPanicEvent(event)) {
      this.loggerRustPanic = new import_PrismaClientRustPanicError.PrismaClientRustPanicError(
        this.getErrorMessageWithLink(
          `${event.message}: ${event.reason} in ${event.file}:${event.line}:${event.column}`
        ),
        this.config.clientVersion
      );
    } else {
      this.logEmitter.emit(event.level, {
        timestamp: new Date(),
        message: event.message,
        target: event.module_path
      });
    }
  }
  getErrorMessageWithLink(title) {
    return (0, import_getErrorMessageWithLink.getErrorMessageWithLink)({
      platform: this.platform,
      title,
      version: this.config.clientVersion,
      engineVersion: this.versionInfo?.commit,
      database: this.config.activeProvider,
      query: this.lastQuery
    });
  }
  parseInitError(str) {
    try {
      const error = JSON.parse(str);
      return error;
    } catch (e) {
    }
    return str;
  }
  parseRequestError(str) {
    try {
      const error = JSON.parse(str);
      return error;
    } catch (e) {
    }
    return str;
  }
  on(event, listener) {
    if (event === "beforeExit") {
      this.beforeExitListener = listener;
    } else {
      this.logEmitter.on(event, listener);
    }
  }
  async start() {
    await this.libraryInstantiationPromise;
    await this.libraryStoppingPromise;
    if (this.libraryStartingPromise) {
      debug(`library already starting, this.libraryStarted: ${this.libraryStarted}`);
      return this.libraryStartingPromise;
    }
    if (this.libraryStarted) {
      return;
    }
    const startFn = /* @__PURE__ */ __name(async () => {
      debug("library starting");
      try {
        const headers = {
          traceparent: (0, import_tracing.getTraceParent)({ tracingConfig: this.config.tracingConfig })
        };
        await this.engine?.connect(JSON.stringify(headers));
        this.libraryStarted = true;
        debug("library started");
      } catch (err) {
        const error = this.parseInitError(err.message);
        if (typeof error === "string") {
          throw err;
        } else {
          throw new import_PrismaClientInitializationError.PrismaClientInitializationError(error.message, this.config.clientVersion, error.error_code);
        }
      } finally {
        this.libraryStartingPromise = void 0;
      }
    }, "startFn");
    const spanConfig = {
      name: "connect",
      enabled: this.config.tracingConfig.enabled
    };
    this.libraryStartingPromise = (0, import_tracing.runInChildSpan)(spanConfig, startFn);
    return this.libraryStartingPromise;
  }
  async stop() {
    await this.libraryStartingPromise;
    await this.executingQueryPromise;
    if (this.libraryStoppingPromise) {
      debug("library is already stopping");
      return this.libraryStoppingPromise;
    }
    if (!this.libraryStarted) {
      return;
    }
    const stopFn = /* @__PURE__ */ __name(async () => {
      await new Promise((r) => setTimeout(r, 5));
      debug("library stopping");
      const headers = {
        traceparent: (0, import_tracing.getTraceParent)({ tracingConfig: this.config.tracingConfig })
      };
      await this.engine?.disconnect(JSON.stringify(headers));
      this.libraryStarted = false;
      this.libraryStoppingPromise = void 0;
      debug("library stopped");
    }, "stopFn");
    const spanConfig = {
      name: "disconnect",
      enabled: this.config.tracingConfig.enabled
    };
    this.libraryStoppingPromise = (0, import_tracing.runInChildSpan)(spanConfig, stopFn);
    return this.libraryStoppingPromise;
  }
  async getDmmf() {
    await this.start();
    const traceparent = (0, import_tracing.getTraceParent)({ tracingConfig: this.config.tracingConfig });
    const response = await this.engine.dmmf(JSON.stringify({ traceparent }));
    return (0, import_tracing.runInChildSpan)(
      { name: "parseDmmf", enabled: this.config.tracingConfig.enabled, internal: true },
      () => JSON.parse(response)
    );
  }
  version() {
    this.versionInfo = this.library?.version();
    return this.versionInfo?.version ?? "unknown";
  }
  debugPanic(message) {
    return this.library?.debugPanic(message);
  }
  async request(query, { traceparent, interactiveTransaction }) {
    debug(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    const headerStr = JSON.stringify({ traceparent });
    const queryStr = JSON.stringify(query);
    try {
      await this.start();
      this.executingQueryPromise = this.engine?.query(queryStr, headerStr, interactiveTransaction?.id);
      this.lastQuery = queryStr;
      const data = this.parseEngineResponse(await this.executingQueryPromise);
      if (data.errors) {
        if (data.errors.length === 1) {
          throw this.buildQueryError(data.errors[0]);
        }
        throw new import_PrismaClientUnknownRequestError.PrismaClientUnknownRequestError(JSON.stringify(data.errors), {
          clientVersion: this.config.clientVersion
        });
      } else if (this.loggerRustPanic) {
        throw this.loggerRustPanic;
      }
      return { data, elapsed: 0 };
    } catch (e) {
      if (e instanceof import_PrismaClientInitializationError.PrismaClientInitializationError) {
        throw e;
      }
      if (e.code === "GenericFailure" && e.message?.startsWith("PANIC:")) {
        throw new import_PrismaClientRustPanicError.PrismaClientRustPanicError(this.getErrorMessageWithLink(e.message), this.config.clientVersion);
      }
      const error = this.parseRequestError(e.message);
      if (typeof error === "string") {
        throw e;
      } else {
        throw new import_PrismaClientUnknownRequestError.PrismaClientUnknownRequestError(`${error.message}
${error.backtrace}`, {
          clientVersion: this.config.clientVersion
        });
      }
    }
  }
  async requestBatch(queries, { transaction, traceparent }) {
    debug("requestBatch");
    const request = (0, import_getBatchRequestPayload.getBatchRequestPayload)(queries, transaction);
    await this.start();
    this.lastQuery = JSON.stringify(request);
    this.executingQueryPromise = this.engine.query(
      this.lastQuery,
      JSON.stringify({ traceparent }),
      (0, import_getInteractiveTransactionId.getInteractiveTransactionId)(transaction)
    );
    const result = await this.executingQueryPromise;
    const data = this.parseEngineResponse(result);
    if (data.errors) {
      if (data.errors.length === 1) {
        throw this.buildQueryError(data.errors[0]);
      }
      throw new import_PrismaClientUnknownRequestError.PrismaClientUnknownRequestError(JSON.stringify(data.errors), {
        clientVersion: this.config.clientVersion
      });
    }
    const { batchResult, errors } = data;
    if (Array.isArray(batchResult)) {
      return batchResult.map((result2) => {
        if (result2.errors && result2.errors.length > 0) {
          return this.loggerRustPanic ?? this.buildQueryError(result2.errors[0]);
        }
        return {
          data: result2,
          elapsed: 0
        };
      });
    } else {
      if (errors && errors.length === 1) {
        throw new Error(errors[0].error);
      }
      throw new Error(JSON.stringify(data));
    }
  }
  buildQueryError(error) {
    if (error.user_facing_error.is_panic) {
      return new import_PrismaClientRustPanicError.PrismaClientRustPanicError(
        this.getErrorMessageWithLink(error.user_facing_error.message),
        this.config.clientVersion
      );
    }
    return (0, import_prismaGraphQLToJSError.prismaGraphQLToJSError)(error, this.config.clientVersion);
  }
  async metrics(options) {
    await this.start();
    const responseString = await this.engine.metrics(JSON.stringify(options));
    if (options.format === "prometheus") {
      return responseString;
    }
    return this.parseEngineResponse(responseString);
  }
}
__name(LibraryEngine, "LibraryEngine");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LibraryEngine
});
