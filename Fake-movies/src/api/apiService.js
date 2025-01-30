import axios from "axios";
import { MOVIES_API } from "../config/apiConfig";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(MOVIES_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
