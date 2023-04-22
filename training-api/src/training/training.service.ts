import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  TrainingRequest,
  UpdateTrainingRequest,
} from './request/training.request';

@Injectable()
export class TrainingService {
  constructor(private prisma: PrismaService) {}

  public async createTraining(data: any) {
    try {
      const training = await this.prisma.training.create({ data: { ...data } });
      return training;
    } catch (error) {
      console.log('create Trainings', error);
    }
  }

  public async findAllTrainings(): Promise<Array<any>> {
    try {
      const trainings = await this.prisma.training.findMany();
      return trainings;
    } catch (error) {
      console.log('findAll Trainings', error);
    }
  }

  public async findOne(id: number): Promise<any> {
    try {
      const training = await this.prisma.training.findUnique({ where: { id: Number(id) } });
      return training;
    } catch (error) {
      console.log('findOne Training', error);
    }
  }

  public async update(id: number, data: any): Promise<any> {
    try {
      const updateTraining = await this.prisma.training.update({
        where: { id: Number(id) },
        data: { ...data },
      });
      return updateTraining;
    } catch (error) {
      console.log('update Training', error);
    }
  }

  public async remove(id: number) {
    try {
      const deleteTraining = await this.prisma.training.delete({
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
