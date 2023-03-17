import { Injectable } from '@nestjs/common';
import { ObservedRepo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreateObservedRepoDto } from '../dto/create-observed-repo.dto';
import {
  GetAllObservedReposDto,
  GetAllObservedReposResponse,
} from '../dto/get-all-obersved-repos.dto';
import { UpdateObservedRepoDto } from '../dto/update-observed-repo.dto';

@Injectable()
export class ObservedReposService {
  constructor(private prisma: PrismaService) {}

  async getAllObservedRepos(
    query: GetAllObservedReposDto,
  ): Promise<GetAllObservedReposResponse> {
    // Implement here
    return null;
  }

  async getObservedRepo(id: string): Promise<ObservedRepo | null> {
    // Implement here
    return null;
  }

  async createObservedRepo(body: CreateObservedRepoDto): Promise<ObservedRepo> {
    // Implement here
    return null;
  }

  async updateObservedRepo(
    id: string,
    body: UpdateObservedRepoDto,
  ): Promise<ObservedRepo> {
    // Implement here
    return null;
  }

  async deleteObservedRepo(id: string): Promise<ObservedRepo> {
    // Implement here
    return null;
  }
}
