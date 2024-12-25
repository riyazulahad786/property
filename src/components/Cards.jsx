import { useNavigate } from "react-router-dom";
import  { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/images2.jpeg";
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.webp'
import image9 from '../assets/image9.jpg'
import { CiHeart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Cards() {
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
    },
    {
      id: 2,
      title: "Lush Gardens",
      date: "10 March 2024",
      likes: 15234,
      rating: 4.6,
      image: image2,
      isLiked: false,
      location:"Europe",
    },
    {
        id: 3,
        title: "Walden Colombo US",
        date: "4 March 2024",
        likes: 41722,
        rating: 4.8,
        image: image3,
        isLiked: true,
        location:"usa",
      },
      {
        id: 4,
        title: "Lush Gardens",
        date: "10 March 2024",
        likes: 15234,
        rating: 4.6,
        image: image4,
        isLiked: false,
        location:"london",
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
      },
      {
        id: 6,
        title: "Lush Gardens",
        date: "10 March 2024",
        likes: 15234,
        rating: 4.6,
        image: image6,
        isLiked: false,
        location:"bangalore",
      },
      {
        id: 7,
        title: "Lush Gardens",
        date: "10 March 2024",
        likes: 15234,
        rating: 4.6,
        image: image7,
        isLiked: false,
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
      },
      {
        id: 9,
        title: "Lush Gardens",
        date: "10 March 2024",
        likes: 15234,
        rating: 4.6,
        image: image9,
        isLiked: false,
        location:"london",
      },
  ]);

  const navigate = useNavigate();

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
              {/* Image Section with Carousel */}
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

              {/* Overlay Section */}
              <div className="position-absolute top-0 w-100">
                <div className="d-flex align-items-center justify-content-between px-1 py-2">
                  <span className="small fw-bold like_btn px-2 py-1">
                    Most Liked
                  </span>
                  <CiHeart
                    aria-label="Like"
                    size={24}
                    role="button"
                    color={item.isLiked ? "red" : "black"}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation on click
                      toggleLike(item.id);
                    }}
                  />
                </div>
              </div>

              {/* Details Section */}
              <div className="d-flex align-items-center justify-content-between px-2 py-2">
                <span className="">
                  <GoEye /> {item.likes}
                </span>
                <span className="mx-2">
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
    </div>
  );
}

export default Cards;
