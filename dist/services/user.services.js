import { users } from "#models/user.model";
export class userService {
    static getAll() {
        return users;
    }
    static getById(id) {
        const user = users.find((p) => p.id === id);
        if (!user)
            throw new Error("user dengan id tersebut tidak di temukan");
        return user;
    }
    static update(id, data) {
        const index = users.findIndex((p) => p.id === id);
        if (index === -1)
            throw new Error("user tidak ditemukan");
        users[index] = { ...users[index], ...data };
        return users[index];
    }
    static creat(data) {
        const newUser = {
            id: users.length + 1,
            ...data,
        };
        users.push(newUser);
        return newUser;
    }
    static delete(id) {
        const user = users.findIndex((p) => p.id === id);
        if (user === -1)
            throw new Error("user tidak ditemukan");
        return users.splice(user, 1)[0];
    }
    static search(name, maxPrice) {
        let result = users;
        if (name) {
            result = result.filter((p) => p.nama.toLowerCase().includes(name.toLowerCase()));
        }
        if (maxPrice) {
            result = result.filter((p) => p.umur <= maxPrice);
        }
        return result;
    }
}
//# sourceMappingURL=user.services.js.map