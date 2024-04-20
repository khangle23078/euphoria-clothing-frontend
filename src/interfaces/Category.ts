import { Image } from "./image";

export interface Category {
  _id: string,
  image: Image,
  name: string,
  slug: string
}