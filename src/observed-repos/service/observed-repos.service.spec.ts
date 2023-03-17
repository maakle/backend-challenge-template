import { TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma.service';
import { ObservedReposService } from './observed-repos.service';

describe('ObservedReposService', () => {
  let module: TestingModule;
  let service: ObservedReposService;
  let prisma: PrismaService;

  beforeEach(async () => {
    // TODO
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all observed repos', async () => {
    // TODO
  });
});
