const ingredients = require('../datas/final');
const categories = require('../datas/categories');
const recettes = require('../datas/recettes');
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// function insertCategories() {
//   try {
//     categories.map((n) =>
//     prisma.categories.create({
//       data: n,
//     }))
//     .then(() => {
//       console.info('[SEED] Succussfully create categories records');
//       insertIngredients();
//     })
//     .catch((e) =>
//       console.error('[SEED] Failed to create categories records', e),
//     );
//   } catch (error) {
//     console.log(error)
//   }

// }

async function insertCategories() {
  try {
    for(let categorie of categories) {
      await prisma.categories.create({
        data: categorie
      })
    }
  } catch (error) {
    console.log(error)
  }
}

// function insertIngredients() {
//   Promise.all(
//     finals.map((n) =>
//       prisma.ingredients.create({
//         data: {
//           name: n.name,
//           calories: n.calories,
//           CategorieId: n.category,
//           grammes: n.grammes,
//           fat_total_g: n.fat_total_g,
//           fat_saturated_g: n.fat_saturated_g,
//           protein_g: n.protein_g,
//           sodium_mg: n.sodium_mg,
//           potassium_mg: n.potassium_mg,
//           cholesterol_mg: n.cholesterol_mg,
//           carbohydrates_total_g: n.carbohydrates_total_g,
//           fiber_g: n.fiber_g,
//           sugar_g: n.sugar_g,
//         },
//       }),
//     ),
//   )
//     .then(() => {
//       console.info('[SEED] Succussfully create ingredients records');
//       insertRecettes();
//     })
//     .catch((e) =>
//       console.error('[SEED] Failed to create ingredients records', e),
//     );
// }

async function insertIngredients() {
  try {
    for(let ingredient of ingredients) {
      await prisma.ingredients.create({
        data: {
           name: ingredient.name,
           calories: ingredient.calories,
           CategorieId: ingredient.category,
           grammes: ingredient.grammes,
           fat_total_g: ingredient.fat_total_g,
           fat_saturated_g: ingredient.fat_saturated_g,
           protein_g: ingredient.protein_g,
           sodium_mg: ingredient.sodium_mg,
           potassium_mg: ingredient.potassium_mg,
           cholesterol_mg: ingredient.cholesterol_mg,
           carbohydrates_total_g: ingredient.carbohydrates_total_g,
           fiber_g: ingredient.fiber_g,
           sugar_g: ingredient.sugar_g,
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}

// function insertRecettes() {
//   try {
//     for (var i = 0; i < 170 ; i++) {
      
//       prisma.recettes
//         .create({
//           data: {
//             title: faker.lorem.text(),
//             UserId: faker.number.int({ max: 160 }),
//             instructions: [
//               {
//                 order: faker.number.int({ max: 160 }),
//                 produits: [
//                   {
//                     quantite: faker.number.int({ max: 360 }),
//                     ingredients: faker.number.int({ max: 191 }),
//                   },
//                 ],
//                 description: faker.lorem.paragraph(),
//               },
//             ],
//           },
//         })
//         .then(() => console.info('[SEED] Succussfully create RECETTES records'))
//         .catch((e) =>
//           console.error('[SEED] Failed to create ingredients records', e),
//         );
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }


async function insertRecettes() {
  try {
    for(let recette of recettes) {
      await prisma.recettes.create({
        data: {
          title: faker.lorem.text(),
          UserId: faker.number.int({ max: 160 }),
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
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}


 insertCategories()
 .then(() => {
  insertIngredients()
  insertRecettes()
 })
 .catch(e => {
  console.log(e);
  process.exit(1)
 })

//  insertIngredients().catch(e => {
//   console.log(e);
//   process.exit(1)
//  })
// insertRecettes();
