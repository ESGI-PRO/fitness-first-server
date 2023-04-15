export type GeneratorPaths = {
    outputPath: string;
    generatorPath: string;
    isNode?: boolean;
};
export type GeneratorResolver = (baseDir: string, version?: string) => Promise<GeneratorPaths>;
export type PredefinedGeneratorResolvers = {
    [generatorName: string]: GeneratorResolver;
};
export declare const predefinedGeneratorResolvers: PredefinedGeneratorResolvers;
