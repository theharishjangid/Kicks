import React from "react";
import "./Navbar.scss";
import { IoSearch, IoPerson } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="app__container app__navbar__container">
      <ul className="app__navbar__container-left_tab">
        <p>🔥 New Drops</p>
        <p>Men</p>
        <p>Women</p>
      </ul>
      <div className="app__navbar__container-left_menu">
        <HiMenu />
      </div>
      <img src="logo.svg" alt="logo" />
      <div className="app__navbar__container-right_tab">
        <IoSearch />
        <IoPerson />
        <RiShoppingCartLine />
      </div>
    </nav>
  );
};

export default Navbar;
