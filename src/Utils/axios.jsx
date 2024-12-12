import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY;
const apiEndPoint = `https://www.omdbapi.com/?apikey=${apiKey}&`;
export const fetchMovieFromApi = async (str) => {
  try {
    const url = apiEndPoint + "t=" + str;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
