"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercices = require('../datas/exercices');
const TypeExercices = require('../datas/TypeExercices');
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
const prisma = new client_1.PrismaClient();
function insertTypeExercices() {
    console.log('Insert type Exercices', TypeExercices[0]);
    try {
        Promise.all(TypeExercices.map((n) => prisma.typeExercices.create({
            data: n,
        })))
            .then(() => {
            console.info('[SEED] Succussfully create typeExercices records'),
                insertExercices();
        })
            .catch((e) => console.error('[SEED] Failed to create typeExercices records', e));
    }
    catch (err) {
        console.log(err);
    }
}
function insertExercices() {
    console.log('Insert type Exercices', exercices[0]);
    try {
        Promise.all(exercices.map((n) => prisma.exercices.create({
            data: {
                name: n.name,
                type: n.type,
                equipment: n.equipment,
                difficulty: n.difficulty,
                instructions: n.instructions,
                TypeExercicesId: n.muscle,
            },
        })))
            .then(() => console.info('[SEED] Succussfully create EXERCICES records'))
            .catch((e) => console.error('[SEED] Failed to create EXERCICES records', e));
    }
    catch (e) {
        console.log(e);
    }
}
function insertTraining() {
    try {
        for (var i = 0; i < 160; i++) {
            prisma.training
                .create({
                data: {
                    name: faker_1.faker.lorem.text(),
                    description: faker_1.faker.lorem.paragraph(),
                    category: faker_1.faker.number.int({ max: 16 }),
                    userId: faker_1.faker.string.uuid(),
                    image: faker_1.faker.image.urlLoremFlickr(),
                    listExercices: [],
                    durationStart: faker_1.faker.date.birthdate(),
                    durationEnd: faker_1.faker.date.birthdate(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    trainingOnExercices: {
                        create: [
                            {
                                exerciceId: faker_1.faker.number.int({ max: 160 }),
                                series: faker_1.faker.number.int({ max: 10 }),
                                repetition: faker_1.faker.number.int({ max: 30 }),
                            },
                        ],
                    },
                },
            })
                .then(() => console.info('[SEED] Succussfully create Training records'))
                .catch((e) => console.error('[SEED] Failed to create Training  records', e));
        }
    }
    catch (e) {
        console.log(e);
    }
}
insertTypeExercices();
insertTraining();
//# sourceMappingURL=seed.js.map