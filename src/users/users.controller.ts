import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService:UsersService
    ){}

    /* GET all users (/users) */
    @Get()
    findAll(){
        return this.userService.findAll()
    }

}
