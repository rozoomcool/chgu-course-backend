import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from 'generated/prisma';

@Controller({
  path: 'users', 
  version: '1'
})
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('cursor') cursor?: Prisma.UserWhereUniqueInput,
    @Query('where') where?: Prisma.UserWhereInput,
    @Query('orderBy') orderBy?: Prisma.UserOrderByWithRelationInput,
  ) {
    return this.usersService.findMany({
      skip: skip ? parseInt(skip) : undefined,
      take: take ? parseInt(take) : undefined,
      cursor,
      where,
      orderBy,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.updateUser({
      where: { id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.deleteUser({ id });
  }
}
