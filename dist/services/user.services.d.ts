import { type User } from "#models/user.model";
export declare class userService {
    static getAll(): User[];
    static getById(id: number): User;
    static update(id: number, data: any): User | undefined;
    static creat(data: {
        nama: string;
        asal: string;
        umur: number;
    }): User;
    static delete(id: number): User | undefined;
    static search(name?: string, maxPrice?: number): User[];
}
//# sourceMappingURL=user.services.d.ts.map