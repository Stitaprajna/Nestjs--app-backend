import { Controller, Get, Post, Put,StreamableFile } from "@nestjs/common";
import { DatabaseService } from "../domain/database.service";
import * as pdfjsLib from "pdfjs-dist";
import { createReadStream } from 'fs';
import { join } from 'path';



// @Controller('auth')
// export class DatabaseController{
//     constructor(private databaseservice: DatabaseService){}
//     @Post('Save-PDF-File')
//     savePDF(){

//         return 'Saved PDF File'
//     }

//     @Get('Load-PDF-File')
//     loadPDF(res:Response,req:Request){
//         const pdfRead = 'src/infrastructure/repositories/database/example.pdf'
//         return this.databaseservice.getPDF(pdfRead);
        
//     }
// }
@Controller('auth')
export class DatabaseController {
constructor(private databaseservice: DatabaseService){}
  @Get('Load-PDF-File')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'src/infrastructure/repositories/database/example.pdf'));
    console.log('file read')
    return new StreamableFile(file);
  }
}


