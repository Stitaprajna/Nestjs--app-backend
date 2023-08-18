import { Controller, Get, Header, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import { service } from "Server/src/domain/pdf.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";



@Controller('auth')
export class controller {
constructor(private services: service){}

//GET RESPONSE
  @Get('Load-PDF-File')
  @Header('Content-Type', 'application/pdf')
  getfile(){
    return this.services.getStaticFile();
  }
  

//POST REQUEST
  @Post('Save-PDF-File')
  @UseInterceptors(FileInterceptor('pdf',{storage: diskStorage({
      destination: 'Server/src/infrastructure/repositories',
      filename:function (req, file, cb) {
        cb(null, 'example.pdf')
        },
      }),
    })
  )
  UploadedFile(@UploadedFile() file: Express.Multer.File) {
    console.log('Sucess');
    return file;
  }
}


