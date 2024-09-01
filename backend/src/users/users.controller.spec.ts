import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const id = 1;
const displayName = "Super User";
const email = "email@test.com";
const user1 = {
  id: id,
  displayName: displayName,
  email: email,
}

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
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

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
