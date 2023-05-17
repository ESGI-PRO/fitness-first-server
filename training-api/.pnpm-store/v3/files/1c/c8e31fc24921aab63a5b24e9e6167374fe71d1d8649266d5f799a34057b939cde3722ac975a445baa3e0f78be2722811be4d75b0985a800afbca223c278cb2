"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHelpersIndexFile = void 0;
function generateHelpersIndexFile(sourceFile) {
    sourceFile.addStatements(/* ts */ `
    export function getEnumValues<T>(enumType: T): Array<string> {
      return [
        ...new Set(
          Object.entries(enumType)
            .filter(([key]) => !~~key)
            .flatMap((item) => item),
        ),
      ]
    }
  `);
}
exports.generateHelpersIndexFile = generateHelpersIndexFile;
//# sourceMappingURL=generate-helpers.js.map