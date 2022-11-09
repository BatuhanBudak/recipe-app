import Image from "next/image";
import Pill from "./Pill";
import Thumb from "./Thumb";

type Props = {
  mealUrl: string;
  title: string;
  category: string;
  area: string;
  instructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
};

const MealInfo = ({
  mealUrl,
  title,
  category,
  area,
  instructions,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
}: Props) => (
  <div className="relative w-full h-full p-10 ">
    <div className="relative  h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90">
      <div className="relative w-full h-96 md:h-auto md:w-1/3">
        <Thumb imgUrl={mealUrl} />
        <div className="absolute top-4 left-4 rounded-full bg-white p-2 flex justify-center items-center text-black text-sm font-bold">
          {category}
        </div>
      </div>
      <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3">
        <h2 className="text-2xl md:text-4xl font-bold pb-4">
          {title} ({area})
        </h2>
        <h3 className="text-2xl font-bold">Instructions</h3>
        <p className="mb-8 text-sm md:text-lg">{instructions}</p>
        <div>
          <div>
            <ul className="flex items-center justify-center flex-wrap">
              <li>
                {strIngredient1 && strMeasure1 && (
                  <Pill text={`${strIngredient1}: ${strMeasure1}`} />
                )}
              </li>
              <li>
                {strIngredient2 && strMeasure2 && (
                  <Pill text={`${strIngredient2}: ${strMeasure2}`} />
                )}
              </li>
              <li>
                {strIngredient3 && strMeasure3 && (
                  <Pill text={`${strIngredient3}: ${strMeasure3}`} />
                )}
              </li>
              <li>
                {strIngredient4 && strMeasure4 && (
                  <Pill text={`${strIngredient4}: ${strMeasure4}`} />
                )}
              </li>
              <li>
                {strIngredient5 && strMeasure5 && (
                  <Pill text={`${strIngredient5}: ${strMeasure5}`} />
                )}
              </li>
              <li>
                {strIngredient6 && strMeasure6 && (
                  <Pill text={`${strIngredient6}: ${strMeasure6}`} />
                )}
              </li>
              <li>
                {strIngredient7 && strMeasure7 && (
                  <Pill text={`${strIngredient7}: ${strMeasure7}`} />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MealInfo;
