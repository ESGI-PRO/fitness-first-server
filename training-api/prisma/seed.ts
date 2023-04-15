const exercices = require('../datas/exercices');
const TypeExercices = require('../datas/TypeExercices');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function insertTypeExercices() {
  console.log('Insert type Exercices', TypeExercices[0]);
  try {
    Promise.all(
      TypeExercices.map((n) =>
        prisma.typeExercices.create({
          data: n,
        }),
      ),
    )
      .then(() => {
        console.info('[SEED] Succussfully create typeExercices records'),
          insertExercices();
      })
      .catch((e) =>
        console.error('[SEED] Failed to create typeExercices records', e),
      );
  } catch (err) {
    console.log(err);
  }
}

function insertExercices() {
  console.log('Insert type Exercices', exercices[0]);

  try {
    Promise.all(
      exercices.map((n) =>
        prisma.exercices.create({
          data: {
            name: n.name,
            type: n.type,
            equipment: n.equipment,
            difficulty: n.difficulty,
            instructions: n.instructions,
            TypeExercicesId: n.muscle,
          },
        }),
      ),
    )
      .then(() => {
        console.info('[SEED] Succussfully create EXERCICES records');
        // insertTraining()
      })
      .catch((e) =>
        console.error('[SEED] Failed to create EXERCICES records', e),
      );
  } catch (e) {
    console.log(e);
  }
}

function insertTraining() {
  try {
    prisma.training
      .create({
        data: {
          name: 'Programme du matin',
          description:
            "voici votre programme d'entrenaiment, vous devez le faire tout les matins fait pas chier okay ?",
          category: 3,
          userId: 'FEHGFDFGNFDSG,',
          image:
            'https://randomwordgenerator.com/img/picture-generator/53e1d04a4c5aa414f1dc8460962e33791c3ad6e04e5074417c2b79d59448cc_640.jpg',
          listExercices: [],
          durationStart: new Date(),
          durationEnd: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
          trainingOnExercices: {
            create: [
              {
                exerciceId: 67,
                series: 5,
                repetition: 10,
              },
            ],
          },
        },
      })
      .then(() => console.info('[SEED] Succussfully create Training records'))
      .catch((e) =>
        console.error('[SEED] Failed to create Training  records', e),
      );
  } catch (e) {
    console.log(e);
  }
}

// insertTypeExercices();
insertTraining();

