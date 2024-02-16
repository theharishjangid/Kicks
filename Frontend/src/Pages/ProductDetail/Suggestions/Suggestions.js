import React, { useState } from "react";
import "./Suggestions.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ShoeCard } from "../../../Components";
import { ShoesData } from "../../../Data/Shoes";

const Suggestions = () => {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonStyles, setButtonStyles] = useState({
    Back: {
      backgroundColor: "var(--disable_bg-color)",
      pointerEvents: "none",
    },
    Forward: {},
  });
  const handleBackButton = () => {
    if (currentPage === 2) {
      setButtonStyles({
        ...buttonStyles,
        Back: {
          backgroundColor: "var(--disable_bg-color)",
          pointerEvents: "none",
        },
      });
    } else if (currentPage === 4) {
      setButtonStyles({ ...buttonStyles, Forward: {} });
    }
    setCurrentPage(currentPage - 1);
  };
  const handleNextButton = () => {
    if (currentPage === 1) {
      setButtonStyles({ ...buttonStyles, Back: {} });
    } else if (currentPage === 3) {
      setButtonStyles({
        ...buttonStyles,
        Forward: {
          backgroundColor: "var(--disable_bg-color)",
          pointerEvents: "none",
        },
      });
    }
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="app_flex app__page__container product_detail__suggestion__container">
      <div className="product_detail__suggestion__container-heading">
        <h3>You may also like</h3>
        <div>
          <IoIosArrowBack
            onClick={handleBackButton}
            style={buttonStyles.Back}
          />
          <IoIosArrowForward
            onClick={handleNextButton}
            style={buttonStyles.Forward}
          />
        </div>
      </div>
      <div className="product_detail__suggestion__container-body">
        {ShoesData.filter((item) => item.tag === "New")
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((shoe, index) => (
            <ShoeCard
              key={index}
              productId={shoe.productId}
              tag={shoe.tag}
              image={shoe.image1}
              name={shoe.name}
              price={shoe.price}
            />
          ))}
      </div>
      <div className="app__flex product_detail__suggestion__container-slider">
        {[1, 2, 3, 4].map((pageNumber, index) => (
          <div key={index} className={pageNumber === currentPage ? "current_page" : ""} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
