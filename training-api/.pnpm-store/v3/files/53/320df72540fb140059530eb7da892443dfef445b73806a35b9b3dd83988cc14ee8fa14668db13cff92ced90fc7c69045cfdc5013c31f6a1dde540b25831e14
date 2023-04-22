export type RequestOptions = {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
};
type Headers = Record<string, string | string[] | undefined>;
export type RequestResponse = {
    ok: boolean;
    url: string;
    statusText?: string;
    status: number;
    headers: Headers;
    text: () => Promise<string>;
    json: () => Promise<any>;
};
export type Fetch = typeof nodeFetch;
/**
 * Isomorphic `fetch` that imitates `fetch` via `https` when on Node.js.
 * @param url
 * @param options
 * @returns
 */
export declare function request(url: string, options: RequestOptions & {
    clientVersion: string;
}, customFetch?: (fetch: Fetch) => Fetch): Promise<RequestResponse>;
/**
 * Imitates `fetch` via `https` to only suit our needs, it does nothing more.
 * This is because we cannot bundle `node-fetch` as it uses many other Node.js
 * utilities, while also bloating our bundles. This approach is much leaner.
 * @param url
 * @param options
 * @returns
 */
declare function nodeFetch(url: string, options?: RequestOptions): Promise<RequestResponse>;
export {};
