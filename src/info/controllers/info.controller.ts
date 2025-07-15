import { Controller, Get } from '@nestjs/common';
import { InfoService } from '../services/info.services';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  getInfo() {
    return this.infoService.getInfo();
  }
}
