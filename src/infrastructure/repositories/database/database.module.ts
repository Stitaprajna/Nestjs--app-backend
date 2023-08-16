import { Module } from "@nestjs/common";
import { DatabaseController } from "../../../usecases/database.controller";
import { DatabaseService } from "../../../domain/database.service";

@Module({
    controllers: [DatabaseController],
    providers: [DatabaseService]
})
export class DatabaseModule {}

