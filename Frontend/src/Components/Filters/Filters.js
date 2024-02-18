import React, { useState } from "react";
import "./Filters.scss";
import { CategoriesList } from "../../Data/Categories";
import {
  AvailableSizes,
  AvailableColors,
  AvailableTags,
} from "../../Data/Shoes";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import Slider from "react-slider";

const Filters = (props) => {
  const { selectedFilters, setSelectedFilters } = props;
  const [dropdown, setDropdown] = useState({
    size: true,
    color: true,
    category: true,
    gender: true,
    tag: true,
    price: true,
  });

  const handleClick = (filter_type, value) => {
    const filterData = selectedFilters[filter_type];
    filterData.includes(value)
      ? setSelectedFilters({
          ...selectedFilters,
          [filter_type]: filterData.filter((item) => item !== value),
        })
      : setSelectedFilters({
          ...selectedFilters,
          [filter_type]: [...filterData, value],
        });
  };
  return (
    <div className="filters__container">
      <div className="filters__container-filter_type">
        <div className="filters__container-filter_heading">
          <h5>Refine by</h5>
          {dropdown.tag === false ? (
            <FaChevronDown
              onClick={() => setDropdown({ ...dropdown, tag: true })}
            />
          ) : (
            <FaChevronUp
              onClick={() => setDropdown({ ...dropdown, tag: false })}
            />
          )}
        </div>
        {dropdown.tag && (
          <div className="filters__container-filter_expanded">
            {AvailableTags.map((tag) => (
              <div
                className={`app__flex filter_tag ${
                  selectedFilters.tag.includes(tag.tag)
                    ? "filter_tag-selected"
                    : ""
                }`}
                onClick={() => handleClick("tag", tag.tag)}
              >
                {tag.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="filters__container-filter_type">
        <div className="filters__container-filter_heading">
          <h5>Size</h5>
          {dropdown.size === false ? (
            <FaChevronDown
              onClick={() => setDropdown({ ...dropdown, size: true })}
            />
          ) : (
            <FaChevronUp
              onClick={() => setDropdown({ ...dropdown, size: false })}
            />
          )}
        </div>
        {dropdown.size && (
          <div className="filters__container-filter_expanded">
            {AvailableSizes.map((size) => (
              <div
                className={`app__flex filter_size ${
                  selectedFilters.size.includes(size)
                    ? "filter_size-selected"
                    : ""
                }`}
                onClick={() => handleClick("size", size)}
              >
                {size}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="filters__container-filter_type">
        <div className="filters__container-filter_heading">
          <h5>Color</h5>
          {dropdown.color === false ? (
            <FaChevronDown
              onClick={() => setDropdown({ ...dropdown, color: true })}
            />
          ) : (
            <FaChevronUp
              onClick={() => setDropdown({ ...dropdown, color: false })}
            />
          )}
        </div>
        {dropdown.color && (
          <div className="filters__container-filter_expanded">
            {AvailableColors.map((color) => (
              <div
                className={`filter_color ${
                  selectedFilters.color.includes(color)
                    ? "filter_color-selected"
                    : ""
                }`}
                onClick={() => handleClick("color", color)}
                style={{ backgroundColor: `var(--${color}-color)` }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="filters__container-filter_type">
        <div className="filters__container-filter_heading">
          <h5>Category</h5>
          {dropdown.category === false ? (
            <FaChevronDown
              onClick={() => setDropdown({ ...dropdown, category: true })}
            />
          ) : (
            <FaChevronUp
              onClick={() => setDropdown({ ...dropdown, category: false })}
            />
          )}
        </div>
        {dropdown.category && (
          <div className="filters__container-filter_expanded filter_checkbox_expanded">
            {CategoriesList.map((category) => (
              <div
                className="app__flex filter_checkbox"
                onClick={() => handleClick("category", category)}
              >
                {selectedFilters.category.includes(category) ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="filters__container-filter_type">
        <div className="filters__container-filter_heading">
          <h5>Gender</h5>
          {dropdown.gender === false ? (
            <FaChevronDown
              onClick={() => setDropdown({ ...dropdown, gender: true })}
            />
          ) : (
            <FaChevronUp
              onClick={() => setDropdown({ ...dropdown, gender: false })}
            />
          )}
        </div>
        {dropdown.gender && (
          <div className="filters__container-filter_expanded filter_checkbox_expanded">
            {["men", "women"].map((gender) => (
              <div
                className="app__flex filter_checkbox"
                onClick={() => handleClick("gender", gender)}
              >
                {selectedFilters.gender.includes(gender) ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
                {gender}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="filters__container-filter_type">
        <div className="filters__container-filter_heading">
          <h5>Price</h5>
          {dropdown.price === false ? (
            <FaChevronDown
              onClick={() => setDropdown({ ...dropdown, price: true })}
            />
          ) : (
            <FaChevronUp
              onClick={() => setDropdown({ ...dropdown, price: false })}
            />
          )}
        </div>
        {dropdown.price && (
          <div className="filter_price">
            <Slider
              className="filter_price-slider"
              min={0}
              max={1000}
              step={5}
              defaultValue={selectedFilters.price}
              onChange={(values) =>
                setSelectedFilters({ ...selectedFilters, price: values })
              }
            />
            <div className="filter_price-range">
              <p>${selectedFilters.price[0]}</p>
              <p>${selectedFilters.price[1]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
