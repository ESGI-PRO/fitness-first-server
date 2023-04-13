"use strict";
var import_maxBy = require("./maxBy");
test("empty array", () => {
  expect((0, import_maxBy.maxBy)([], () => 1)).toBe(void 0);
});
test("with items", () => {
  const items = [{ count: 1 }, { count: 10 }, { count: 5 }];
  expect((0, import_maxBy.maxBy)(items, (item) => item.count)).toBe(items[1]);
});
