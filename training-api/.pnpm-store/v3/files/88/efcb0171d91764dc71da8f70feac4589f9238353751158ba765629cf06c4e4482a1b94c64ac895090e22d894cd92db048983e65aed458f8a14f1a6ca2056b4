import type { RustPanic } from '../panic';
type HandlePanic = {
    error: RustPanic;
    cliVersion: string;
    enginesVersion: string;
    command: string;
    getDatabaseVersionSafe: (schemaOrUrl: string) => Promise<string | undefined>;
};
export declare function handlePanic(args: HandlePanic): Promise<void>;
export {};
