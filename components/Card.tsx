import React, { useState } from "react";
import { Cryptos } from "@/constants";
import Stats from "./Stats";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface crypto {
  coinList: Cryptos[];
}

const Card: React.FC<crypto> = ({ coinList }) => {
  const [coins, setCoins] = useState<Cryptos[]>(coinList);
  const { searchText, filterValue } = useSelector(
    (state: RootState) => state.searchAndFilter
  );

  
  const handleSearch = () => {
      return coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchText) ||
          coin.symbol.toLowerCase().includes(searchText)
      );
  };

  return (
    <section className="flex justify-center items-center sm:pt-16 sm:py-8 py-6 flex-col">
      <div className="grid gap-5 grid-cols-1 ss:grid-cols-2 md:grid-cols-3">
        {handleSearch().map((crypto) => {
          const profit: boolean = crypto.price_change_percentage_24h > 0;
          return (
            <div
              key={crypto.id}
              className="w-[20rem] flex flex-col justify-between p-5 border rounded bg-black-gradient-2"
            >
              <div className="flex items-center justify-start mb-4 rounded-full">
                <div className="flex-1">
                  <img
                    src={`${crypto.image}`}
                    alt={`${crypto.name}`}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <span className="font-poppins text-dimWhite text-[11px]">
                  Market Cap Rank {crypto.market_cap_rank}
                </span>
              </div>
              <h5 className="pb-1 font-semibold leading-5 text-white text-xl">
                {crypto.name}
                <span className="text-dimWhite text-sm">
                  {" "}
                  ({crypto.symbol.toUpperCase()})
                </span>
              </h5>
              <span className="text-white font-poppins text-[20px]">
                ${numberWithCommas(crypto.current_price.toFixed(2))}
              </span>
              <div className="mt-4">
                <Stats
                  text={"Market Cap"}
                  value={numberWithCommas(
                    crypto.market_cap.toString().slice(0, -6)
                  )}
                />
                <div className="flex justify-center items-start">
                  <p className="font-poppins text-xs flex-1 text-dimWhite">
                    24h %
                  </p>
                  <p
                    className={`font-poppins text-xs ${
                      profit ? "text-[#16c784]" : "text-[#ea3943]"
                    }`}
                  >
                    {profit && "+"}
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
