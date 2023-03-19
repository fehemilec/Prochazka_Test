import React from "react";
import "./ThreePic.css";
export default function ThreePic() {
  return (
    <div className="threepiccontainer">
      <div className="first_row">
        <div className="first_row_first_half">
          <div className="first_row_first_pic">
            {" "}
            <img src="/images/Rectangle_3.png" alt="" />{" "}
          </div>
          <div className="first_row_second_pic">
            {" "}
            <img src="/images/Rectangle_3-1.png" alt="" />{" "}
          </div>
        </div>
        <div className="first_row_second_half">
          <div className="first_row_third_pic">
            {" "}
            <img src="/images/Rectangle_3-2.png" alt="" />{" "}
          </div>
          <div className="first_row_fourth_pic">
            {" "}
            <img src="/images/Rectangle_3-3.png" alt="" />{" "}
          </div>
        </div>
      </div>
      <div className="second_row">
        <div className="second_row_first_half">
          <div className="second_row_first_pic">
            {" "}
            <img src="/images/Rectangle_3-4.png" alt="" />{" "}
          </div>
          <div className="second_row_second_pic">
            {" "}
            <img src="/images/Rectangle_3-5.png" alt="" />{" "}
          </div>
        </div>
        <div className="second_row_second_half">
          <div className="second_row_third_pic">
            {" "}
            <img src="/images/Rectangle_3-6.png" alt="" />{" "}
          </div>
          <div className="second_row_fourth_pic">
            {" "}
            <img src="/images/Rectangle_3-7.png" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
