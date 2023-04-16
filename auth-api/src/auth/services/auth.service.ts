import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from "../../prisma/prisma.service";
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from "../entities/auth.entity";

import * as bcrypt from 'bcrypt';

// Hash password for fake user
const passwordJohn = bcrypt.hash('passwordJohn', 10);
const passwordMaria = bcrypt.hash('passwordMaria', 10);

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  private readonly users = [
    {
      id: 1,
      email: 'john@example.com',
      username: 'john',
      password: passwordJohn,
      roles: ['user'],
    },
    {
      id: 2,
      email: 'marian@example.com',
      username: 'maria',
      password: passwordMaria,
      roles: ['admin'],
    },
  ];

  async login(email: string, password: string) {
    const user = this.users.find(user => user.email === email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    const isPasswordMatching = await bcrypt.compare(password, await user.password);

    if (!isPasswordMatching) {
      throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);
    }

    const payload = { email: user.email, sub: user.id, roles: user.roles };

    return {
      access_token: this.jwtService.signAsync(payload),
    }
  }

}
