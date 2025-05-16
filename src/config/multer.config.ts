import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: this.configService.get<string>('MULTER_DEST') ?? join(process.cwd(), 'uploads'),
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
          cb(null, filename);
        }
      })
    };
  }
} 