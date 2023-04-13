export interface IntrospectionViewDefinition {
    schema: string;
    name: string;
    definition: string;
}
type HandleViewsIOParams = {
    views: IntrospectionViewDefinition[];
    schemaPath: string;
};
/**
 * For any given view definitions, the CLI must either create or update the corresponding view definition files
 * in the file system, in `${path.dirname(schemaPath)}/views/{viewDbSchema}/{viewName}.sql`.
 * If some other files or folders exist within the `views` directory, the CLI must remove them.
 * These files and folders are deleted silently.
 */
export declare function handleViewsIO({ views, schemaPath }: HandleViewsIOParams): Promise<void>;
export {};
