import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from 'src/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @Get(":id")
  async getMyUser(@Param('id', ParseIntPipe) id: number) {
      const user = await this.userService.getMyUser(+id);
      if (!user) {
        throw new NotFoundException("User not found");
      }
      return user;
  }

  // @Public()
  // @Get(':id')
  // getMyUser(@Param() params: { id: number }, @Req() req) {
  //   return this.userService.getMyUser(params.id, req);
  // }

  @Public()
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Public()
  @Patch('add/user-readiness')
  async UserReadiness(@Body() body: { id: number, readinessId: number }) {
    return await this.userService.UserReadiness(body.id, body.readinessId);
  }
}
