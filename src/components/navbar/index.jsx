import React from "react";
import logo from "../../assets/icons/logo.svg";
import navbar from "../../utils/navbar";
import phone from "../../assets/icons/phone.svg";
import Button from "../generic/Button";
import downarr from "../../assets/icons/downarr.svg";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  const location = useLocation();
  return (
    <div className="Wrapper">
      <div className="main_nav-wrap">
        <div className="left">
          <div className="logo_wrap">
            <img src={logo} alt="icon" />
          </div>
        </div>
        <div className="right">
          <div className="nav_links-wrap">
            {navbar.map(({ path, name, id }) => {
              return (
                <Link
                  className={
                    location.pathname.includes(path) ? "active" : "link"
                  }
                  key={id}
                  to={path}
                >
                  {name} <img src={downarr} alt="downarrow" />
                </Link>
              );
            })}
          </div>
          <div className="nav_items-wrap">
            <div className="contact_num">
              <img src={phone} alt="contact" /> 8 (800)-302-40-15
            </div>
            <div className="nav_btn">
              <Button type={"secondary"} width={"190px"} fontSize={"12px"}>
                обратный звонок
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
