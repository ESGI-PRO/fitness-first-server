const finals = require('../datas/final');
const ingredients = require('../datas/final');
const categories = require('../datas/categories');
const recettes = require('../datas/recettes');
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

function insertCategories() {
  categories.forEach((n) =>
    prisma.categories
      .create({
        data: n,
      })
      .then(() => {
        console.info('[SEED] Succussfully create categories records');
      })
      .catch((e) =>
        console.error('[SEED] Failed to create categories records', e),
      ),
  );
}

function insertIngredients() {
  finals.forEach((n) =>
    prisma.ingredients
      .create({
        data: {
          name: n.name,
          calories: n.calories,
          CategorieId: n.category,
          grammes: n.grammes,
          fat_total_g: n.fat_total_g,
          fat_saturated_g: n.fat_saturated_g,
          protein_g: n.protein_g,
          sodium_mg: n.sodium_mg,
          potassium_mg: n.potassium_mg,
          cholesterol_mg: n.cholesterol_mg,
          carbohydrates_total_g: n.carbohydrates_total_g,
          fiber_g: n.fiber_g,
          sugar_g: n.sugar_g,
        },
      })
      .then(() => {
        console.info('[SEED] Succussfully create ingredients records');
      })
      .catch((e) =>
        console.error('[SEED] Failed to create ingredients records', e),
      ),
  );
}

function insertRecettes() {
  try {
    for (var i = 0; i < 170; i++) {
      prisma.recettes
        .create({
          data: {
            title: faker.lorem.text(),
            UserId: faker.string.uuid(),
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
        })
        .then(() => console.info('[SEED] Succussfully create RECETTES records'))
        .catch((e) =>
          console.error('[SEED] Failed to create ingredients records', e),
        );
    }
  } catch (error) {
    console.log(error)
  }
}
insertCategories();
insertIngredients();
insertRecettes();
