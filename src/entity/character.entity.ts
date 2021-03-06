import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Characters')
export class Character extends CommonEntity {
  @ApiProperty()
  @Column()
  characterImageUrl: string;

  @ApiProperty()
  @Column()
  characterGrade: number;
}
