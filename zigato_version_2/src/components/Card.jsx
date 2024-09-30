import {SWIurl} from "../utils/DataSet"

const Cards = (props) => {
  const {resData}=props;

  return (
    <>
      <div className="cards-box">
        <div className="cards">
          <div className="image-container">
            <img
              class="actual-image"
              src={SWIurl+resData.info.cloudinaryImageId}
              alt="Mithaas"
            ></img>
             <div class="overlay-text">50% OFF ABOVE 500 </div>
          </div>
          <div className="card-data">
            <div className="res-name"> {resData.info.name}</div>
            <div className="res-rating">{resData.info.avgRatingString}</div>
            <div className="res-time">{resData.info.sla.deliveryTime + " min"}</div>
            <div className="res-items">{resData.info.cuisines.join(', ')}</div>
            <div className="res-location">{resData.info.locality}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;