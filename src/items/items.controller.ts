import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'All items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, description: ${createItemDto.description} was created`;
  }

  @Delete(':id')
  deleteItem(@Param('id') id): string {
    return `Delete item ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name:${updateItemDto.name}`;
  }
}
