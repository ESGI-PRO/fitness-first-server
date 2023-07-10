import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { plans } from '../datas/plans';
import { faker } from '@faker-js/faker';
import { SubcriptionsService } from './subcriptions/subcriptions.service';
import { PlansService } from './plans/plans.service';
import { InvoicesService } from './invoices/invoices.service';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private prisma: PrismaService,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    private readonly subcriptionsService: SubcriptionsService,
    private readonly planService: PlansService,
    private readonly invoicesService: InvoicesService
    ) {}

  onModuleInit() {

   const insertPlans = async ()  =>{
      try {
        //get all plans
        const allPlans = await this.prisma.plan.findMany();
        console.log("allPlans", allPlans)
        if(allPlans.length === 0){
          Promise.all(
            plans.map((item) =>
              this.prisma.plan.create({
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


    const subscriptionGenerate = async () => {
      // find all subscriptions
      const subscriptions = await this.subcriptionsService.findAll();
      console.log('subscriptions-all', subscriptions);
      if(subscriptions?.length < 1){
     // find all users
     const users = await firstValueFrom(this.userServiceClient.send("user_get_all", {}));
     for(let i = 0; i < users.length; i++){
         const user = users[i];

         // get all plans
         const allPlans =  await this.planService.findAll();

         console.log('plans', allPlans);
        // add a stripeId to all users and create a subcription and invoice for each user
        const activeList = [true, false];
        const stripeId = faker.string.uuid()
        const subscription = await this.subcriptionsService.create({
           userId: user.id,
           stripeId: stripeId,
           planId: allPlans[Math.floor(Math.random() * allPlans.length)].id,
           active: activeList[Math.floor(Math.random() * activeList.length)],
           currentPeriodStart: faker.date.past(),
           currentPeriodEnd: faker.date.future(),
         });

         console.log("subscription", subscription)

         // create invoice
         const planAmountList = plans.reduce((acc, plan)=>{
           return [...acc, plan.price]
         }, [])
         const invoice = await this.invoicesService.create({
           userId: user.id,
           stripeId: stripeId,
           amountPaid: planAmountList[Math.floor(Math.random() * planAmountList.length)],
           number: `${faker.number.int({ max: 300 })}`,
           hostedInvoiceUrl: faker.internet.url(),
           subscriptionId: subscription.id
         });

         console.log("invoice", invoice)
      }

     }
}

  insertPlans().then(()=>{
    subscriptionGenerate().then(()=>{
      console.log('subscriptionGenerate')
  })})

  }
}
