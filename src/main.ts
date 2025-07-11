import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`\nServer is running on http://localhost:${PORT}`);
  });
}

void bootstrap();
