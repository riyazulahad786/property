import React from "react";
import { useParams } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { CiStar, CiLocationOn } from "react-icons/ci";
import map from "../assets/Group.png";

function CardDetails({ data }) {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));

  if (!card) {
    return <div>Card not found!</div>;
  }

  // Function to determine the rating color
  const getRatingColor = (rating) => {
    if (rating < 4) return "red";
    if (rating >= 4 && rating <= 4.5) return "yellow";
    return "green";
  };

  return (
    <div className="container mt-5">
      <div className="card mt-3 position-relative">
        <img
          src={card.image}
          alt={card.title}
          className="img-fluid"
          style={{ maxHeight: "400px" }}
        />
        <div
          className="position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          <span className="small fw-bold like_btn px-2 py-1 rounded">
            Most Liked
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between px-2 py-2">
        <span>
          <GoEye /> {card.likes}
        </span>
        <span
          className="mx-2"
          style={{ color: getRatingColor(card.rating), fontWeight: "bold" }}
        >
          <CiStar /> {card.rating}
        </span>
      </div>

      <div className="d-flex align-items-center justify-content-between px-2 py-2">
        <div className="d-flex flex-column">
          <span className="fs-6 fw-bold">{card.title}</span>
          <span>
            <CiLocationOn /> {card.location}
          </span>
        </div>
        <div className="d-flex flex-column">
          <span className="fs-6 fw-bold">{card.price}</span>
          <span className="">EMI Available</span>
        </div>
      </div>

      <div>
        <div className="fs-6 fw-bold mb-3">Location</div>
        <div className="d-flex">
          <div className="location">
            <CiLocationOn />
          </div>
          <div className="mx-3">{card.address}</div>
        </div>
      </div>

      <div className="py-2">
        <img src={map} className="img-fluid" alt="Map" />
      </div>

      <div className="d-flex justify-content-between py-4">
        <div className="tag px-3 py-1">2 Hospital</div>
        <div className="tag px-3 py-1">4 Gas Stations</div>
        <div className="tag px-3 py-1">2 Schools</div>
      </div>

      <div>
        <h6>Property Amenities</h6>
        <div className="d-flex gap-2">
          <div className="common_btns px-3 py-1">House</div>
          <div className="common_btns px-3 py-1">Apartment</div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
