import "./PlaceOrderScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams,useNavigate } from 'react-router-dom';

// Actions
import { getOrderDetails as listOrderDetails } from "../redux/actions/orderActions";

const AdminOrderDetailsScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.getOrderDetails);
  const { loading, error, order } = orderDetails;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (order && id !== order._id) {
      dispatch(listOrderDetails(id));
    }
  }, [dispatch, match, order]);


  return (

    <>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>

            <div className="placeOrderScreen">
              <div className="placeOrderScreen__left">
                <div className="row top">
                  <div className="col-2">
                    <ul>                                            

                        <div className="ship_info">
                          <h2>Shipping Address</h2>
                            <p>
                              <span className="fullname"><strong>Name: </strong>{order.shippingAddress.fullName_ship}</span><br />
                              <span className="street"><strong>Street: </strong>{order.shippingAddress.address_ship}</span><br />
                              <span className="city"><strong>City: </strong>{order.shippingAddress.city_ship}</span><br />
                              <span className="post_code"><strong>Post Code: </strong>{order.shippingAddress.postalCode_ship}</span><br />
                              <span className="country"><strong>Country: </strong>{order.shippingAddress.country_ship}</span><br />
                              <span className="productt"><strong>Name Product: </strong>{order.orderItems_hor[0].name}</span><br />


                
                            </p>
                        </div>
                    
                        
                        </ul>
                    <div className="col-1">

                    </div>
                </div>
            </div>
            </div>

            <div className="placeOrderScreen_right">
            <div className="placeOrderScreen__info">

            </div>
            <div>
              <button className="btn-large blue">Pay now with Card</button>
            </div>
            </div>
            </div>

        </>
      )}

  


    </>

    
    
  );
};

export default AdminOrderDetailsScreen;