import { Test, TestingModule } from '@nestjs/testing';
import { CirandaDoSaberController } from './ciranda-do-saber.controller';

describe('CirandaDoSaberController', () => {
  let controller: CirandaDoSaberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CirandaDoSaberController],
    }).compile();

    controller = module.get<CirandaDoSaberController>(CirandaDoSaberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
