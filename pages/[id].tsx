import Header from "../components/Header";
import MealInfo from "../components/MealInfo";
import Breadcrumb from "../components/BreadCrumb";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Meal } from "../hooks/type";
import { fetchMealById } from "../hooks/useFetchMeal";

type Props = {
  meal: Meal;
};

const Meal: NextPage<Props> = ({ meal }: Props) => (
  <main>
    <Header />
    <Breadcrumb title={meal.strMeal} />
    <MealInfo
      mealUrl={meal.strMealThumb ?? "/no_image.jpg"}
      title={meal.strMeal}
      category={meal.strCategory}
      area={meal.strArea}
      instructions={meal.strInstructions}
      strIngredient1={meal.strIngredient1}
      strIngredient2={meal.strIngredient2}
      strIngredient3={meal.strIngredient3}
      strIngredient4={meal.strIngredient4}
      strIngredient5={meal.strIngredient5}
      strIngredient6={meal.strIngredient6}
      strIngredient7={meal.strIngredient7}
      strMeasure1={meal.strMeasure1}
      strMeasure2={meal.strMeasure2}
      strMeasure3={meal.strMeasure3}
      strMeasure4={meal.strMeasure4}
      strMeasure5={meal.strMeasure5}
      strMeasure6={meal.strMeasure6}
      strMeasure7={meal.strMeasure7}
    />
  </main>
);

export default Meal;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const data = await fetchMealById(id);

  return {
    props: {
      meal: data.data.meals[0],
    },
    revalidate: 60 * 60 * 24, // Re-build page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
