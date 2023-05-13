import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CategoriesService {
  async get() {
    return new Promise(async (resolve, reject) => {
      const categories = await prisma.categories.findMany();
      resolve(categories);
    });
  }

  async getByID(id) {
    return new Promise(async (resolve, reject) => {
      const categories = await prisma.categories.findUnique({
        where: {
          id: Number(id),
        },
      });
      resolve(categories);
    });
  }
}