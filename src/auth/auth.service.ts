
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'generated/prisma';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginResponse } from './dto/auth';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async login(
    email: string,
    password: string,
  ): Promise<LoginResponse> {
    const user = await this.usersService.findOne({ email });
    if (user == null || user == undefined) {
      throw new UnauthorizedException();
    }
    if (!(await bcrypt.compare(password, user.password!))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      user,
      access: await this.jwtService.signAsync(payload),
      refresh: ""
    };
  }

  async register(
    email: string,
    password: string,
    role: Role
  ) {
    await this.usersService.createUser({ email, password, role });
  }
}
