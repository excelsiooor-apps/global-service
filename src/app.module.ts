import { Module } from '@nestjs/common';
import { DoctorModule } from './modules/doctor/doctor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Doctor } from './modules/doctor/entities/doctor.entity';
import * as dotenv from 'dotenv';
dotenv.config();

const DBModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: join(process.env.DATABASE_PATH),
  entities: [Doctor],
  synchronize: true,
});
@Module({
  imports: [DBModule, DoctorModule],
})
export class AppModule {}
