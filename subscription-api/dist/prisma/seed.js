"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plans_1 = require("../datas/plans");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertSubscription() {
    try {
        Promise.all(plans_1.plans.map((item) => prisma.plan.create({
            data: item,
        }))).then(() => {
            console.info('[SEED] Successfully create plans records');
        })
            .catch((e) => console.error('[SEED] Failed to create plans records', e));
    }
    catch (err) {
        console.log(err);
    }
}
insertSubscription();
//# sourceMappingURL=seed.js.map