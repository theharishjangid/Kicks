import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Listing.scss";
import { Filters } from "../../../Components";
import { ShoesData } from "../../../Data/Shoes";
import { ShoeCard } from "../../../Components";
import { FaChevronDown } from "react-icons/fa6";
import { IoFilter, IoClose } from "react-icons/io5";
import ReactPaginate from "react-paginate";

const Listing = (props) => {
  const pageSize = 9;
  const totalPages = Math.ceil(ShoesData.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersModal, setFiltersModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    color: [],
    category: [],
    gender: [],
    price: [0, 1000],
    tag: [],
  });
  const [isMaxWidthReached, setIsMaxWidthReached] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMaxWidthReached(window.innerWidth >= 750);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSelectedFilters({
      ...selectedFilters,
      gender: [props.gender],
      category: [props.category],
      tag: [props.tag],
    });
    // eslint-disable-next-line
  }, [props]);

  const handlePageClick = (value) => {
    setCurrentPage(value.selected + 1);
    window.scrollTo(0, 400);
  };
  return (
    <div className="listing__container">
      <div className="listing__container-heading">
        <div>
          <h4>Life Style Shoes</h4>
          <p>{ShoesData.length} items</p>
        </div>
        <div className="app__flex listing__container-heading_tabs">
          <div
            className="listing__container-heading_filters"
            onClick={() => setFiltersModal(true)}
          >
            Filters <IoFilter />
          </div>
          <div>
            Trending <FaChevronDown />
          </div>
        </div>
      </div>
      <div className="app__flex listing__container-body">
        <div className="listing__container-body_filters">
          <h4>Filters</h4>
          <Filters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <div className="listing__container-body_products">
          {ShoesData.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          ).map((shoe) => (
            <ShoeCard
              productId={shoe.productId}
              tag={shoe.tag}
              image={shoe.image1}
              name={shoe.name}
              price={shoe.price}
            />
          ))}
        </div>
      </div>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={isMaxWidthReached ? 2 : 0}
        marginPagesDisplayed={1}
        previousLabel={`<${isMaxWidthReached ? " PREVIOUS" : ""}`}
        nextLabel={`${isMaxWidthReached ? "NEXT " : ""}>`}
        breakLabel="..."
        onPageChange={handlePageClick}
        containerClassName="pagination__container"
        pageLinkClassName="pagination__container-page"
        previousLinkClassName="pagination__container-page"
        nextLinkClassName="pagination__container-page"
        activeLinkClassName="pagination__container-page_active"
      />
      {filtersModal &&
        createPortal(
          <div className="modal__container">
            <div className="filters_modal">
              <h4 className="app__flex">
                Filters <IoClose onClick={() => setFiltersModal(false)} />
              </h4>
              <div className="filters_modal-filters">
                <Filters
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                />
              </div>
              <div className="filters_modal-buttons">
                <div
                  className="app__flex"
                  onClick={() =>
                    setSelectedFilters({
                      size: [],
                      color: [],
                      category: [],
                      gender: [],
                      price: [0, 1000],
                      tag: [],
                    })
                  }
                >
                  Reset
                </div>
                <div
                  className="app__flex"
                  onClick={() => setFiltersModal(false)}
                >
                  Apply
                </div>
              </div>
            </div>
          </div>,
          document.getElementById("modals")
        )}
    </div>
  );
};

export default Listing;
