import { type Product } from "#models/product.model";
export declare class ProductService {
    static getAll(): Product[];
    static getById(id: number): Product;
    static update(id: number, data: any): Product | undefined;
    static create(data: {
        nama: string;
        deskripsi: string;
        harga: number;
    }): Product;
    static delete(id: number): Product | undefined;
    static search(name?: string, maxPrice?: number): Product[];
}
//# sourceMappingURL=produk.services.d.ts.map