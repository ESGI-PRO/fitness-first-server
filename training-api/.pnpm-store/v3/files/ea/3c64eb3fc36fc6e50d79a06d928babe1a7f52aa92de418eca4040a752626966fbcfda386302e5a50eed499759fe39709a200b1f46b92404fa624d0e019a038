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
var handleViewsIO_exports = {};
__export(handleViewsIO_exports, {
  handleViewsIO: () => handleViewsIO
});
module.exports = __toCommonJS(handleViewsIO_exports);
var E = __toESM(require("fp-ts/lib/Either"));
var import_function = require("fp-ts/lib/function");
var T = __toESM(require("fp-ts/lib/Task"));
var TE = __toESM(require("fp-ts/lib/TaskEither"));
var import_path = __toESM(require("path"));
var import_ts_pattern = require("ts-pattern");
var import_fs_functional = require("../utils/fs-functional");
async function handleViewsIO({ views, schemaPath }) {
  const prismaDir = import_path.default.dirname((0, import_fs_functional.normalizePossiblyWindowsDir)(schemaPath));
  const viewsDir = import_path.default.posix.join(prismaDir, "views");
  const viewEntries = views.map(({ schema, ...rest }) => {
    const viewDir = import_path.default.posix.join(viewsDir, schema);
    return [viewDir, rest];
  });
  const viewPathsToWrite = viewEntries.map(([viewDir, _]) => viewDir);
  const viewsFilesToWrite = viewEntries.map(([viewDir, { name, definition }]) => {
    const viewFile = import_path.default.posix.join(viewDir, `${name}.sql`);
    return { path: viewFile, content: definition };
  });
  const updateDefinitionsInViewsDirPipeline = (0, import_function.pipe)(
    (0, import_fs_functional.createDirIfNotExists)(viewsDir),
    TE.chainW(() => TE.traverseArray(import_fs_functional.createDirIfNotExists)(viewPathsToWrite)),
    TE.chainW(() => TE.traverseArray(import_fs_functional.writeFile)(viewsFilesToWrite)),
    TE.chainW(
      () => (0, import_function.pipe)(
        (0, import_fs_functional.getFoldersInDir)(viewsDir),
        T.chain((directoriesInViewsDir) => {
          const viewDirsToRemove = directoriesInViewsDir.filter((dir) => !viewPathsToWrite.includes(dir));
          return TE.traverseArray(import_fs_functional.removeDir)(viewDirsToRemove);
        })
      )
    ),
    TE.chainW(
      () => (0, import_function.pipe)(
        (0, import_fs_functional.getFilesInDir)(viewsDir),
        T.chain((filesInViewsDir) => {
          const viewFilesToKeep = viewsFilesToWrite.map(({ path: path2 }) => path2);
          const viewFilesToRemove = filesInViewsDir.filter((file) => !viewFilesToKeep.includes(file));
          return TE.traverseArray(import_fs_functional.removeFile)(viewFilesToRemove);
        })
      )
    )
  );
  const updateDefinitionsInViewsDirEither = await updateDefinitionsInViewsDirPipeline();
  if (E.isRight(updateDefinitionsInViewsDirEither)) {
    return;
  }
  const error = (0, import_ts_pattern.match)(updateDefinitionsInViewsDirEither.left).with({ type: "fs-create-dir" }, (e) => {
    throw new Error(`Error creating the directory: ${e.meta.dir}.
${e.error}.`);
  }).with({ type: "fs-write-file" }, (e) => {
    throw new Error(`Error writing the view definition
${e.meta.content}
to file ${e.meta.path}.
${e.error}.`);
  }).with({ type: "fs-remove-dir" }, (e) => {
    throw new Error(`Error removing the directory: ${e.meta.dir}.
${e.error}.`);
  }).with({ type: "fs-remove-file" }, (e) => {
    throw new Error(`Error removing the file: ${e.meta.filePath}.
${e.error}.`);
  }).exhaustive();
  throw error;
}
__name(handleViewsIO, "handleViewsIO");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handleViewsIO
});
