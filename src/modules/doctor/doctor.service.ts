import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create(createDoctorDto);
    return this.doctorRepository.save(doctor);
  }

  findAll(): Promise<Doctor[]> {
    const allDoctor = this.doctorRepository.find();
    return allDoctor;
  }

  findOne(id: number): Promise<Doctor> {
    const doctor = this.doctorRepository.findOneById(id);
    return doctor;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor ${updateDoctorDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
