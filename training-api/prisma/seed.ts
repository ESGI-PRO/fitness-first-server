const exercices = require('../datas/exercices');
const TypeExercices = require('../datas/TypeExercices');
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

function insertTypeExercices() {
  console.log('Insert type Exercices', TypeExercices[0]);
  try {
    TypeExercices.forEach((n) => {
      prisma.typeExercices.create({
        data: n,
      })
        .then(() => {
          console.info('[SEED] Succussfully create typeExercices records')
        })
        .catch((e) =>
          console.error('[SEED] Failed to create typeExercices records', e),
        );
    })
  } catch (err) {
    console.log(err);
  }
}

function insertExercices() {
  console.log('Insert type Exercices', exercices[0]);

  try {
    exercices.forEach((n) =>
      prisma.exercices.create({
        data: {
          name: n.name,
          type: n.type,
          equipment: n.equipment,
          difficulty: n.difficulty,
          instructions: n.instructions,
          TypeExercicesId: n.muscle,
        },
      })
      .then(() => console.info('[SEED] Succussfully create EXERCICES records'))
      .catch((e) =>
        console.error('[SEED] Failed to create EXERCICES records', e),
      )
    )
      
  } catch (e) {
    console.log(e);
  }
}

function insertTraining() {
  try {
    for (var i = 164; i < 300; i++) {
      var exos = []

      for (var j = 0; j < 6; j++) {
        exos.push({
          exerciceId: faker.number.int({ max: 160 }),
          series: faker.number.int({ max: 10 }),
          repetition: faker.number.int({ max: 30 }),
        })
      }

      prisma.training
        .create({
          data: {
            name: "Programme n° " + i,
            description: faker.lorem.paragraph(),
            category: faker.number.int({ max: 16 }), // 42
            userId: faker.string.uuid(),
            image: faker.image.urlLoremFlickr(),
            listExercices: [],
            durationStart: faker.date.birthdate(),
            durationEnd: faker.date.birthdate(),
            createdAt: new Date(),
            updatedAt: new Date(),
            trainingOnExercices: {
              create: exos,
            },
          },
        })
        .then(() => { exos.length = 0; console.info('[SEED] Succussfully create Training records') })
        .catch((e) =>
          console.error('[SEED] Failed to create Training  records', e),
        );
    }
  } catch (e) {
    console.log(e);
  }
}

// insertTypeExercices();
insertExercices();
insertTraining();

