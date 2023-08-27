import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { TokenGuard } from '../authentication/http/token.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, pdfFileFilter } from '../utils/images.utils';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload-file')
  @UseGuards(TokenGuard)
  // @UseGuards(TeacherGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/files/',
        filename: editFileName,
      }),
      fileFilter: pdfFileFilter,
    }),
  )
  uploadFile(@UploadedFile() file, @Req() req) {
    const createFileDto = {
      url: `${file.filename}`,
      title: `${file.filename}`,
      filename: file.filename,
    };

    return this.fileService.create({
      ...createFileDto,
      createdBy: req.user.id,
      updatedBy: req.user.id,
    } as any);
  }

  @Post('upload-image')
  @UseGuards(TokenGuard)
  // @UseGuards(TeacherGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/images/',
        filename: editFileName,
      }),
      fileFilter: pdfFileFilter,
    }),
  )
  uploadImages(@UploadedFile() file, @Req() req) {
    const createFileDto = {
      url: `${file.filename}`,
      title: `${file.filename}`,
      filename: file.filename,
    };

    return this.fileService.create({
      ...createFileDto,
      createdBy: req.user.id,
      updatedBy: req.user.id,
    } as any);
  }

  @Get('download-file/:filename')
  @UseGuards(TokenGuard)
  downloadFile(@Param('filename') filename: string, @Req() req, @Res() res) {
    try {
      // const filePath = path.join(__dirname, './upload/files', filename);
      res.set({
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Type': 'application/octet-stream',
      });

      return res.sendFile(filename, { root: './upload/files' });
    } catch (error) {
      console.error('Error sending file:', error);
      res.status(500).send('Error sending file');
    }
  }

  @Get('get-file/:filepath')
  seeUploadedFile(@Param('filepath') file, @Res() res) {
    return res.sendFile(file, { root: './upload/files' });
  }

  @Get('get-image/:filepath')
  seeUploadedImage(@Param('filepath') file, @Res() res) {
    return res.sendFile(file, { root: './upload/images' });
  }

  @Delete('remove-file/:id')
  @UseGuards(TokenGuard)
  removeFile(@Param('id') id: string) {
    return this.fileService.removeFile(id);
  }

  @Delete('remove-image/:id')
  @UseGuards(TokenGuard)
  removeImage(@Param('id') id: string) {
    return this.fileService.removeImage(id);
  }
}
