import { Header, Injectable, StreamableFile, UploadedFile, UseInterceptors } from "@nestjs/common";
import { createReadStream } from "fs";


@Injectable({})
export class service{
    //GET
    @Header('Content-Disposition', 'attachment; filename="src/example.pdf"')
    getStaticFile(): StreamableFile {
    const file = createReadStream('src/example.pdf',{flags:'r+'});
    console.log('read pdf file');
    return new StreamableFile(file);
  }  
    
}