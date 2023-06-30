"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const training = [
    {
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
];
module.exports = training;
//# sourceMappingURL=training.js.map