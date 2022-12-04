import "./PlaceOrderScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams,useNavigate } from 'react-router-dom';
import CartItemOrder from "../components/CartItemOrder";
import CartItemOrderHor from "../components/CartItemOrderHor";

// Actions
import { getOrderDetails } from "../redux/actions/orderActions";

const AdminOrderDetailsScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.getOrderDetails);
  const { loading, error, order } = orderDetails;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    console.log("ID:", id)
    if (order && id !== order._id) {
      dispatch(getOrderDetails(id));
    }
  }, [dispatch, match, order]);


  return (

    <>
      <div>

<div className="placeOrderScreen">
  <div className="placeOrderScreen__left">
    <div className="row top">
      <div className="col-2">
        <ul>                                            

            <div className="ship_info">
              <h2>Shipping Address</h2>
                <p>
                  <span className="fullname"><strong>Name: </strong>{order._id}</span><br />
    
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


</div>
    </>
    
  );
};

export default AdminOrderDetailsScreen;