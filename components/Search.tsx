import { setFilterValue, setSearchText } from "@/store/filterSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const searchChageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    dispatch(setSearchText(text));
    if(text.trim().length === 1) {
      dispatch(setSearchText(""));
    }
  };

  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <div className="flex justify-center items-center sm:pt-16 sm:py-16 py-6 flex-col">
      <div className="w-[90%] lg:w-[75%] flex justify-between items-center flex-col sm:px-16">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <img
              src="/assets/search.svg"
              alt="search"
              className="w-[25px] h-[25px] fill-current text-primary-gray-dark"
            />
          </div>
          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            placeholder="Search Coins.."
            onChange={searchChageHandler}
          />
        </div>
        <div className="flex justify-center items-center gap-4 pt-4">
          <select
            onChange={filterChangeHandler}
            className="font-poppins flex-1 px-4 py-3 w-full rounded-md bg-black-gradient border-transparent focus:border-dimWhite focus:bg-primary focus:ring-0 text-sm text-white "
          >
            <option value="">All Coin</option>
            <option value="Trending">Trending</option>
          </select>
          <select
            onChange={filterChangeHandler}
            className="font-poppins flex-1 px-4 py-3 w-full rounded-md bg-black-gradient border-transparent focus:border-dimWhite focus:bg-primary focus:ring-0 text-sm text-white"
          >
            <option value="">Furnish Type</option>
            <option value="fully-furnished">Fully Furnished</option>
            <option value="partially-furnished">Partially Furnished</option>
            <option value="not-furnished">Not Furnished</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
