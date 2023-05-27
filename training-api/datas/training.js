import { faker } from '@faker-js/faker';

const training = [
  {
    name: faker.lorem.text() ,
    description: faker.lorem.paragraph() ,
    category: faker.number.int({ max: 16 }) , // 42
    userId: faker.string.uuid(),
    image: faker.image.urlLoremFlickr(),
    listExercices: [],
    durationStart: faker.date.birthdate(),
    durationEnd: faker.date.birthdate(),
    createdAt: new Date(),
    updatedAt: new Date(),
    trainingOnExercices: {
      create: [
        {
          exerciceId: faker.number.int({ max: 160 }),
          series: faker.number.int({ max: 10}),
          repetition: faker.number.int({ max: 30 }),
        },
      ],
    },
  },
];
module.exports = training;
