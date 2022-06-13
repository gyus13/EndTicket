import {
  Controller,
  Patch,
  Delete,
  Get,
  Post,
  Request,
  UseGuards, Body,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TicketService } from './ticket.service';
import {AddTicket} from "../common/decorators/auth.decorator";
import {AddTicketDto} from "./dto/add-ticket.dto";

//validation swagger에 올려주기
@Controller('ticket')
@ApiTags('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: '티켓조회' })
  @Get()
  async getTicket() {
    return await this.ticketService.findTicket();
  }

  @ApiOperation({ summary: '티켓등록' })
  @Post()
  createTicket(@AddTicket() addTicketDto: AddTicketDto) {
    return this.ticketService.createTicket(addTicketDto);
  }

  @ApiOperation({ summary: '티켓수정' })
  @Patch()
  async updateTicket() {
    return 'create Ticket';
  }

  @ApiOperation({ summary: '티켓삭제' })
  @Delete()
  async deleteTicket() {
    return 'create Ticket';
  }

  @ApiOperation({ summary: '추천 티켓조회' })
  @Get('/:ticketId')
  async getTicketByUserId() {
    return 'this is ticket return';
  }

  @ApiOperation({ summary: '주간목표 조회' })
  @Get('/goal')
  async getGoal() {
    return 'get Goal';
  }
}
