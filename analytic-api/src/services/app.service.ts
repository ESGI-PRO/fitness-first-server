import { Injectable } from '@nestjs/common';
import { AnalyticRequest, UpdateAnalyticRequest, CreateAnalyticDto } from 'src/request/analytic.request';
import { PrismaService } from './prisma.service';
import { Analytic } from '@prisma/client';
import { RpcException } from '@nestjs/microservices';
@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}

  isLive(): any {
    return {
      isLive: true,
      message: 'analytic api is live'
    };
  }

  async addAnalytic(data: CreateAnalyticDto): Promise<CreateAnalyticDto> {
    try {
      const addAnalytic = await this.prisma.analytic.create({
        data
      });
      return addAnalytic;

    } catch (error) {
      throw new RpcException("can't add this analytic from : " + error)
      //console.log("can't add this analytic from :" + data.appId , error)
    }
  }

  async getAllAnalytics(): Promise<Analytic[]> {
    try {
      const getAllAnalytics =  await this.prisma.analytic.findMany();
      return getAllAnalytics;
    } catch (error) {
      throw new RpcException("can't get analytics : " + error)
      //console.log("can't get analytics", error)
    }

  }


  async getAnalyticById(id: string): Promise<Analytic> {
    try {
      const analytic = await this.prisma.analytic.findUnique({
        where: {
          id
        }
      });
      return analytic;

      } catch (error) {
        throw new RpcException("Can't find analytic id : " + id + " - " + error)
          //console.log(" Can't find analytic id : " + id , error);
      }

  }
  
}
