import { IsBoolean, IsString, IsUrl } from 'class-validator';

export class CreateServiceApiDto {
  @IsString()
  name: string;

  @IsUrl()
  baseUri: string;

  @IsBoolean()
  isActive: boolean;
}
