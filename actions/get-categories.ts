import { Category } from "@/lib/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
