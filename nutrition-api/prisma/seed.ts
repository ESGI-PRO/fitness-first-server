const finals = require('../datas/final');
const categories = require('../datas/categories');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// function insertCategories() {
//   Promise.all(
//     categories.map((n) =>
//       prisma.categories.create({
//         data: n,
//       }),
//     ),
//   )
//     .then(() => console.info('[SEED] Succussfully create categories records'))
//     .catch((e) => console.error('[SEED] Failed to create categories records', e));
// }

function insertIngredients() {
  Promise.all(
    finals.map((n) =>
      prisma.ingredients.create({
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
      }),
    ),
  )
    .then(() => console.info('[SEED] Succussfully create ingredients records'))
    .catch((e) =>
      console.error('[SEED] Failed to create ingredients records', e),
    );
}
// insertCategories()
insertIngredients();
