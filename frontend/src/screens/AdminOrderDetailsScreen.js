import "./AdminOrderDetailsScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { config } from "../environment";
// Actions
import { getOrderDetails as listOrderDetails } from "../redux/actions/orderActions";

// Components
import OrderDetailsHor from "../components/OrderDetailsHor";
import OrderDetailsNahradni from "../components/OrderDetailsNahradni";

const AdminOrderDetailsScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.getOrderDetails);
  const { loading, error, order } = orderDetails;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("userInfo") !== null) {
      let jsonTokenObj = JSON.parse(localStorage.getItem("userInfo"));
      console.log("TOKEN USER, ", jsonTokenObj.token);

      fetch(`${config.url.API_URL}/api/orders/token`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonTokenObj.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message == "Invalid Token") {
            navigate("/admin/login");
          } else if (data.message == "Valid Token") {
            if (order && id !== order._id) {
              dispatch(listOrderDetails(id));
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      navigate("/admin/login");
    }
  }, [dispatch, match, order]);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="adminOrderDetaillScreenContainer">
          <div className="adminOrderDetaillScreen__left">
            <div className="adminOrderDetaillScreen_ship_info">
              <h1>Order Details</h1>
              <hr className="new1" />
              <div className="orderId">
                <h3 className="subHeadline">Shipping Details</h3>
                <span className="label"><b>Order Id:</b>  {order._id}</span>
              </div>
              <div className="clientDetails">                
                <div className="fullname">
                  <span className="firstLabel">Name:  </span>
                  <span>{order.shippingAddress.fullName_ship}</span>
                </div>
                <div className="street">
                  <span className="firstLabel"> Street:  </span>
                  <span>{order.shippingAddress.address_ship}</span>
                </div>
                <div className="city">
                  <span className="firstLabel"> City:  </span>
                  <span>{order.shippingAddress.city_ship}</span>
                </div>
                <div className="post_code">
                  <span className="firstLabel"> Post Code:  </span>
                  <span>{order.shippingAddress.postalCode_ship}</span>
                </div>
                <div className="country">
                  <span className="firstLabel"> Country:  </span>
                  <span>{order.shippingAddress.country_ship}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order_details">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              order.orderItems_hor.map((ord) => (
                <OrderDetailsHor
                  key={ord._id}
                  name={ord.name}
                  amount={ord.amount}
                  price={ord.price}
                  width={ord.width}
                  height={ord.height}
                  control={ord.control}
                  control_length={ord.control_length}
                  lamella_color={ord.lamella_color}
                  profile_color={ord.profile_color}
                />
              ))
            )}

            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              order.orderItems.map((ord) => (
                <OrderDetailsNahradni
                  key={ord._id}
                  name={ord.name}
                  qty={ord.qty}
                  price={ord.price}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminOrderDetailsScreen;
