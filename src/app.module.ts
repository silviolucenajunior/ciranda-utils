import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CirandaDoSaberController } from './ciranda-do-saber/ciranda-do-saber.controller';
import { CirandaPuppeteerCrawley } from './ciranda-do-saber/crawleys/puppeteer';
import { CirandaCheerioCrawler } from './ciranda-do-saber/crawleys/cheerio';

@Module({
  imports: [],
  controllers: [AppController, CirandaDoSaberController],
  providers: [AppService, CirandaPuppeteerCrawley, CirandaCheerioCrawler]
})
export class AppModule {}
