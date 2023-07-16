import { faker } from '@faker-js/faker';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';
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

  ModuleInit() {
    const seeders = async () => {
      const trainers = await firstValueFrom(
        this.userServiceClient.send('user_search_by_params', {
          isTrainer: true,
        }),
      );

      trainers.forEach(async (trainer) => {
        var recettes;
        for (let i = 0; i < 5; i++) {
          const recette = await prisma.recettes.create({
            data: {
              title: faker.lorem.text(),
              UserId: trainer.id,
              // studentsIds: [],
              instructions: [
                {
                  order: faker.number.int({ max: 160 }),
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
          });
          recettes = [...recettes, recette];
        }

      //   const trainees = trainer.traineeIds;
      //     for (let j = 0; j < trainees.length; j++) {
      //       const updated = prisma.recettes.update({}, {
      //         data: {

      //         }
      //       })
      //     }
      });
    };

    seeders();
  }
}
