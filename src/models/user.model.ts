export interface User {
  id: number;
  nama: string;
  umur: number;
  asal: string;
}

export const users: User[] = [
  { id: 1, nama: "Naufal", umur: 20, asal: "Jambi" },
  { id: 2, nama: "Vina", umur: 17, asal: "jakarta" },
  { id: 2, nama: "Dika", umur: 26, asal: "kalimantan" },
];
