export interface ProductRequest {
  id?: number;
  name: string;
  description: string;
  price: number | undefined;
}
export type ProductResponse = ProductRequest & { id: number };
