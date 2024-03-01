import { Module } from '@nestjs/common';
import { MediatorModule as mediatorModule } from 'nestjs-mediator';

@Module({
  imports: [mediatorModule],
  providers: [],
  exports: [mediatorModule],
})
export class MediatorModule {}
