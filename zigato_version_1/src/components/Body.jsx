import Cards from "./Card";
import { useState } from "react";
import { restaurant } from "../utils/DataSet"; //named export
const Body = () => {
  const [rest, setRest] = useState(restaurant);

  return (
    <div className="body">
      <div className="search-filter">
        <div className="search"> search</div>
        <div className="button-container">
          <button
            className="actual-button"
            onClick={() => {
              const newData = rest.filter((resInfo) => resInfo.info.avgRatingString > 4.5);
              setRest(newData);
            }}
          >
            Get Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="body-container">
        {
          rest.map((res) => {
            return <Cards key={res.info.id} resData={res} />;
          }) // or {restaurant.map((index)=>(<Cards resData={index}>))}
        }
      </div>
    </div>
  );
};

export default Body;
