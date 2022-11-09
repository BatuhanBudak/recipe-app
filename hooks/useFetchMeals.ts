import { useQuery } from "react-query";
import axios from "axios";
import { ALL_MEALS_URL } from "./type";

const fetchMealsData = async () => {
  return axios.get(ALL_MEALS_URL);
};

const useFetchMeals = () => {
  return useQuery("meals", fetchMealsData, {
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 10,
  });
};

export default useFetchMeals;
