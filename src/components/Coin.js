import { Fragment } from "react";

const Coin = ({
  image,
  name,
  price,
  market_cap,
  price_change,
  market_cap_rank,
  volume,
}) => {
  return (
    <Fragment>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <h2>{market_cap_rank}</h2>
            <img src={image} alt="crypto-coin" />
            <h1>{name}</h1>
          </div>
          <div className="coin-data">
            <p className="coin-price">Rs {price.toLocaleString()}</p>
            {price_change < 0 ? (
              <p className="coin-persent red">{price_change.toFixed(2)}%</p>
            ) : (
              <p className="coin-persent green">{price_change.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">
              MarketCap: Rs {market_cap.toLocaleString()}
            </p>
            <p className="coin-volume">{volume.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Coin;
