import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import { AxiosResponse } from "axios";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  setIsRandomMeal?: React.Dispatch<React.SetStateAction<boolean>>;
  refetch?: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>;
};

const Header = ({ setQuery, setIsRandomMeal, refetch }: Props) => {
  const handleClick = () => {
    if (setIsRandomMeal && refetch) {
      setIsRandomMeal(true);
      refetch();
    }
  };
  return (
    <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
      <div className="flex justify-between w-full h-full max-w-7xl m-auto px-4">
        <Link className="flex items-center min-w-[25%] md:min-w-0" href="/">
          <div className="relative w-20 h-8 md:w-40 md:h-10">
            <Image
              src="/logo-small.png"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="themealdb-logo"
            />
          </div>
        </Link>
        {setQuery && setIsRandomMeal ? (
          <div className="flex items-center justify-center max-w-[70%] md:max-w-none gap-4">
            <SearchInput
              setQuery={setQuery}
              setIsRandomMeal={setIsRandomMeal}
            />
            <button
              className="rounded-full p-2 text-center bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200 truncate"
              onClick={handleClick}
            >
              Suprise Me
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
