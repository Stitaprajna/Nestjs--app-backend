import { Controller, Get, Header, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import { DatabaseService } from "../domain/database.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";



@Controller('auth')
export class DatabaseController {
constructor(private services: DatabaseService){}

//GET RESPONSE
  @Get('Load-PDF-File')
  @Header('Content-Type', 'application/pdf')
  getfile(){
    return this.services.getStaticFile();
  }
  

//POST REQUEST
  @Post('Save-PDF-File')
  @UseInterceptors(FileInterceptor('pdf',{storage: diskStorage({
      destination: './src',
      filename:function (req, file, cb) {
        cb(null, 'example.pdf')
        },
      }),
    }))
  UploadedFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    console.log('sucess');
    return file;}
}


