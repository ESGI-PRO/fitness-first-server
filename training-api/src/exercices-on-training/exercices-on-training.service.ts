import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ExercicesOnTrainingService {
  async create(data: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const exercicesOnTraining = await prisma.exercicesOnTraining.create({
          data: { ...data },
        });
        resolve({ status: true, data: exercicesOnTraining });
      } catch (error) {
        reject({ status: false, error });
        console.log('create exercicesOnTraining', error);
      }
    });
  }

  async findAll(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const exercicesOnTraining = await prisma.exercicesOnTraining.findMany();
        resolve({ status: true, data: exercicesOnTraining });
      } catch (error) {
        reject({ status: false, error });
        console.log('findAll exercicesOnTraining', error);
      }
    });
  }

  async findOne(id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const exercicesOnTraining = await prisma.exercicesOnTraining.findUnique(
          {
            where: { id },
          },
        );
        resolve({ status: true, data: exercicesOnTraining });
      } catch (error) {
        reject({ status: false, error });
        console.log('findOne Training', error);
      }
    });
  }

  async update(id: number, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const updateTraining = await prisma.exercicesOnTraining.update({
          where: { id },
          data: { ...data },
        });
        resolve({ status: true, data: updateTraining });
      } catch (error) {
        reject({ status: false, error });
        console.log('update Training', error);
      }
    });
  }

  async remove(id: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const deleteTraining = await prisma.exercicesOnTraining.delete({
          where: {
            id,
          },
        });
        resolve({ status: true, data: deleteTraining });
      } catch (error) {
        reject({ status: false, error });
        console.log('delete Training', error);
      }
    });
  }
}
