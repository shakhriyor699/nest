import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'This action adds a new song';
  }
  @Get()
  findAll(): string {
    return 'This action returns all songs';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} song`;
  }
  @Put(':id')
  update(@Param('id') id: string): string {
    return `This action updates a #${id} song`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action removes a #${id} song`;
  }
}
