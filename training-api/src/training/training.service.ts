import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {
  TrainingRequest,
  UpdateTrainingRequest,
} from './request/training.request';

const prisma = new PrismaClient();

@Injectable()
export class TrainingService {
  public async createTraining(data: any) {
    try {
      const training = await prisma.training.create({ data: { ...data } });
      return training;
    } catch (error) {
      console.log('create Trainings', error);
    }
  }

  public async findAllTrainings(): Promise<Array<any>> {
    try {
      const trainings = await prisma.training.findMany();
      return trainings;
    } catch (error) {
      console.log('findAll Trainings', error);
    }
  }

  public async findOne(id: number): Promise<any> {
    try {
      const training = await prisma.training.findUnique({ where: { id } });
      return training;
    } catch (error) {
      console.log('findOne Training', error);
    }
  }

  public async update(id: number, data: any): Promise<any> {
    try {
      const updateTraining = await prisma.training.update({
        where: { id },
        data: { ...data },
      });
      return updateTraining;
    } catch (error) {
      console.log('update Training', error);
    }
  }

  public async remove(id: number) {
    try {
      const deleteTraining = await prisma.training.delete({
        where: {
          id,
        },
      });
      return deleteTraining;
    } catch (error) {
      console.log('delete Training', error);
    }
  }
}
