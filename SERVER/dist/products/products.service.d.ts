import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createProductDto: CreateProductDto, userId: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }>;
    findAll(userId: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }[]>;
    findOne(userId: number, id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }>;
    update(userId: number, updateProductDto: UpdateProductDto, id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }>;
    remove(userId: number, id: number): Promise<boolean>;
}
