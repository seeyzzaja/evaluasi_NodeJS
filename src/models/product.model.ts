export interface Product {
  id: number;
  nama: string;
  harga: number;
  deskripsi: string;
}

export const products: Product[] = [
  { id: 1, nama: "kipas", harga: 20000, deskripsi: "kipas murah kualitas nomor 1" },
  { id: 2, nama: "mesin cuci", harga: 170000, deskripsi: "mesin cuci canggih" },
  { id: 2, nama: "laptop", harga: 260000, deskripsi: "laptop dengan spek dewa" },
];
