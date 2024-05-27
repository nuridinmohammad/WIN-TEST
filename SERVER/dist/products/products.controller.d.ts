import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
    findOne(id: number, userId: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }>;
    update(id: number, updateProductDto: UpdateProductDto, userId: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }>;
    remove(id: number, userId: number): Promise<boolean>;
}
