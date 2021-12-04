import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [CsvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
