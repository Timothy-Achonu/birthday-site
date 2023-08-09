import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./components/Card";
import Slider from "react-slick";
import firstPic from "../src/assets/firstPic.png";
import secondPic from "../src/assets/secondPic.png";
import thirdPic from "../src/assets/thirdPic.png";
import Quotes from "./components/Quotes";
function App() {
  const [count, setCount] = useState(0);
  const cards = [
    {
      bg: "red",
      bgPic: firstPic,
    },
    {
      bg: "blue",
      bgPic: secondPic,
    },
    {
      bg: "pink",
      bgPic: firstPic,
    },
    {
      bg: "yellow",
      bgPic: thirdPic,
    },
    {
      bg: "green",
      bgPic: firstPic,
    },
    {
      bg: "orange",
      bgPic: secondPic,
    },
    {
      bg: "gold",
      bgPic: thirdPic,
    },
    {
      bg: "black",
      bgPic: firstPic,
    },
    {
      bg: "gray",
      bgPic: firstPic,
    },
  ];
  const { width, height } = useWindowSize();
  let newHeight = height - 195;
  let newWidth = width - 20;
  if(width < 500) {
    newWidth = width - 20;
    newHeight = height - 205;
  }
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
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
    <>
      <Confetti width={newWidth} height={newHeight} />
      <h1>Happy Birthday Babe!</h1>
      <div className="cardsWrapper">
        <Slider {...settings}>
          {cards.map((card, idx) => {
            return (
              <Card
                bgColor={card.bg}
                bgPic={card.bgPic}
                key={idx}
                id={idx}
                inCenter={idx + 0.5 == cards.length / 2}
              />
            );
          })}
        </Slider>
        <Quotes />
      </div>
      {/* <div className="card">
           second Card
      </div> */}
    </>
  );
}

export default App;
