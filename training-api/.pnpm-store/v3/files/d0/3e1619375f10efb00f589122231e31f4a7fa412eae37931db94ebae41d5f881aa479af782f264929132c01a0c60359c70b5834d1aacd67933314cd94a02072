"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const helpers_1 = require("./helpers");
const helpers_2 = require("./helpers");
async function generateClass(project, outputDir, model) {
    const dirPath = path_1.default.resolve(outputDir, 'models');
    const filePath = path_1.default.resolve(dirPath, `${model.name}.model.ts`);
    const sourceFile = project.createSourceFile(filePath, undefined, {
        overwrite: true,
    });
    const validatorImports = [
        ...new Set(model.fields
            .map((field) => (0, helpers_2.getDecoratorsImportsByType)(field))
            .flatMap((item) => item)),
    ];
    if ((0, helpers_2.shouldImportPrisma)(model.fields)) {
        (0, helpers_1.generatePrismaImport)(sourceFile);
    }
    (0, helpers_2.generateClassValidatorImport)(sourceFile, validatorImports);
    const relationImports = new Set();
    model.fields.forEach((field) => {
        if (field.relationName && model.name !== field.type) {
            relationImports.add(field.type);
        }
    });
    (0, helpers_2.generateRelationImportsImport)(sourceFile, [
        ...relationImports,
    ]);
    if ((0, helpers_1.shouldImportHelpers)(model.fields)) {
        (0, helpers_1.generateHelpersImports)(sourceFile, ['getEnumValues']);
    }
    (0, helpers_1.generateEnumImports)(sourceFile, model.fields);
    sourceFile.addClass({
        name: model.name,
        isExported: true,
        properties: [
            ...model.fields.map((field) => {
                return {
                    name: field.name,
                    type: (0, helpers_2.getTSDataTypeFromFieldType)(field),
                    hasExclamationToken: field.isRequired,
                    hasQuestionToken: !field.isRequired,
                    trailingTrivia: '\r\n',
                    decorators: (0, helpers_2.getDecoratorsByFieldType)(field),
                };
            }),
        ],
    });
}
exports.default = generateClass;
//# sourceMappingURL=generate-class.js.map