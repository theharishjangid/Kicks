import React, { useState } from "react";
import "./Details.scss";
import { ShoesData, AvailableSizes } from "../../../Data/Shoes";
import { BsCircleFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

const Details = (props) => {
  const product_details = ShoesData.filter(
    (item) => item.productId === props.productId
  )[0];
  const [selectedColor, setSelectedColor] = useState(product_details.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product_details.sizes[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    product_details.image1,
    product_details.image2,
    product_details.image3,
    product_details.image4,
  ];
  return (
    <div className="app__page__container product_detail__details__container">
      <div className="product_detail__details__container-images">
        {images.map((image) => (
          <img src={image} alt={props.name} />
        ))}
      </div>
      <div className="product_detail__details__container-images_carousel">
        <div className="images_carousel-main">
          <img src={images[imageIndex]} alt={props.name} />
          <div className="images_carousel-indicators">
            {[0, 1, 2, 3].map((imageNumber, index) => (
              <div
                key={index}
                className={imageNumber === imageIndex ? "current_image" : ""}
              />
            ))}
          </div>
        </div>
        <div className="images_carousel-all">
          {images.map((image, index) => (
            <img
              src={image}
              alt={props.name}
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="product_detail__details__container-details">
        {product_details.tag === "New" ? (
          <div className="new_release_tag">New Release</div>
        ) : null}
        <h4>{product_details.name}</h4>
        <h5>${product_details.price}</h5>
        <h6>Color</h6>
        <div className="colors_list">
          {product_details.colors.map((color, index) => (
            <BsCircleFill
              key={index}
              className={
                selectedColor === color ? "selected-color" : "default-color"
              }
              onClick={() => setSelectedColor(color)}
              style={{ color: `var(--${color}-color)` }}
            />
          ))}
        </div>
        <h6>Size</h6>
        <div className="sizes_list">
          {AvailableSizes.map((size, index) => (
            <div
              key={index}
              className={
                product_details.sizes.includes(size)
                  ? selectedSize === size
                    ? "selected-size"
                    : "default-size"
                  : "not_available-size"
              }
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <div className="product_detail__details__container-buttons">
          <div className="app__flex">
            <button>Add to cart</button>
            <FaRegHeart />
          </div>
          <button>Buy it now</button>
        </div>
        <h6>About the product</h6>
        <p className="product_title">
          {product_details.title}
          <br />
          {product_details.description}
        </p>
      </div>
    </div>
  );
};

export default Details;
