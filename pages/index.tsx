import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import useFetchMeals from "../hooks/useFetchMeals";
import { Meal } from "../hooks/type";
import { useFetchMeal } from "../hooks/useFetchMeal";
import useFetchRandomMeal from "../hooks/useFetchRandomMeal";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isRandomMeal, setIsRandomMeal] = useState(false);

  const { data, isLoading, isFetching, error } = useFetchMeals();
  const {
    data: mealData,
    isLoading: mealLoading,
    isFetching: mealFetching,
    error: mealError,
  } = useFetchMeal(query);
  const {
    data: randomMeal,
    isLoading: randomMealLoading,
    isFetching: randomMealFetching,
  } = useFetchRandomMeal();

  if (error || mealError) return <div>Something went wrong!</div>;

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header setQuery={setQuery} setIsRandomMeal={setIsRandomMeal} />
      <Grid
        className="p-4 max-w-7xl m-auto"
        title={query ? `Search Results for ${query}` : "Popular Meals"}
      >
        {!query &&
          isRandomMeal &&
          randomMeal?.data.meals.map((meal: Meal) => (
            <Link key={meal.idMeal} href={`/${meal.idMeal}}`}>
              <div className="cursor-pointer hover:opacity-80 duration-300">
                <Card
                  imgUrl={meal.strMealThumb ?? "/no_image.jpg"}
                  title={meal.strMeal}
                />
              </div>
            </Link>
          ))}
        {!isRandomMeal &&
          !query &&
          data?.data.meals.map((meal: Meal) => (
            <Link key={meal.idMeal} href={`/${meal.idMeal}}`}>
              <div className="cursor-pointer hover:opacity-80 duration-300">
                <Card
                  imgUrl={meal.strMealThumb ?? "/no_image.jpg"}
                  title={meal.strMeal}
                />
              </div>
            </Link>
          ))}
        {!isRandomMeal &&
          query &&
          mealData?.data.meals.map((meal: Meal) => (
            <Link key={meal.idMeal} href={`/${meal.idMeal}}`}>
              <div className="cursor-pointer hover:opacity-80 duration-300">
                <Card
                  imgUrl={meal.strMealThumb ?? "/no_image.jpg"}
                  title={meal.strMeal}
                />
              </div>
            </Link>
          ))}
      </Grid>

      {isLoading ||
      isFetching ||
      mealLoading ||
      mealFetching ||
      randomMealLoading ||
      randomMealFetching ? (
        <Spinner />
      ) : null}
    </main>
  );
}
