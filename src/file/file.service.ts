import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { File } from './entities/file.entity';
import fs from 'fs';
import { CreateFileDto } from './dto/create-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  async getImageDetails(imageId: string) {
    return await this.fileRepository
      .createQueryBuilder('file')
      .where('id = :id', { id: +imageId })
      .getOne();
  }

  async create(createImageDto: CreateFileDto) {
    return this.fileRepository.create({ ...createImageDto });
  }

  async updateImage(imageId: string, createImageDto: CreateFileDto) {
    await this.deleteImageLocally(imageId);
    const updateImage = await this.fileRepository.update(
      { id: +imageId },
      { ...createImageDto },
    );
    if (!updateImage)
      throw new HttpException('Error in updating Image', HttpStatus.FORBIDDEN);

    return createImageDto;
  }

  async deleteImageLocally(id) {
    const file: File = await this.fileRepository.findOne(id);
    if (fs.existsSync('./upload/images/' + file.filename)) {
      await fs.unlink('./upload/images/' + file.filename, () => {});
    }
  }

  ////----------------------- PDF FILES

  async updateFile(fileId: string, createFileDto: CreateFileDto) {
    await this.deleteFileLocally(fileId);
    const updateImage = await this.fileRepository.update(
      { id: +fileId },
      { ...createFileDto },
    );
    if (!updateImage)
      throw new HttpException('Error in updating File', HttpStatus.FORBIDDEN);

    return createFileDto;
  }

  async removeFile(id) {
    await this.deleteFileLocally(id, 'files');
    const res = await this.fileRepository.delete(id);
    return res;
  }

  async removeImage(id) {
    await this.deleteFileLocally(id, 'images');
    const res = await this.fileRepository.delete(id);
    return res;
  }

  async deleteFileLocally(id, type = 'files') {
    const file: File = await this.fileRepository.findOne(id);
    if (fs.existsSync('./upload/' + type + '/' + file.filename)) {
      await fs.unlink('./upload/' + type + '/' + file.filename, () => {});
    }
  }
}
