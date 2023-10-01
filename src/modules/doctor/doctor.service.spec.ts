import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { DoctorService } from './doctor.service';
import { Doctor } from './entities/doctor.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('DoctorService', () => {
  let service: DoctorService;
  let repository: Repository<Doctor>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DoctorService,
        {
          provide: getRepositoryToken(Doctor),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<DoctorService>(DoctorService);
    repository = module.get<Repository<Doctor>>(getRepositoryToken(Doctor));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('create dto doctor', async () => {
    const createDoctorDto = new Doctor();
    createDoctorDto.email = 'dddsfsf123@gmail.com';
    createDoctorDto.firstName = 'Fred';
    createDoctorDto.lastName = 'Don';
    jest.spyOn(repository, 'create').mockReturnValue(createDoctorDto);
    jest.spyOn(repository, 'save').mockResolvedValue(createDoctorDto);
    const result = await service.create(createDoctorDto);
    expect(result).toEqual(createDoctorDto);
    expect(repository.create).toHaveBeenCalledWith(createDoctorDto);
    expect(repository.save).toHaveBeenCalledWith(createDoctorDto);
  });
});
