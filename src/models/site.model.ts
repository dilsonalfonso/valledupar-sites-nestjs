import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Site {
  @PrimaryColumn()
  site_id: number;
  name: string;
  description: string;
  image: string;
  state: boolean;
}
