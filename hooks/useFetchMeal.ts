import { useQuery } from "react-query";
import axios from "axios";
import { ALL_MEALS_URL } from "./type";

const fetchMealData = async (query: string) => {
  return axios.get(`${ALL_MEALS_URL}=${query}`);
};

export const useFetchMeal = (query: string) => {
  return useQuery(["meal", query], () => fetchMealData(query), {
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 10,
  });
};
