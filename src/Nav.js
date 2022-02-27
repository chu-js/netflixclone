import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://www.freepnglogos.com/uploads/among-us-png/green-among-us-png-character-0.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
