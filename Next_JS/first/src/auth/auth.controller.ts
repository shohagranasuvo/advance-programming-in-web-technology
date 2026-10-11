import { Controller, Get } from '@nestjs/common'; // Added Get
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get() // This opens the GET /auth route
  getHello(): string {
    return 'Auth system is working!';
  }
}
