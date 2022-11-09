import React from "react";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsRandomMeal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TIME = 300; // ms

const SearchInput = ({ setQuery, setIsRandomMeal }: Props) => {
  const [text, setText] = React.useState("");
  const timer = React.useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    clearTimeout(timer.current);

    setText(value);
    setIsRandomMeal(false);
    //Debounce the value
    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
      <input
        className="h-10 max-w-[50%] md:pr-14 md:max-w-none rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200 truncate"
        type="text"
        placeholder="Search Meal"
        value={text}
        onChange={handleInput}
      />
    </>
  );
};

export default SearchInput;
