import { ApiProperty } from '@nestjs/swagger';

export class createRecetteDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  UserId: string;
  @ApiProperty()
  instructions: object;
}
