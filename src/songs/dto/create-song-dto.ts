import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator"

export class CreateSongDTO{
  @IsString()
  @IsNotEmpty()
  readonly title: string
  @IsNotEmpty()
  @IsArray()
  @IsString()
  readonly artists: string[]

  @IsDateString()
  @IsNotEmpty()
  readonly releasedDate: Date

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date
}