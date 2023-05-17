"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getQueryEngineProtocol_exports = {};
__export(getQueryEngineProtocol_exports, {
  getQueryEngineProtocol: () => getQueryEngineProtocol
});
module.exports = __toCommonJS(getQueryEngineProtocol_exports);
function getQueryEngineProtocol(generatorConfig) {
  const fromEnv = process.env.PRISMA_ENGINE_PROTOCOL;
  if (fromEnv === "json" || fromEnv == "graphql") {
    return fromEnv;
  }
  if (fromEnv !== void 0) {
    throw new Error(`Invalid PRISMA_ENGINE_PROTOCOL env variable value. Expected 'graphql' or 'json', got '${fromEnv}'`);
  }
  if (generatorConfig?.previewFeatures?.includes("jsonProtocol")) {
    return "json";
  }
  return "graphql";
}
__name(getQueryEngineProtocol, "getQueryEngineProtocol");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getQueryEngineProtocol
});
