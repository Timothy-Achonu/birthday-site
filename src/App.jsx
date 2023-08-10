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
import Login from "./components/login/Login";
function App() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("celebrantLoggedIn")) || false
  );
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
  if (width < 500) {
    newWidth = width - 20;
    newHeight = height - 169;
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

  function loginFunc(e) {
    e.preventDefault();
    if (password.toLowerCase() == "rice") {
      setPassword("");
      setIsLoggedIn(true);
      localStorage.setItem("celebrantLoggedIn", JSON.stringify(true));
    }
  }
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("celebrantLoggedIn");
  }

  return (
    <>
      {isLoggedIn ? (
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
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
            {/* <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/6uxeN4IBwcL0rvbQLliSgX?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe> */}
            <iframe
              allow="autoplay; encrypted-media; fullscreen; clipboard-write"
              frameBorder="0"
              height="450"
              width="100%"
              style={{
                width: "100%",
                // maxWidth: "660px",
                overflow: "hidden",
                borderRadius: "10px",
                margin: '0 auto',

              }}
              // sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/ng/playlist/mines/pl.u-aZb0094s1mJPXzW"
            ></iframe>
          </div>
        </>
      ) : (
        <Login
          password={password}
          setPassword={setPassword}
          loginFunc={loginFunc}
        />
      )}
    </>
  );
}

export default App;
