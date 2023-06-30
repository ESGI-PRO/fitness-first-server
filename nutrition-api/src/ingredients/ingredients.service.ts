import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class IngredientsService {
  async getIngredients() {
    return new Promise(async (resolve, reject) => {
      const ingredients = await prisma.ingredients.findMany({
        include: {
          category: true
        }
      });
      resolve(ingredients);
    });
  }

  async getIngredientByID(id) {
    return new Promise(async (resolve, reject) => {
      const ingredients = await prisma.ingredients.findUnique({
        where: {
          id: Number(id),
        },
      });
      resolve(ingredients);
    });
  }

  async createIngredient(data) {
    return new Promise(async (resolve, reject) => {
      const ingredients = await prisma.ingredients.findMany();
      resolve(ingredients);
    });
  }

  async getIngredientForUserByID(userId) {
    return new Promise(async (resolve, reject) => {
      const ingredients = await prisma.ingredients.findUnique({
        where: {
          id: Number(userId),
        },
      });
      resolve(ingredients);
    });
  }

  async updateIngredient(id: number, data: any): Promise<any> {
    return prisma.ingredients.update({
      where: { id: id },
      data: { ...data },
    });
  }

  async deleteIngredient(id: number): Promise<any> {
    return prisma.ingredients.delete({
      where: { id: id },
    });
  }
}
