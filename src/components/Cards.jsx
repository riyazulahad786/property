import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/images2.jpeg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.jpg";
import { CiHeart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
  const navigate = useNavigate();
  const [data, setData] = useState([
     {
           id: 1,
           title: "Walden Colombo US",
           date: "4 March 2024",
           likes: 41722,
           rating: 4.8,
           image: image1,
           isLiked: true,
           location:"london",
           price:"1.4cr",
           address:"london graye gardle newyork"
         },
         {
           id: 2,
           title: "Lush Gardens",
           date: "10 March 2024",
           likes: 11234,
           rating: 3.6,
           image: image2,
           isLiked: false,
           location:"Europe",
           price:"1.4cr",
           address:"dhansu mayeri 4560 europe"
   
         },
         {
             id: 3,
             title: "Walden Colombo US",
             date: "4 March 2024",
             likes: 41722,
             rating: 2.8,
             image: image3,
             isLiked: true,
             location:"usa",
             price:"1.4cr",
             address:"washinton gardle usa"
           },
           {
             id: 4,
             title: "Lush Gardens",
             date: "10 March 2024",
             likes: 10234,
             rating: 4.6,
             image: image4,
             isLiked: false,
             location:"london",
             price:"1.4cr",
             address:"washinton gardle usa"
           },
           {
             id: 5,
             title: "Lush Gardens",
             date: "10 March 2024",
             likes: 15234,
             rating: 4.6,
             image: image5,
             isLiked: false,
             location:"india",
             price:"1.4cr",
             address:"richmond circle 560100 bangalore india"
           },
           {
             id: 6,
             title: "Lush Gardens",
             date: "10 March 2024",
             likes: 144,
             rating: 3.6,
             image: image6,
             isLiked: false,
             location:"bangalore",
             price:"1.4cr",
             address:"washinton gardle usa"
           },
           {
             id: 7,
             title: "Lush Gardens",
             date: "10 March 2024",
             likes: 12234,
             rating: 3.1,
             image: image7,
             isLiked: false,
             price:"1.4cr",
             address:"washinton gardle usa"
           },
           {
             id: 8,
             title: "Lush Gardens",
             date: "10 March 2024",
             likes: 15234,
             rating: 4.6,
             image: image8,
             isLiked: false,
             location:"london",
             price:"1.4cr",
             address:"washinton gardle usa"
           },
           {
             id: 9,
             title: "Lush Gardens",
             date: "10 March 2024",
             likes: 1234,
             rating: 4.1,
             image: image9,
             isLiked: false,
             location:"london",
             price:"1.4cr",
             address:"washinton gardle usa"
           },
  ]);
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newCards = [
        {
          id: data.length + 1,
          title: "Newly Added Card",
          date: "12 March 2024",
          likes: 3456,
          rating: 4.2,
          image: image3,
          isLiked: false,
          location: "paris",
          price: "1.2cr",
          address: "Eiffel Tower Avenue, Paris",
        },
        // Add as many cards as needed for the load more simulation
      ];

      if (data.length >= 15) { // Simulating all cards loaded
        setAllLoaded(true);
      } else {
        setData((prevData) => [...prevData, ...newCards]);
      }
      setLoading(false);
    }, 1500); // Simulating network delay
  };
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const toggleLike = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isLiked: !item.isLiked } : item
    );
    setData(updatedData);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const getRatingColor = (rating) => {
    if (rating < 4) return "red";
    if (rating >= 4 && rating <= 4.5) return "blue";
    return "green";
  };

  return (
    <div className="">
      <div className="row">
        {data.map((item) => (
          <div
            className="col-md-6 col-lg-4 mb-4"
            key={item.id}
            onClick={() => navigate(`/card/${item.id}`)}
            role="button"
          >
            <div className="card rounded overflow-hidden">
              <Carousel {...settings}>
                <div>
                  <img
                    src={item.image}
                    className="img-fluid w-100"
                    alt={item.title}
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
                <div>
                  <img
                    src={image2}
                    className="img-fluid w-100"
                    alt={item.title}
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                </div>
              </Carousel>
              <div className="position-absolute top-0 w-100">
                <div className="d-flex align-items-center justify-content-between px-1 py-2">
                  <span className="small fw-bold like_btn px-2 py-1">
                    Most Liked
                  </span>
                  <CiHeart
                    aria-label="Like"
                    size={24}
                    role="button"
                    style={{
                      backgroundColor: item.isLiked ? "lightpink" : "transparent",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                    color={item.isLiked ? "red" : "black"}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between px-2 py-2">
                <span className="">
                  <GoEye /> {item.likes}
                </span>
                <span
                  className="mx-2"
                  style={{
                    color: getRatingColor(item.rating),
                    fontWeight: "bold",
                  }}
                >
                  <CiStar /> {item.rating}
                </span>
              </div>
              <div className="px-3">
                <span className="fw-bold card_title">{item.title}</span>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-3">
        {!allLoaded && (
          <button
            className="btn btn-primary"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
        {allLoaded && <p>All cards have been loaded.</p>}
      </div>
    </div>
  );
}

export default Cards;
