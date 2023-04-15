import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExercicesOnTrainingService {

  constructor(private prisma: PrismaService) {}

  public async create(data: any) {
    try {
      const exercicesOnTraining = await this.prisma.exercicesOnTraining.create({ data: { ...data } });
      return exercicesOnTraining;
    } catch (error) {
      console.log('create exercicesOnTraining', error);
    }
  }

  public async findAll(): Promise<Array<any>> {
    try {
      const exercicesOnTraining = await this.prisma.exercicesOnTraining.findMany();
      return exercicesOnTraining;
    } catch (error) {
      console.log('findAll exercicesOnTraining', error);
    }
  }

  public async findOne(id: number): Promise<any> {
    try {
      const exercicesOnTraining = await this.prisma.exercicesOnTraining.findUnique({ where: { id } });
      return exercicesOnTraining;
    } catch (error) {
      console.log('findOne Training', error);
    }
  }

  public async update(id: number, data: any): Promise<any> {
    try {
      const updateTraining = await this.prisma.exercicesOnTraining.update({
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
      const deleteTraining = await this.prisma.exercicesOnTraining.delete({
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
