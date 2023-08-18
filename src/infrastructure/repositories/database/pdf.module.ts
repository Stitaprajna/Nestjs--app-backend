import { Module } from "@nestjs/common";
import { controller } from "src/usecases/pdf.controller";
import { service } from "src/domain/pdf.service";

@Module({
    
    controllers: [controller],
    providers: [service]
})
export class PdfDataModule {}

