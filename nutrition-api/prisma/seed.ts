
const ingredients = require('../datas/final');
const categories = require('../datas/categories');
const recettes = require('../datas/recettes');
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';


const prisma = new PrismaClient();

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


async function insertRecettes() {
  try {
    for(let recette of recettes) {
      await prisma.recettes.create({
        data: {
          title: recette.title,
          UserId: recette.UserId,
          instructions: [
            {
              order: recette.order,
              produits: [
                {
                  quantite: recette.quantite,
                  ingredients: recette.ingredients,
                },
              ],
              description: recette.description,
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
    insertIngredients().then(() => {
      insertRecettes().finally(() => {
        prisma.$disconnect(); // Close the Prisma client connection after seeding
      });
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
