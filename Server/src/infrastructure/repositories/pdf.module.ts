import { Module } from "@nestjs/common";
import { controller } from "Server/src/usecases/pdf.controller";
import { service } from "Server/src/domain/pdf.service";

@Module({
    
    controllers: [controller],
    providers: [service]
})
export class PdfDataModule {}

