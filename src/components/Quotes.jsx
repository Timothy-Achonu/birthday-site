import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Quotes() {
  const birthdayQuotesForGirlfriend = [
    "Happy birthday to the love of my life! May your day be as bright and beautiful as your smile.",
    "On this special day, I want to remind you of how much you mean to me. Happy birthday, my dear.",
    "Wishing you a day filled with love, laughter, and all the things that make you happy. Happy birthday!",
    "To the one who has stolen my heart, happy birthday! May your day be filled with endless joy and surprises.",
    "Every moment with you is a gift. Today, we celebrate not just your birthday, but the gift that you are to my life.",
    "On your birthday, I want to shower you with all the love and affection you deserve. Happy birthday, my love!",
    "Your presence in my life has brought me nothing but happiness and love. Here's to celebrating you on your special day!",
    "As you blow out the candles, know that each one represents a wish of mine for you. Happy birthday, sweetheart.",
    "To the person who makes my heart skip a beat, happy birthday! May your day be as incredible as you are.",
    "Here's to celebrating another year of adventures, laughter, and love together. Happy birthday, my one and only.",
  ];

  var settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          initialSlide: 2,
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

  // You can use these quotes to wish your girlfriend a happy birthday

  return (
    <div className="quotesWrapper">
      <Slider {...settings}>
        {birthdayQuotesForGirlfriend.map((quote, idx) => {
          return <p key={idx}>{`"${quote}"`}</p>;
        })}
      </Slider>
    </div>
  );
}

export default Quotes;
