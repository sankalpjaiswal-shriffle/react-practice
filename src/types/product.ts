export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
}

export interface ProductResponse {
  products: Product[];
}
