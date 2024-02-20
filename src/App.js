import { Fragment, useEffect, useState } from "react";
import Coin from "./components/Coin";
import axios from "axios";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Fragment>
      <div className="coin-app">
        <div className="coin-search">
          <form>
            <input
              type="text"
              className="coin-input"
              placeholder="Type coin name"
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              image={coin.image}
              market_cap={coin.market_cap}
              price={coin.current_price}
              price_change={coin.price_change_percentage_24h}
              market_cap_rank={coin.market_cap_rank}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default App;
