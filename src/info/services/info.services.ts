import { Injectable } from '@nestjs/common';

@Injectable()
export class InfoService {
  getInfo() {
    return {
      title: 'Demo Fullstack',
      version: '1.0.0',
      author: 'Javier',
    };
  }
}
