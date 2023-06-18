import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ImageDTO {
  @IsInt()
  id: number;

  @IsInt()
  product_id: number;

  @IsInt()
  position: number;

  @IsDateString()
  created_at: string;

  @IsDateString()
  updated_at: string;

  @IsInt()
  width: number;

  @IsInt()
  height: number;

  @IsString()
  src: string;

  @IsJSON()
  variant_ids: any[];
}

class OptionsDTO {
  @IsInt()
  id: number;

  @IsInt()
  product_id: number;

  @IsString()
  name: string;

  @IsInt()
  position: number;

  @IsArray()
  values: string[];
}

class VariantDTO {
  @IsString()
  barcode: string;

  @IsOptional()
  compare_at_price?: null;

  @IsDateString()
  created_at: string;

  @IsString()
  fulfillment_service: string;

  @IsNumber()
  grams: number;

  @IsNumber()
  weight: number;

  @IsString()
  weight_unit: string;

  @IsInt()
  id: number;

  @IsInt()
  inventory_item_id: number;

  @IsString()
  inventory_management: string;

  @IsString()
  inventory_policy: string;

  @IsInt()
  inventory_quantity: number;

  @IsString()
  option1: string;

  @IsInt()
  position: number;

  @IsNumber()
  price: number;

  @IsInt()
  product_id: number;

  @IsBoolean()
  requires_shipping: boolean;

  @IsString()
  sku: string;

  @IsBoolean()
  taxable: boolean;

  @IsString()
  title: string;

  @IsDateString()
  updated_at: string;
}

export class ProductDTO {
  @IsString()
  body_html: string;

  @IsDateString()
  created_at: string;

  @IsString()
  handle: string;

  @IsInt()
  id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDTO)
  images: ImageDTO[];

  @ValidateNested()
  @Type(() => OptionsDTO)
  options: OptionsDTO;

  @IsString()
  product_type: string;

  @IsDateString()
  published_at: string;

  @IsString()
  published_scope: string;

  @IsString()
  status: string;

  @IsString()
  tags: string;

  @IsString()
  template_suffix: string;

  @IsString()
  title: string;

  @IsDateString()
  updated_at: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VariantDTO)
  variants: VariantDTO[];

  @IsString()
  vendor: string;
}
