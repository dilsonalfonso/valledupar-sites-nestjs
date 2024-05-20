import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from 'src/models/site.model';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site) private siteRepository: Repository<Site>,
  ) {}

  async findAll(): Promise<Site[]> {
    const options: FindManyOptions<Site> = {
      where: { status: true },
    };
    return await this.siteRepository.find(options);
  }
  async findById(site_id: number): Promise<Site> {
    return await this.siteRepository.findOneBy({
      site_id: site_id,
      status: true,
    });
  }
  async create(site: Site): Promise<Site> {
    return await this.siteRepository.save(site);
  }
  async update(site: Site): Promise<Site> {
    return await this.siteRepository.save(site);
  }
  async delete(site_id: number): Promise<string> {
    await this.siteRepository.delete(site_id);
    return 'OK';
  }
}
