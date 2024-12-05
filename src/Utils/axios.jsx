import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY;
const apiEndPoint = `http://www.omdbapi.com/?apikey=${apiKey}&`;
export const fetchMovieFromApi = async (str) => {
  try {
    const url = apiEndPoint + "t=" + str;
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
