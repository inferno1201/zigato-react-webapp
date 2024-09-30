import Cards from "./Card";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
const Body = () => {
  const [rest, setRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setRest(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (rest.length===0)?<ShimmerUI></ShimmerUI>:(
    <div className="body">
      <div className="search-filter">
        <div className="search"> search</div>
        <div className="button-container">
          <button
            className="actual-button"
            onClick={() => {
              const newData = rest.filter(
                (resInfo) => resInfo.info.avgRatingString > 4.5
              );
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
