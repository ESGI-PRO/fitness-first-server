import type { PrismaClientRustErrorArgs } from './types/PrismaClientRustErrorArgs';
/**
 * A generic Prisma Client Rust error.
 * This error is being exposed via the `prisma.$on('error')` interface
 */
export declare class PrismaClientRustError extends Error {
    clientVersion: string;
    private _isPanic;
    constructor({ clientVersion, error }: PrismaClientRustErrorArgs);
    get [Symbol.toStringTag](): string;
    isPanic(): boolean;
}
