import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should return access token if login is successful', async () => {
    const email = 'john@example.com';
    const password = 'passwordJohn';
  
    const result = await service.login(email, password);
  
    expect(result.access_token).toBeDefined();
  });  
});
