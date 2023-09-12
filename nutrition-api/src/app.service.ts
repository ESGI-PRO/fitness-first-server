import { faker } from '@faker-js/faker';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';
import categories from 'datas/categories';
import finals from 'datas/final';
import { firstValueFrom } from 'rxjs';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    const seeders = async () => {
      const trainers = await firstValueFrom(
        this.userServiceClient.send('user_search_by_params', {
          isTrainer: true,
        }),
      );

      const students = await firstValueFrom(
        this.userServiceClient.send('user_search_by_params', {
          isTrainer: false,
        }),
      );


      trainers.forEach(async (trainer) => {
      var randomUserID = Math.floor(Math.random() * trainer.traineeIds.length)

        for (let i = 0; i < 5; i++) {
          await prisma.recettes
            .create({
              data: {
                title: faker.lorem.text(),
                UserId: trainer.id,
                studentIds: [
                  trainer.traineeIds[
                    randomUserID
                  ],
                ],
                instructions: [
                  {
                    order: faker.number.int({ max: 5 }),
                    produits: [
                      {
                        quantite: faker.number.int({ max: 360 }),
                        ingredients: faker.number.int({ max: 191 }),
                      },
                    ],
                    description: faker.lorem.paragraph(),
                  },

                  {
                    order: faker.number.int({ max: 5 }),
                    produits: [
                      {
                        quantite: faker.number.int({ max: 360 }),
                        ingredients: faker.number.int({ max: 191 }),
                      },
                    ],
                    description: faker.lorem.paragraph(),
                  },

                  {
                    order: faker.number.int({ max: 5 }),
                    produits: [
                      {
                        quantite: faker.number.int({ max: 360 }),
                        ingredients: faker.number.int({ max: 191 }),
                      },
                    ],
                    description: faker.lorem.paragraph(),
                  },
                ],
              },
            })
            .then(() => {
              console.log(
                'recette cree par ' +
                  trainer.id +
                  ' pour le student ' +
                  trainer.traineeIds[
                    randomUserID
                  ],
              );
            });
        }
      });
    };

    // seeders();
  }
}
