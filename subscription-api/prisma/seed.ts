import { plans } from '../datas/plans';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function insertSubscription() {
  try {
    Promise.all(
      plans.map((item) =>
        prisma.plan.create({
          data: item,
        }),
      ),
    ).then(() => {
        console.info('[SEED] Successfully create plans records')
      })
      .catch((e) =>
        console.error('[SEED] Failed to create plans records', e),
      );
  } catch (err) {
    console.log(err);
  }
}

insertSubscription();