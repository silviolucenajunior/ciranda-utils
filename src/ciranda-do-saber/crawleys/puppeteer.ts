import { Injectable } from '@nestjs/common';
import { ICirandaCrawler } from './icirandacrawler';
import { Atividade } from '../types/atividade';
import { CirandaCrawlerConfig } from './config';

const puppeteer = require('puppeteer');

@Injectable()
export class CirandaPuppeteerCrawley implements ICirandaCrawler {
  async getAtividade(turma: number, mes: string, dia: number) : Promise<Atividade> {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 300,
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox'
      ]
    });
    const page = await this.goToAtividadePage(browser, turma, mes, dia);
    page.screenshot({path: 'debug.png'});
    const atividade = await this.scrapAtividade(page);

    return new Atividade(atividade);
  }

  async goToAtividadePage(browser, turma, mes, dia) {
    const page = await browser.newPage();
    await page.goto(CirandaCrawlerConfig.POST_ATIVIDADES_URL);
    await page.evaluate( (turma) => {
      const turmaInputElement = document.querySelector('input[name=infantil]') as HTMLInputElement;
      turmaInputElement.value = 'infantil' + turma;
      console.log(turmaInputElement);
      console.log('-------');
    }, turma);
    await page.select("#mes", mes);
    await page.select("#dia", dia);
    await page.click('input[type=submit]');
    await Promise.all([
      page.waitForNavigation(),
      page.click('input[type=submit]')
    ]);

    return page;
  }

  async scrapAtividade(page) {
    // await Promise.all([
    //   page.waitForNavigation(),
    //   page.click('.cource-list-agile > .agile-course-main-2 > a')
    // ]);
    // await page.click('.cource-list-agile > .agile-course-main-2 > a');
    // console.log('[][][][][][][][][][]');
    // console.log(page.$('.cource-list-agile > .agile-course-main-2 > a'));
    console.log("0000");
    return "iii";
    
    //return await page.$eval('#contact > div.container > iframe', el => el.src);
  }
}