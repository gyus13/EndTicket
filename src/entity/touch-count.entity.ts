import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './common.entity';
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './users.entity';

@Entity('TouchCount')
export class TouchCount extends CommonEntity {
  @ApiProperty()
  @Column()
  ticketId: number;
}
