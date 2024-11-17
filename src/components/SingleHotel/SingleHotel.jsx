import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();
  const { getSingleHotel, currentHotel, isLoadingcurrentHotel } = useHotels();
  useEffect(() => {
    getSingleHotel(id);
  }, [id]);
  if (isLoadingcurrentHotel || !currentHotel) return <Loader />;
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} reviews &bull;
          {currentHotel.smart_location}
        </div>
        <img src={currentHotel.thumbnail_url} alt={currentHotel.name} />
      </div>
    </div>
  );
}

export default SingleHotel;
