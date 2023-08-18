import { Header, Injectable, StreamableFile, UploadedFile, UseInterceptors } from "@nestjs/common";
import { createReadStream } from "fs";


@Injectable({})
export class service{
    //GET
    @Header('Content-Disposition', 'attachment; filename="Server/src/infrastructure/repositories/example.pdf"')
    getStaticFile(): StreamableFile {
    const file = createReadStream('Server/src/infrastructure/repositories/example.pdf',{flags:'r+'});
    console.log('read pdf file');
    return new StreamableFile(file);
  }  
  
}