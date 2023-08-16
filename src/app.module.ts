import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/repositories/database/database.module';

@Module({
  imports: [DatabaseModule],
  
})
export class AppModule {}
