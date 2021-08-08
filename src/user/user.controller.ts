import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from './auth.guard';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @MessagePattern({ role: 'user', cmd: 'get' })
    getUser(data: any): Promise<User>{
        return this.userService.findOne({username: data.username})
    }

    @MessagePattern({ role: 'user', cmd: 'create' })
    createUser(createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @UseGuards(AuthGuard)
    @Get('greet') 
    async greet(): Promise<string> {
      return 'Greetings authenticated user';
    }



}
