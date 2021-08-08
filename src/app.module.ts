import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user',
      password: 'password',
      database: 'ms-user',
      entities: [User],
      synchronize: true,
    }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
