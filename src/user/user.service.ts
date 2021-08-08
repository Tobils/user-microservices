import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository, InsertResult, FindConditions } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async createUser(createUserDto: CreateUserDto)
    {
        try {
            const new_user = new User()
            const __salt = await bcrypt.genSalt()
            new_user.salt = __salt
            new_user.password = await bcrypt.hash(createUserDto.password, new_user.salt)
            new_user.email = createUserDto.email
            new_user.name = createUserDto.name
            new_user.username = createUserDto.username
            return await new_user.save()
        } catch (error) {
            throw error
        }
    }

    async findOne(query: FindConditions<User>):Promise<User>{
        try {
            return await this.userRepository.findOne(query)
        } catch (error) {
            throw error
        }
    }
}
