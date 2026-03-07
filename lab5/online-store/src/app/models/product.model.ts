export interface Product {
  likes: number;
  id: number;
  name: string;
  category: string; 
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  liked?: boolean; 

  isFavorite: boolean;
}