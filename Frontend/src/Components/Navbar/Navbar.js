import React from "react";
import "./Navbar.scss";
import { IoSearch, IoPerson } from "react-icons/io5";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import useCart from "../../Context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <nav className="app__container app__navbar__container">
      <ul className="app__flex app__navbar__container-left_tab">
        <Link
          to={{
            pathname: "/products",
            search: new URLSearchParams({ tag: "New" }).toString(),
          }}
        >
          🔥 New Drops
        </Link>
        <Link
          to={{
            pathname: "/products",
            search: new URLSearchParams({ gender: "men" }).toString(),
          }}
        >
          Men
        </Link>
        <Link
          to={{
            pathname: "/products",
            search: new URLSearchParams({ gender: "women" }).toString(),
          }}
        >
          Women
        </Link>
      </ul>
      <div className="app__navbar__container-left_menu">
        <HiMenu />
      </div>
      <Link to="/">
        <img src="logo.svg" alt="logo" />
      </Link>
      <div className="app__flex app__navbar__container-right_tab">
        <IoSearch className="search_bar" />
        <Link to="/login">
          <IoPerson />
        </Link>
        <Link to="/cart">
          <div className="app__flex cart__count">
            {cartItems.length > 0 ? (
              <RiShoppingCartFill />
            ) : (
              <RiShoppingCartLine />
            )}
            {cartItems.length > 0 && (
              <span className="app__flex">{cartItems.length}</span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
