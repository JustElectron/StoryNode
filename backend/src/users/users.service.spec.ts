import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const id = 1;
const displayName = "Super User";
const email = "email@test.com";
const user1 = {
  id: id,
  displayName: displayName,
  email: email,
}

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            create: jest.fn().mockResolvedValue(user1),
            update: jest.fn().mockResolvedValue(user1),
            findOne: jest.fn().mockResolvedValue(user1),
            findAll: jest.fn().mockResolvedValue([user1]),
            remove: jest.fn().mockResolvedValue(null),
          }
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
