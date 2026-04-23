import { Module } from '@nestjs/common';
import { HealthModule } from './shared/health/health.module';

@Module({
  imports: [HealthModule],
})
export class AppModule {}
