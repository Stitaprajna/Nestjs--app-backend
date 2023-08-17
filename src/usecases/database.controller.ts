import { Controller, Get, Header, Post,StreamableFile, UploadedFile, UseInterceptors} from "@nestjs/common";
import { DatabaseService } from "../domain/database.service";
import { createReadStream } from 'fs';
import { join } from 'path';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";




@Controller('auth')
export class DatabaseController {
constructor(private databaseservice: DatabaseService){}
  @Get('Load-PDF-File')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename="src/example.pdf"')
  getStaticFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'src/example.pdf'));
    console.log('read pdf file');
    return new StreamableFile(file);
  }  

  

  @Post('Save-PDF-File')
  @UseInterceptors(FileInterceptor('pdf',{
    storage: diskStorage({
      destination: './src',
      filename:function (req, file, cb) {
        cb(null, 'example.pdf')
        },
      }),
    }),
  )
    UploadedFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    console.log('sucess');
    return file;
  }
}


