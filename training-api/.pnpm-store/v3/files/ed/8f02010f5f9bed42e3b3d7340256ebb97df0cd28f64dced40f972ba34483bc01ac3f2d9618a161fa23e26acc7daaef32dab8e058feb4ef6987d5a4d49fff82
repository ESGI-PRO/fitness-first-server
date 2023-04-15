"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const internals_1 = require("@prisma/internals");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const removeDir_1 = __importDefault(require("./utils/removeDir"));
const generate_class_1 = __importDefault(require("./generate-class"));
const helpers_1 = require("./helpers");
const project_1 = require("./project");
const generate_enum_1 = __importDefault(require("./generate-enum"));
const generate_helpers_1 = require("./generate-helpers");
async function generate(options) {
    const outputDir = (0, internals_1.parseEnvValue)(options.generator.output);
    await fs_1.promises.mkdir(outputDir, { recursive: true });
    await (0, removeDir_1.default)(outputDir, true);
    const prismaClientProvider = options.otherGenerators.find((it) => (0, internals_1.parseEnvValue)(it.provider) === 'prisma-client-js');
    const prismaClientDmmf = await (0, internals_1.getDMMF)({
        datamodel: options.datamodel,
        previewFeatures: prismaClientProvider === null || prismaClientProvider === void 0 ? void 0 : prismaClientProvider.previewFeatures,
    });
    const enumNames = new Set();
    prismaClientDmmf.datamodel.enums.forEach((enumItem) => {
        enumNames.add(enumItem.name);
        (0, generate_enum_1.default)(project_1.project, outputDir, enumItem);
    });
    if (enumNames.size > 0) {
        const enumsIndexSourceFile = project_1.project.createSourceFile(path_1.default.resolve(outputDir, 'enums', 'index.ts'), undefined, { overwrite: true });
        (0, helpers_1.generateEnumsIndexFile)(enumsIndexSourceFile, [...enumNames]);
    }
    prismaClientDmmf.datamodel.models.forEach((model) => (0, generate_class_1.default)(project_1.project, outputDir, model));
    const helpersIndexSourceFile = project_1.project.createSourceFile(path_1.default.resolve(outputDir, 'helpers', 'index.ts'), undefined, { overwrite: true });
    (0, generate_helpers_1.generateHelpersIndexFile)(helpersIndexSourceFile);
    (0, helpers_1.generateModelsIndexFile)(prismaClientDmmf, project_1.project, outputDir);
    await project_1.project.save();
}
exports.generate = generate;
//# sourceMappingURL=prisma-generator.js.map