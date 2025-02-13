import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Blogs')
    .setDescription('The Tech Blogs APIs description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000, () => {
    console.log('Listening at http://localhost:3000');
    console.log('Swagger is available at http://localhost:3000/api-docs');
  });
}
bootstrap();
