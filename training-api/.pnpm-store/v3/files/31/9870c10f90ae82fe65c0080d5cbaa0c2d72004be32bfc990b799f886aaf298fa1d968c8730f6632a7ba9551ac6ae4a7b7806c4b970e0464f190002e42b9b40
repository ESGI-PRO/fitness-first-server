import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';
export declare const createDirIfNotExists: (dir: string) => TE.TaskEither<{
    readonly type: "fs-create-dir";
    readonly error: Error & {
        code: string;
    };
    readonly meta: {
        dir: string;
    };
}, string | undefined>;
export declare const writeFile: ({ path, content }: {
    path: string;
    content: string;
}) => TE.TaskEither<{
    readonly type: "fs-write-file";
    readonly error: Error & {
        code: string;
    };
    readonly meta: {
        path: string;
        content: string;
    };
}, void>;
/**
 * Note to future self: in Node.js, `removeDir` and `removeFile` can both be implemented with a single `fs.promises.rm` call.
 */
export declare const removeDir: (dir: string) => TE.TaskEither<{
    readonly type: "fs-remove-dir";
    readonly error: Error & {
        code: string;
    };
    readonly meta: {
        dir: string;
    };
}, void>;
export declare const removeFile: (filePath: string) => TE.TaskEither<{
    readonly type: "fs-remove-file";
    readonly error: Error & {
        code: string;
    };
    readonly meta: {
        filePath: string;
    };
}, void>;
/**
 * Removes all backslashes from a possibly Windows path string, which is necessary for globby to work on Windows.
 * Note: we can't use `dir.replaceAll(path.sep, '/')` because `String.prototype.replaceAll` requires at least Node.js 15.
 */
export declare const normalizePossiblyWindowsDir: (dir: string) => string;
export declare const getFoldersInDir: (dir: string) => T.Task<string[]>;
export declare const getFilesInDir: (dir: string) => T.Task<string[]>;
