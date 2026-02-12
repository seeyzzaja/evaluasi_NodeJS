import {type User,users } from "#models/user.model";

export class userService {
  static getAll(): User[] {
    return users;
  }
  static getById(id: number): User {
    const user = users.find((p) => p.id === id);
    if (!user) throw new Error("user dengan id tersebut tidak di temukan");
    return user;
  }
  static update(id: number, data: any): User | undefined {
    const index = users.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("user tidak ditemukan");
    users[index] = { ...users[index], ...data };
    return users[index];
  }
  static creat(data: {
    nama: string;
    asal: string;
    umur: number;
  }): User {
    const newUser= {
      id: users.length + 1,
      ...data,
    };
    users.push(newUser);
    return newUser;
  }
  static delete(id: number): User | undefined {
    const user = users.findIndex((p) => p.id === id);
    if (user === -1) throw new Error("user tidak ditemukan");
    return users.splice(user, 1)[0];
  }
  static search(name?: string, maxPrice?: number): User[] {
    let result = users;
    if (name) {
      result = result.filter((p) =>
        p.nama.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (maxPrice) {
      result = result.filter((p) => p.umur <= maxPrice);
    }
    return result;
  }
}
