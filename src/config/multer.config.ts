import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: process.env.MULTER_DEST ?? join(process.cwd(), 'uploads'),
    filename: (req, file, cb) => {
      const ext = extname(file.originalname);
      const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
      cb(null, filename);
    }
  })
};

export const imageFileFilter = (req, file, callback) => {
  // Allow only image files
  if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
    return callback(new Error('Only image files are allowed'), false);
  }
  callback(null, true);
};

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  constructor(private configService: ConfigService) { }

  createMulterOptions(): MulterModuleOptions {
    return {
      dest: this.configService.get<string>('MULTER_DEST') ?? join(process.cwd(), 'uploads'),
      ...multerConfig
    };
  }
} 