import { Test, TestingModule } from '@nestjs/testing';
import { StorynodeService } from './storynode.service';

describe('StorynodeService', () => {
  let service: StorynodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorynodeService],
    }).compile();

    service = module.get<StorynodeService>(StorynodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
