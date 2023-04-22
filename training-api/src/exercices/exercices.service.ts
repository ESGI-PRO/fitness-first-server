import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class ExercicesService {
  async findAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.exercices.findMany({});
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }

  async findOne(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.exercices.findUnique({
          where: { id: Number(id) },
          include: {
            muscle: true,
          },
        });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }

  async create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.exercices.create({ data });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }

  async update(id, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.exercices.update({
          where: { id: Number(id) },
          data,
        });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }

  async delete(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.exercices.delete({
          where: { id: Number(id) },
        });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }

  async getCategorieExercices(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.typeExercices.findMany({
          where: {},
        });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }
}
