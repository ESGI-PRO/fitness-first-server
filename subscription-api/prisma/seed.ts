import { plans } from '../datas/plans';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertSubscription() {
  try {
    //get all plans
    const allPlans = await prisma.plan.findMany() || [] ;

    if(allPlans.length === 0){
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
    }
  } catch (err) {
    console.log(err);
  }
}

insertSubscription();