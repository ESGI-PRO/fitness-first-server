"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEnumsIndexFile = exports.generateEnumImports = exports.generateHelpersImports = exports.generateRelationImportsImport = exports.generatePrismaImport = exports.generateClassValidatorImport = exports.getDecoratorsImportsByType = exports.getDecoratorsByFieldType = exports.getTSDataTypeFromFieldType = exports.shouldImportHelpers = exports.shouldImportPrisma = exports.generateModelsIndexFile = void 0;
const path_1 = __importDefault(require("path"));
const generateModelsIndexFile = (prismaClientDmmf, project, outputDir) => {
    const modelsBarrelExportSourceFile = project.createSourceFile(path_1.default.resolve(outputDir, 'models', 'index.ts'), undefined, { overwrite: true });
    modelsBarrelExportSourceFile.addExportDeclarations(prismaClientDmmf.datamodel.models
        .map((model) => model.name)
        .sort()
        .map((modelName) => ({
        moduleSpecifier: `./${modelName}.model`,
        namedExports: [modelName],
    })));
};
exports.generateModelsIndexFile = generateModelsIndexFile;
const shouldImportPrisma = (fields) => {
    return fields.some((field) => ['Decimal', 'Json'].includes(field.type));
};
exports.shouldImportPrisma = shouldImportPrisma;
const shouldImportHelpers = (fields) => {
    return fields.some((field) => ['enum'].includes(field.kind));
};
exports.shouldImportHelpers = shouldImportHelpers;
const getTSDataTypeFromFieldType = (field) => {
    let type = field.type;
    switch (field.type) {
        case 'Int':
        case 'Float':
            type = 'number';
            break;
        case 'DateTime':
            type = 'Date';
            break;
        case 'String':
            type = 'string';
            break;
        case 'Boolean':
            type = 'boolean';
            break;
        case 'Decimal':
            type = 'Prisma.Decimal';
            break;
        case 'Json':
            type = 'Prisma.JsonValue';
            break;
        default:
            if (field.isList) {
                type = `${field.type}[]`;
            }
    }
    return type;
};
exports.getTSDataTypeFromFieldType = getTSDataTypeFromFieldType;
const getDecoratorsByFieldType = (field) => {
    const decorators = [];
    switch (field.type) {
        case 'Int':
            decorators.push({
                name: 'IsInt',
                arguments: [],
            });
            break;
        case 'DateTime':
            decorators.push({
                name: 'IsDate',
                arguments: [],
            });
            break;
        case 'String':
            decorators.push({
                name: 'IsString',
                arguments: [],
            });
            break;
        case 'Boolean':
            decorators.push({
                name: 'IsBoolean',
                arguments: [],
            });
            break;
    }
    if (field.isRequired) {
        decorators.unshift({
            name: 'IsDefined',
            arguments: [],
        });
    }
    else {
        decorators.unshift({
            name: 'IsOptional',
            arguments: [],
        });
    }
    if (field.kind === 'enum') {
        decorators.push({
            name: 'IsIn',
            arguments: [`getEnumValues(${String(field.type)})`],
        });
    }
    return decorators;
};
exports.getDecoratorsByFieldType = getDecoratorsByFieldType;
const getDecoratorsImportsByType = (field) => {
    const validatorImports = new Set();
    switch (field.type) {
        case 'Int':
            validatorImports.add('IsInt');
            break;
        case 'DateTime':
            validatorImports.add('IsDate');
            break;
        case 'String':
            validatorImports.add('IsString');
            break;
        case 'Boolean':
            validatorImports.add('IsBoolean');
            break;
    }
    if (field.isRequired) {
        validatorImports.add('IsDefined');
    }
    else {
        validatorImports.add('IsOptional');
    }
    if (field.kind === 'enum') {
        validatorImports.add('IsIn');
    }
    return [...validatorImports];
};
exports.getDecoratorsImportsByType = getDecoratorsImportsByType;
const generateClassValidatorImport = (sourceFile, validatorImports) => {
    sourceFile.addImportDeclaration({
        moduleSpecifier: 'class-validator',
        namedImports: validatorImports,
    });
};
exports.generateClassValidatorImport = generateClassValidatorImport;
const generatePrismaImport = (sourceFile) => {
    sourceFile.addImportDeclaration({
        moduleSpecifier: '@prisma/client',
        namedImports: ['Prisma'],
    });
};
exports.generatePrismaImport = generatePrismaImport;
const generateRelationImportsImport = (sourceFile, relationImports) => {
    sourceFile.addImportDeclaration({
        moduleSpecifier: './',
        namedImports: relationImports,
    });
};
exports.generateRelationImportsImport = generateRelationImportsImport;
const generateHelpersImports = (sourceFile, helpersImports) => {
    sourceFile.addImportDeclaration({
        moduleSpecifier: '../helpers',
        namedImports: helpersImports,
    });
};
exports.generateHelpersImports = generateHelpersImports;
const generateEnumImports = (sourceFile, fields) => {
    const enumsToImport = fields
        .filter((field) => field.kind === 'enum')
        .map((field) => field.type);
    if (enumsToImport.length > 0) {
        sourceFile.addImportDeclaration({
            moduleSpecifier: '../enums',
            namedImports: enumsToImport,
        });
    }
};
exports.generateEnumImports = generateEnumImports;
function generateEnumsIndexFile(sourceFile, enumNames) {
    sourceFile.addExportDeclarations(enumNames.sort().map((name) => ({
        moduleSpecifier: `./${name}.enum`,
        namedExports: [name],
    })));
}
exports.generateEnumsIndexFile = generateEnumsIndexFile;
//# sourceMappingURL=helpers.js.map