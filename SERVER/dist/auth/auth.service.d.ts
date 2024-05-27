import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { Tokens } from './types';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private config;
    constructor(prisma: PrismaService, jwtService: JwtService, config: ConfigService);
    signupLocal(dto: RegisterDto): Promise<Tokens>;
    signinLocal(dto: LoginDto): Promise<Tokens>;
    current(userId: number): Promise<{
        name: string;
        gender: import(".prisma/client").$Enums.Gender;
        email: string;
        id: number;
        created_at: Date;
    }>;
    logout(userId: number): Promise<boolean>;
    refreshTokens(userId: number, rt: string): Promise<Tokens>;
    updateRtHash(userId: number, rt: string): Promise<void>;
    getTokens(userId: number, email: string): Promise<Tokens>;
}
