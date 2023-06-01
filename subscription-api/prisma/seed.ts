import { plans } from '../datas/plans';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
    const data = await prisma.plan.findMany() || []
    console.log(data)
    if(data.length === 0){
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

  }

  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })