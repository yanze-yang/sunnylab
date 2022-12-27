export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category?: ICategory;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
  createdAt: string;
  updatedAt: string;
}
