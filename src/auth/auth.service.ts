import { Injectable } from '@nestjs/common';
import { SignUpAuthDto } from './dto/sign-up-auth.dto';
import { SignInAuthDto } from './dto/sign-in-auth.dto';

@Injectable()
export class AuthService {
  create(signUpAuthDto: SignUpAuthDto) {
    return 'This action adds a new auth';
  }
}
