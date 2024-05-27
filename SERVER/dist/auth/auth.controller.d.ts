import { AuthService } from './auth.service';
import { Tokens } from './types';
import { LoginDto, RegisterDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signupLocal(dto: RegisterDto): Promise<Tokens>;
    signinLocal(dto: LoginDto): Promise<Tokens>;
    current(userId: number): Promise<any>;
    logout(userId: number): Promise<boolean>;
    refreshTokens(userId: number, refreshToken: string): Promise<Tokens>;
}
