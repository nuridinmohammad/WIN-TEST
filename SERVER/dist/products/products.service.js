"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createProductDto, userId) {
        const product = await this.prismaService.product.create({
            data: {
                ...createProductDto,
                price: Number(createProductDto.price),
                user_id: userId,
            },
        });
        return product;
    }
    async findAll(userId) {
        const product = await this.prismaService.product.findMany({
            where: { user_id: userId },
        });
        if (!product) {
            throw new common_1.HttpException('Products are not found', common_1.HttpStatus.NOT_FOUND);
        }
        return product;
    }
    async findOne(userId, id) {
        const product = await this.prismaService.product.findFirst({
            where: { user_id: userId, id: id },
        });
        if (!product) {
            throw new common_1.HttpException('Product is not found', common_1.HttpStatus.NOT_FOUND);
        }
        return product;
    }
    async update(userId, updateProductDto, id) {
        const product = await this.findOne(userId, id);
        if (!product) {
            throw new common_1.HttpException('Product is not found', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.prismaService.product.update({
            where: {
                user_id: userId,
                id: id,
            },
            data: updateProductDto,
        });
    }
    async remove(userId, id) {
        const product = await this.findOne(userId, id);
        if (!product) {
            throw new common_1.HttpException('Product is not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.prismaService.product.delete({
            where: {
                user_id: userId,
                id: id,
            },
        });
        return true;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map