import React from "react";
import { Link } from "react-router-dom";

function CardItem1(props) {
  return (
    <>
      <li className="home_cards_item">
        <Link className="home_cards_item_link" to={props.path}>
          <figure className="home_cards_item_pic_wrap">
            <img className="home_cards_item_img" alt="card" src={props.src} />
            <div className="overlay">
              <div className="plus_icon"></div>
            </div>
          </figure>
          <div className="home_cards_item_info">
            <h3 className="home_cards_item_text">{props.text}</h3>
            <p className="home_cards_item_informaci">
              {props.informaci} <i className="fa-solid fa-angle-right" />
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem1;
