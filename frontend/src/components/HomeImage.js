import React from "react";
import "./HomeImage.css";
import { Link } from "react-router-dom";

function HomeImage() {
  return (
    <div className="main_image">
      <div className="home_image_text">
        <div className="home_image_title">
          <h1>
            <p>
              Vyberte si žaluzie <br /> na míru Vašim <br />
              <span>potřebám</span>{" "}
            </p>
            <img src="/images/title_arrow.png" alt="" />
          </h1>
        </div>
        <div className="home_image_subtitle">
          Žaluzie vyberete jednoduše online a ušetříte tak čas i peníze. Jsme na
          v oboru již více než 26 let a díky tomu jsme schopni dodat kvalitní
          produkty za nejnižší ceny na trhu.
        </div>
        <div className="home_image_button">
          <Link to="/services" className="home_image_button_text">
            Výběr žaluzií{" "}
          </Link>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
      <img src="/images/horizontal_blind_pic.png" alt="" />
    </div>
  );
}

export default HomeImage;
