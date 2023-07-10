import { Controller } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesApi: CategoriesService) {}

  @MessagePattern('get_categories')
  public async get(): Promise<any> {
    return {
        message: 'success get categories',
        data: {
          nutrition: await this.categoriesApi.get(),
        },
        errors: null,
      };
  }

  @MessagePattern('get_categorie_by_id')
  public async getById(
    params: {
      id: number;
    }
  ): Promise<any> {
    return {
        message: 'success get categories',
        data: {
          nutrition: await this.categoriesApi.getByID(params.id),
        },
        errors: null,
      };
  }
}
