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
      .then(() => console.info('[SEED] Succussfully create EXERCICES records'))
      .catch((e) =>
        console.error('[SEED] Failed to create EXERCICES records', e),
      );
  } catch (e) {
    console.log(e);
  }
}

insertTypeExercices();
