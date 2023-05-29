import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class ExercicesService {
  async findAll() {
    console.log('get all exercices')
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.exercices.findMany({
          include: {
            muscle: true,
            _count: true
          }
        });
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
          where: { id : Number(id) },
          include: {
            muscle: true,
            _count: true
          }
        });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }

  async findAllByCategory(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.exercices.findMany({
          where: { TypeExercicesId : Number(id) },
          include: {
            muscle: true,
            _count: true
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
          where: { id : Number(id) },
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
          where: { id : Number(id) },
        });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }

  async getCategoriesExercices() {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.typeExercices.findMany();
        resolve({ status: true, data: exercices });
      } catch (err) {
        console.error(err);
        reject({ status: false, error: err });
      }
    });
  }

  async getCategorieExercicesByID(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercices = await prisma.typeExercices.findMany({
          where: { id : Number(id)},
        });
        resolve({ status: true, data: exercices });
      } catch (err) {
        reject({ status: false, error: err });
      }
    });
  }
}
