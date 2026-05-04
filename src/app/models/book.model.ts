export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  synopsis?: string;
  rating?: number; // personal rating 0-5
  quotes?: string[];
  cover?: string; // url or asset path
  favorite?: boolean;
  read?: boolean;
}
