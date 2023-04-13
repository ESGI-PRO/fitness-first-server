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
var fs_functional_exports = {};
__export(fs_functional_exports, {
  createDirIfNotExists: () => createDirIfNotExists,
  getFilesInDir: () => getFilesInDir,
  getFoldersInDir: () => getFoldersInDir,
  normalizePossiblyWindowsDir: () => normalizePossiblyWindowsDir,
  removeDir: () => removeDir,
  removeFile: () => removeFile,
  writeFile: () => writeFile
});
module.exports = __toCommonJS(fs_functional_exports);
var import_function = require("fp-ts/lib/function");
var TE = __toESM(require("fp-ts/lib/TaskEither"));
var import_fs = __toESM(require("fs"));
var import_globby = __toESM(require("globby"));
var import_path = __toESM(require("path"));
const createDirIfNotExists = /* @__PURE__ */ __name((dir) => (0, import_function.pipe)(
  TE.tryCatch(
    () => import_fs.default.promises.mkdir(dir, { recursive: true }),
    createTaggedSystemError("fs-create-dir", { dir })
  )
), "createDirIfNotExists");
const writeFile = /* @__PURE__ */ __name(({ path: path2, content }) => (0, import_function.pipe)(
  TE.tryCatch(
    () => import_fs.default.promises.writeFile(path2, content, { encoding: "utf-8" }),
    createTaggedSystemError("fs-write-file", { path: path2, content })
  )
), "writeFile");
const removeDir = /* @__PURE__ */ __name((dir) => (0, import_function.pipe)(
  TE.tryCatch(() => import_fs.default.promises.rmdir(dir, { recursive: true }), createTaggedSystemError("fs-remove-dir", { dir }))
), "removeDir");
const removeFile = /* @__PURE__ */ __name((filePath) => (0, import_function.pipe)(TE.tryCatch(() => import_fs.default.promises.unlink(filePath), createTaggedSystemError("fs-remove-file", { filePath }))), "removeFile");
const normalizePossiblyWindowsDir = /* @__PURE__ */ __name((dir) => {
  if (process.platform === "win32") {
    return dir.replace(/\\/g, "/");
  }
  return dir;
}, "normalizePossiblyWindowsDir");
const getFoldersInDir = /* @__PURE__ */ __name((dir) => () => {
  const normalizedDir = normalizePossiblyWindowsDir(import_path.default.join(dir, "**"));
  return (0, import_globby.default)(normalizedDir, { onlyFiles: false, onlyDirectories: true });
}, "getFoldersInDir");
const getFilesInDir = /* @__PURE__ */ __name((dir) => () => {
  const normalizedDir = normalizePossiblyWindowsDir(import_path.default.join(dir, "**"));
  return (0, import_globby.default)(normalizedDir, { onlyFiles: true, onlyDirectories: false });
}, "getFilesInDir");
function createTaggedSystemError(type, meta) {
  return (e) => ({
    type,
    error: e,
    meta
  });
}
__name(createTaggedSystemError, "createTaggedSystemError");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDirIfNotExists,
  getFilesInDir,
  getFoldersInDir,
  normalizePossiblyWindowsDir,
  removeDir,
  removeFile,
  writeFile
});
