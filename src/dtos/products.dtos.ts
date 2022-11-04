/* eslint-disable prettier/prettier */
// products.dto.ts
import { IsString ,IsNotEmpty,IsNumber,IsUrl} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsUrl()
  readonly image: string;


}
export class UpdateProductDto extends PartialType((CreateProductDTO){}




