import axios from "axios";
import { Image } from "../types/image.ts";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

export interface SearchResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<SearchResponse> => {
  const response = await axios.get<SearchResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return response.data;
};
