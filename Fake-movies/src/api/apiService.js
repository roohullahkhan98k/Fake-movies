import axios from "axios";
import { MOVIES_API } from "../config/apiConfig";

export const fetchMovies = async (query = "", sortField = "", sortOrder = "",) => {
  try {
    let url = `${MOVIES_API}?limit=20`;
    
    if (query) url += `&search=${query}`;
    if (sortField && sortOrder) url += `&sort=${sortField}&order=${sortOrder}`;
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};