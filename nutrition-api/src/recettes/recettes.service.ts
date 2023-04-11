import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class RecettesService {
  async getRecettes(){
    return new Promise(async (resolve, reject) => {
      const recettes = await prisma.recettes.findMany()
      resolve(recettes)
    })
  }

  async getRecetteByID(id) {
    return new Promise(async (resolve, reject) => {
      const recettes = await prisma.recettes.findUnique({
        where: {
          id: Number(id),
        },
      })
      resolve(recettes)

    })
  }

  async createRecette(data){
    return new Promise(async (resolve, reject) => {
      const recettes = await prisma.recettes.findMany()
      resolve(recettes)
    })
  }

  async getRecetteForUserByID(userId) {
    return new Promise(async (resolve, reject) => {
      const recettes = await prisma.recettes.findUnique({
        where: {
          id: Number(userId),
        },
      })
      resolve(recettes)
    })
  }

}
