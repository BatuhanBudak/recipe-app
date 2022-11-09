import { useQuery } from "react-query";
import axios from "axios";

const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const fetchRandomMealData = async () => {
  return axios.get(randomMealUrl);
};

const useFetchRandomMeal = () => {
  return useQuery("random", fetchRandomMealData, {
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 10,
  });
};

export default useFetchRandomMeal;
