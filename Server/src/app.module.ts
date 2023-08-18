import { Module } from '@nestjs/common';
import { PdfDataModule } from './infrastructure/repositories/pdf.module';

@Module({
  imports: [PdfDataModule],
  
})
export class AppModule {}
