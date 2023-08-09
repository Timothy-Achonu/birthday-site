import React from "react";
//width: inCenter ? "400px" : ""

function Card({ bgColor, inCenter, id, bgPic }) {
  if (id === 3) {
  }
  return (
    <>
      <div
        // style={{ background:`url(${bgPic})`}}
        className='card'
      >
        {/* A card {id + 1} */}
        <img src={bgPic} alt="" />
      </div>
    </>
  );
}

export default Card;
