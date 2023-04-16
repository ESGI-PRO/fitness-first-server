import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from '../services/auth.service';
import { LoginDto } from "../dto/login.dto";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('login')
  async login(@Payload() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

}
