import React, { useState, useEffect } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import CartItemOrder from "../components/CartItemOrder";
import CartItemOrderHor from "../components/CartItemOrderHor";
import "./PlaceOrderScreen.css";
import StripeCheckout from 'react-stripe-checkout'
import { Link, useNavigate } from 'react-router-dom';
import './PlaceOrderScreen.css'
import { createOrder } from '../redux/actions/orderActions';

export default function PlaceOrderScreen() {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = cart;
  const { cartItems_hor } = cart;
  const { shippingAddress } = cart;
  const name = cart.billingAddress.fullName;

  const [ema, setEma] = useState({
    name: "fehmi",
    lastname: "leci",
    email: "femo@live.it",
  });
  const [final_price_naradni, setFinalPriceNaradni] = useState(0);
  const [final_priceHor, setfinal_priceHor] = useState(0);

  useEffect(()=> {
    totalfinal_priceHorizontal()
    let reviewPromises = [];
    cartItems.map((item) => (
      
      reviewPromises.push(
        fetch(`http://localhost:5000/api/products/${item.product}`)
        .then(response => response.json())
        .then(data => { return {title: item.product, price: (data.price)*item.qty}}))
      

    ))
       // console.log("DD, ", reviewPromises)

       Promise.all(reviewPromises).then((results) => {
        let total = results.reduce(function (previousValue, currentValue) {
          return previousValue + currentValue.price;
        }, 0);
      
        console.log("Results: ", results);
        console.log("Total:", total);
        setFinalPriceNaradni(total);
      });
       
  }, []);

  const totalfinal_priceHorizontal=()=>{
    let num = 0
    cartItems_hor.map((item) => (
      num = num + calculatefinal_priceHor(item)
    ) )
    setfinal_priceHor(num);
    num = 0;

  }
  const calculatefinal_priceHor=(item)=>{
    let amount = item.amount
    let width = item.width
    let height = item.height
    let lamella_col = item.lamella_color
    let profile_col = item.profile_color

    let aggreg = []
    //console.log("Amount:",amount+" Width:", width +" Height:", height+" Lamella col:", lamella_col+" Profile col:", profile_col)

    let price_width_heigth = getPriceCalculator(amount,width,height)
    console.log("PRICE width heigth: ", price_width_heigth)

    let price_lam = getPriceLamella(lamella_col)
    let price_prof = getPriceProfile(profile_col)

    return (price_width_heigth + Number((((width/1000).toFixed(2)*(height/1000).toFixed(2))*price_prof) + Number(((width/1000).toFixed(2)*(height/1000).toFixed(2))*price_lam)))*amount;
  }

  const getPriceLamella=(lamella_color) =>{
    let lamella = lamella_color.substring(0, 3);
    //let lamella_perforovna = lamella_color.substring(12, lamella_color.length);
    if(lamella == "W91" || lamella == "W92" || lamella == "W93" || lamella == "W94" || lamella == "W95" || lamella == "W96"){
      return 325;
    }
    else if(lamella_color == ""){
      return 0;
    }else
      return 215;
  }

  const getPriceProfile=(profile_color) =>{

    if(profile_color == "zlatý dub" || profile_color == "třešeň amaretto" || profile_color == "tmavý dub" || 
    profile_color == "vlašský ořech" || profile_color == "sapeli" || profile_color == "přírodní dub"
    || profile_color == "tmavý ořech" || profile_color == "douglas" || profile_color == "borovice horská"){

      return 215;
    }
    else
      return 0;
  }


  const getPriceCalculator = (amount, hor, ver) => {
    
    if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return (293*amount);
    }else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(303*amount);
    }else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        //setPrice(314);
        return(314*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(325*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(336*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(364*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(370*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(378*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(389*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(401*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(410*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(418*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(430*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(470*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(482*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(490*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(501*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(512*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(520*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2000)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(532*amount);
    }
    //--- second line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return (301*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(312*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(323*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(333*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(343*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(369*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(379*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(389*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(400*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(411*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(419*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(430*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(470*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(481*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(491*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(500*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(511*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(521*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(533*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(543*amount);
    }
    //--- third line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return (309*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(321*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(333*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(345*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(357*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(386*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(399*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(410*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(423*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(434*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(446*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(459*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(502*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(514*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(526*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(538*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(550*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(562*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(577*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(588*amount);
    }

    //--- fourth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return (317*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(330*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(348*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(358*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(371*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(403*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(417*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(431*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(445*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(459*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((550 <= Number(ver)) && (Number(ver) < 550))){
        return(474*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(488*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(534*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(547*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(561*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(576*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(590*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(604*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(620*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(635*amount);
    }

    //--- fith line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return (324*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(339*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(354*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(370*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(387*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(420*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(437*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(452*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(469*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(485*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(501*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(518*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(565*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(580*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(598*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(603*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(631*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(645*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(663*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(680*amount);
    }

     //--- sixth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return (327*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(346*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(366*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(383*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(401*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(437*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(453*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(473*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(493*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(509*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(529*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(546*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(596*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(615*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(633*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(652*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(665*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(687*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(709*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(727*amount);
    }

    //--- seventh line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return (333*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(354*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(375*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(396*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(417*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(452*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(473*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(493*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(515*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(535*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(555*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(576*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(628*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(649*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(669*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(689*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(709*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(730*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(752*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(772*amount);
    }

    //--- eigth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return (340*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(363*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(386*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(408*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(430*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(470*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(492*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(520*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(538*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(560*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(582*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(605*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(659*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(682*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(703*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(727*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(749*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(771*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(798*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(818*amount);
    }

     //--- eigth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return (347*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(371*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(395*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(421*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(445*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(487*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(511*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(536*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(560*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(584*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(610*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(634*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(712*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(716*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(739*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(764*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(789*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(813*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(839*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(864*amount);
    }
    //--- eigth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return (347*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(371*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(395*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(421*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(445*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(487*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(511*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(536*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(560*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(584*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(610*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(634*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(712*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(716*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(739*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(764*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(789*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(813*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(839*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(864*amount);
    }

     //--- ninth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return (358*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(381*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(406*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(432*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(461*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(503*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(530*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(567*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(583)*amount;
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(609*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(636*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(663*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(721*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(750*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(775*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(801*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(829*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(855*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(884*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(910*amount);
    }

     //--- tenth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return (374*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(388*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(416*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(446*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(474*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(520*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(548*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(578*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(606*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(635*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(664*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(692*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(753*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(785*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(810*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(839*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(868*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(896*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(928*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(955*amount);
    }

    //--- eleventh line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return (381*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(396*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(427*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(459*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(490*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(537*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(567*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(598*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(629*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(660*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(690*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(722*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(785*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(808*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(836*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(876*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(918*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(939*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(971*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(1002*amount);
    }

    //--- twelweth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return (389*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(405*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(438*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(471*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(504*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(554*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(586*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(619*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(653*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(685*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(717*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(751*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(816*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(842*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(879*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(814*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(947*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(981*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(1016*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(1048*amount);
    }

    //--- thirteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return (402*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(413*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(449*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(483*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(519*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(570*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(605*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(640*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(675*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(710*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(744*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(780*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(847*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(886*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1550 <= Number(ver)) && (Number(ver) < 1550))){
        return(916*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(942*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(987*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(1022*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(1059*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(1094*amount);
    }
    
    //--- fourteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return (409*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(422*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(459*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(494*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(533*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(586*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(624*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(661*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(698*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(736*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(771*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(810*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(878*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(920*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(953*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(989*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1027*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1064*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1118*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1140*amount);
    }

    //--- fifteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return (417*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(429*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(469*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(508*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(548*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(604*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(642*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(682*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(721*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(760*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(798*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(838*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(910*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(954*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(988*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1027*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1066*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1106*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1147*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1185*amount);
    }

    //--- sixteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return (430*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(438*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(480*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(521*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(563*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(620*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(661*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(703*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(744*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(786*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(825*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(868*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(939*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(988*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1024*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1064*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1105*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1147*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1192*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1233*amount);
    }

    //--- sixteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return (438*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(446*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(490*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(533*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(578*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(637*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(680*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(723*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(768*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(811*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(852*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(897*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(972*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1022*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1059*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1102*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1146*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1190*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1235*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1278*amount);
    }
    
    //--- seventeenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return (447*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(454*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(501*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(546*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(592*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(654*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(699*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(744*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(790*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(835*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(880*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(927*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1004*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1056*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1095*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1141*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1186*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1231*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1278*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1324*amount);
    }

    //--- eighteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((2150 <= Number(ver)) && (Number(ver) <= 2200))){
        return (456*amount);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(464*amount);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(510*amount);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(559*amount);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(606*amount);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(671*amount);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(718*amount);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(766*amount);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(813*amount);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(860*amount);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(906*amount);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(956*amount);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1036*amount);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1089*amount);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1131*amount);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1178*amount);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1225*amount);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1273*amount);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((2050 <= Number(ver)) && (Number(ver) <=2200))){
        return(1323*amount);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1370*amount);
    }

  };

  const placeOrderHandler = () => {
    dispatch(createOrder(cart))
  }


  const getCartCount = () => {
    return (cartItems.reduce((qty, item) => Number(item.qty) + qty, 0) + cartItems_hor.reduce((qty, item) => Number(item.qty) + qty, 0));
  };


  const makePayment = token => {

    let tot_price = (final_price_naradni + final_priceHor).toFixed(2)
    const body_1 = {

      name, cartItems, cartItems_hor, token, tot_price, shippingAddress
    }

    const body = {

      token, cart, cartItems, cartItems_hor, tot_price
    }

    const headers = {
      "Content-Type": "application/json"
    }



    return fetch('http://localhost:5000/payment_card', {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("Response ", response)
      const { status } = response;

      if (status === 200) {

        placeOrderHandler()
        navigate('/confirmation');
        console.log("You paid fucker, Status ", status)
        console.log("Token ", token.id)
        console.log("Token mail", token.email)

        return fetch('http://localhost:5000/api/sendmail', {

          method: "POST",
          headers,
          body: JSON.stringify(body_1)
        }).then(response => {

          console.log("email response", response)
          const { status } = response;
          console.log("email response code ", status)

          console.log(token.email)
        }).catch(error => console.log(error))


      }

    })
      .catch(error => console.log(error))

  }


  return (

    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <div className="placeOrderScreen">
        <div className="placeOrderScreen__left">
          <div className="row top">
            <div className="col-2">
              <ul>
                <div className="ship_info">
                  <h2>Billing Address</h2>
                  <p>
                    <span className="fullname"><strong>Name: </strong>{cart.billingAddress.fullName}</span><br />
                    <span className="address"><strong>Address: </strong>{cart.billingAddress.address},&nbsp;
                      {cart.billingAddress.city},&nbsp;{cart.billingAddress.postalCode},&nbsp;
                      {cart.billingAddress.country}</span>
                  </p>
                </div>

                <div className="ship_info">
                  <h2>Shipping Address</h2>
                  <p>
                    <span className="fullname"><strong>Name: </strong>{cart.shippingAddress.fullName_ship}</span><br />
                    <span className="address"><strong>Address: </strong>{cart.shippingAddress.address_ship},&nbsp;
                      {cart.shippingAddress.city_ship},&nbsp;{cart.shippingAddress.postalCode_ship},&nbsp;
                      {cart.shippingAddress.country_ship}</span>
                  </p>
                </div>

                <div className="card card-body">
                  <h2>Order Items</h2>
                  {cartItems.map((item) => (
                    <CartItemOrder
                      key={item.product}
                      item={item}
                    />
                  ))}
                </div>

                <div className="placeOrderScreen__left_bottom">

                  {(
                    cartItems_hor.map((item) => (
                      <CartItemOrderHor
                        key={item.product}
                        item={item}
                      />
                    ))


                  )}

                </div>

              </ul>
              <div className="col-1">

              </div>
            </div>
          </div>
        </div>

        <div className="placeOrderScreen_right">
          <div className="placeOrderScreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>Kč {(final_price_naradni + final_priceHor).toFixed(2)}</p>
          </div>
          <div>
            <StripeCheckout
              stripeKey="pk_test_51KG4qlEJlYE6AglXN3kXqFDvEPL5B9PZDxeZX6JmgsXYzHtxI8olvw9rZhbVqwvWD4CUsJLn79CaH14mwenxsqSe00cd34mY1y"
              token={makePayment}
              name="Purchase Order"
              amount={(final_price_naradni+final_priceHor) * 100}
            >
              <button className="btn-large blue">Pay now with Card</button>
            </StripeCheckout>
          </div>
        </div>
      </div>


    </div>
  )
}