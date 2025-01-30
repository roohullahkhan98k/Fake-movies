import axios from "axios";
import { MOVIES_API } from "../config/apiConfig";

export const fetchMovies = async (query = "") => {
  try {
    const url = query ? `${MOVIES_API}?search=${query}` : MOVIES_API; 
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
