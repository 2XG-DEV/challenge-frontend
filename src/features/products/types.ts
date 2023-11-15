export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number | null;
  supplementType: string;
  ingredients: string;
  dosage: string;
  createdAt: Date;
  updatedAt: Date;
}
