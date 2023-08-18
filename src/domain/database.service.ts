import { Header, Injectable, StreamableFile, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { createReadStream } from "fs";
import { diskStorage } from "multer";


@Injectable({})
export class DatabaseService{
    //GET
    @Header('Content-Disposition', 'attachment; filename="src/example.pdf"')
    getStaticFile(): StreamableFile {
    const file = createReadStream('src/example.pdf',{flags:'r+'});
    console.log('read pdf file');
    return new StreamableFile(file);
  }  
    //POST
    
  
    
}