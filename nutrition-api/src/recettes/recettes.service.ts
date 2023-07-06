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

  // async getRecettes() {
  //   const recettes = await prisma.recettes.findMany();
  //   return { data: recettes };
  // }

  // async countRecettes() {
  //   return prisma.recettes.count();
  // }


  async getRecetteByID(id) {
    console.log("id" , id)
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
      const recettes = await prisma.recettes.create({data: {...data}})
      resolve(recettes)
    })
  }

  async getRecetteForUserByID(userId) {

    console.log("userId" , userId)
    return new Promise(async (resolve, reject) => {
      const recettes = await prisma.recettes.findMany({
        where: {
          UserId: String(userId),
        },
      })
      resolve(recettes)
    })
  }

  async deleteRecette(id: number): Promise<any> {
    return prisma.recettes.delete({
      where: { id: id },
    });
  }

}
