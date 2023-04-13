const finals = require('../datas/final');
const categories = require('../datas/categories');
const recettes = require('../datas/recettes');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function insertCategories() {
  Promise.all(
    categories.map((n) =>
      prisma.categories.create({
        data: n,
      }),
    ),
  )
    .then(() => console.info('[SEED] Succussfully create categories records'))
    .catch((e) =>
      console.error('[SEED] Failed to create categories records', e),
    );
}

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
    .then(() => {
      console.info('[SEED] Succussfully create ingredients records')
      insertIngredients();

    })
    .catch((e) =>
      console.error('[SEED] Failed to create ingredients records', e),
    );
}

function insertRecettes() {
  Promise.all(
    recettes.map((n) =>
      prisma.recettes.create({
        data: {
          title: "Ma premiere recette de nutrition pour mes eleves !",
          UserId: 4,
          instructions: {  
            "instruction1" : {
              "order" : 1,
              "produits" : [
                {
                  "quantite" : 150,
                  "ingredients" : 401
                }
              ],
              "description" : "Mettez la farine dans un saladier, ajoutez le sucre et les œufs. "
            },
            "instruction2" : {
              "order" : 2,
              "produits" : [
                {
                  "quantite" : 150,
                  "ingredients" : 403 
                }
              ],
              "description" : "Récupérez les grains de la gousse de vanille avec la pointe d’un couteau en raclant l’intérieur de la gousse. "
            },
            "instruction3" : {
              "order" : 4,
              "produits" : [
                {
                  "quantite" : 150,
                  "ingredients" : 407
                }
              ],
              "description" : "À l’aide d’un fouet, battez le tout en y ajoutant petit à petit le lait, jusqu’à obtention d’une pâte lisse et fluide. Si votre pâte est encore trop épaisse, ajoutez-y un peu d’eau ou de bière pour la fluidifier sans l’alourdir.  "
            },
            "instruction4" : {
              "order" : 4,
              "produits" : [
                {
                  "quantite" : 150,
                  "ingredients" : 408
                }
              ],
              "description" : "Mettez la farine dans un saladier, ajoutez le sucre et les œufs. "
              
            }
          }
        },
      }),
    ),
  )
    .then(() => console.info('[SEED] Succussfully create RECETTES records'))
    .catch((e) =>
      console.error('[SEED] Failed to create ingredients records', e),
    );
}
insertCategories()
insertRecettes()