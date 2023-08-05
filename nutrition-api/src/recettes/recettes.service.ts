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

  async updateRecette(data) {
    console.log("UPDATEEEE " , data)
    return new Promise(async (resolve, reject) => {
      const recettes = await prisma.recettes.update({
        where: {
          id: Number(data.id),
        },
        data
      })
      resolve(recettes)
    })
  }

  async createRecette(data){
    console.log("data========")
    console.log(data)

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
        orderBy: {
          id: "desc"
        }
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
