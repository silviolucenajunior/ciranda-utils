import { Controller, Get, Param } from '@nestjs/common';
import { CirandaPuppeteerCrawley } from './crawleys/puppeteer';
import { CirandaCheerioCrawler } from './crawleys/cheerio';

@Controller('ciranda-do-saber')
export class CirandaDoSaberController {
  constructor(private crawley : CirandaCheerioCrawler){}

  @Get('infantil/:turma/:mes/:dia')
  async getAtividade(@Param('turma') turma : number, @Param('mes') mes: string, @Param('dia') dia : number) {
    let atividade = await this.crawley.getAtividade(turma, mes, dia);

    return atividade;
  }
}
