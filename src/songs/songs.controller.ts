import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) { }
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }
  @Get()
  findAll(): string[] {
    try {
      return this.songsService.findAll()
    } catch (error) {
      throw new HttpException(error.message, 500)
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} song`;
  }
  @Put(':id')
  update(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): string {
    return `This action updates a #${id} song`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action removes a #${id} song`;
  }
}
