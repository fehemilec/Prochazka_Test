import {React, useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams,useNavigate } from 'react-router-dom';
import { addToCart_hor } from "../redux/actions/cartActions";
import './Pallete.css';
import '../App.css';
import './Horiz.css';

export default function Horiz() {

    const [amount, setAmount] = useState(1);
    const [hor, setHor] = useState(1);
    const [ver, setVer] = useState(1);
    const [control_len, setControllen] = useState(700);
    const [control_dir, setControl_dir] = useState("vlevo");
    const [lamella_color, setLamellaColor] = useState();
    const [profile_color, setProfileColor] = useState();
    const [priceLam, setPriceLamella] = useState(0);
    const [priceProf, setPriceProfile] = useState(0);

    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { cartItems_hor } = cart;


    //return id of last item in horizontal cart
    function increment (){
        return cartItems_hor.reduce((product, item) => Number(item.product) + 1, 1);
    };

    const addToCartHandler_hor = () => {

       
        dispatch(addToCart_hor(amount, hor, ver, increment(), getFinalPrice(), control_dir, control_len, lamella_color, profile_color,amount));

        console.log("Horiz: " + hor)
       //console.log("Counter: " + this.idCounter)
        navigate("/cart")
      };

      const getFinalPrice = () => {

        return (getPriceCount() + Number(priceProf) + Number(priceLam))*amount;
     }

const control_lr =(e) =>{
   const value = e.target.value;
   setControl_dir(value);

}
const handleLamellaColor =(e) =>{
    const value = e.target.value;
    setLamellaColor(value);
 
 }
 const handleProfileColor =(e) =>{
    const value = e.target.value;
    setProfileColor(value);
 
 }
const handleChange1 = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setAmount(value);
};

const handleChange2 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setHor(value);
  };

const handleChange3 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setVer(value);
  };

const handleChange4 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setControllen(value);
  };


const form1 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form2 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form3 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form4 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form5 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form6 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form7 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form8 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form9 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form10 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form11 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form12 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form13 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form14 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form15 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form16 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form17 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form18 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form19 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form20 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form21 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form22 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form23 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form24 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form25 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form26 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form27 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form28 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form29 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form30 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form31 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form32 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form33 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form34 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form35 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form36 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form37 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form38 = () => {document.getElementById('amount_sp').innerText ='0'; setPriceLamella(0)}
const form41 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form42 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form43 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form44 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form45 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form46 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form47 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form48 = () => {document.getElementById('amount_sp').innerText ='325'; setPriceLamella(325)}
const form49 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form50 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form51 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form52 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form53 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form54 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form55 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form56 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form57 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form58 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form59 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}    
const form60 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form61 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form62 = () => {document.getElementById('amount_sp').innerText ='215'; setPriceLamella(215)}
const form71 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}
const form72 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}
const form73 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}   
const form74 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}
const form75 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}
const form76 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}   
const form77 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}
const form78 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}    
const form79 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}   
const form80 = () => {document.getElementById('amount_2').innerText ='0'; setPriceProfile(0)}    
const form81 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}  
const form82 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}   
const form83 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}
const form84 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}
const form85 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}
const form86 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}
const form87 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}
const form88 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}
const form89 = () => {document.getElementById('amount_2').innerText ='215'; setPriceProfile(215)}

  const getPriceCount = () => {
    
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
  return (

<div>
<div className='horiz-container'>   
            <div className='title'><h3>ISOLINE PRIM</h3></div>      
            <div className='blokVnitrek'>                
                    <div className="stredCol">
                        <div className="stred"> </div>
                    
                    <div className="levy">                        
                        <div className="pocet">
                        <div className="popis">Počet:</div>
                        <div className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="1" value={amount} id="pocet"
                                   name="pocet" maxLength="4" onChange={handleChange1} 
                                   autoComplete="off"/>
                        </div>
                    </div>
                    <div className="sirka">
                        <span className="popis">Šířka:</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="0" value={hor} id="sirka" 
                                   name="sirka" maxLength="4" onChange={handleChange2} 
                                   autoComplete="off"/>
                                <span className="jednotka">mm</span>
                        </span>
                        <span className="limit">300 - 2000 mm</span>
                    </div>
                    <div className="vyska">
                        <span className="popis">Výška:</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="0" value={ver} id="vyska" 
                                   name="vyska" maxLength="4" onChange={handleChange3}
                                   autoComplete="off" />
                            <span className="jednotka">mm</span>
                        </span>
                        <span className="limit">300 - 2200 mm</span>
                    </div>
                    <div className="cenaRozmery">
                        <span className="popis">Cena:</span>
                        <span className="hodnota">
                            <span id="cenaRozmery"> {getPriceCount()} </span> 
                            CZK 
                        </span>
                    </div>
                    </div></div>

                <div className="infoCol">
                    <div className="info">
                        <div className="info_Text">
                            Přicházíme na trh s novou generací ISOLINE žaluzií. Tato žaluzie je koncepčně novým nástupcem generace žaluzií ISOLINE a ISOLINE LOCO. Spojuje v sobě všechny technické přednosti těchto typů. Díky spojení horního profilu a krycí lišty v jeden celek vzniklo kompaktní řešení, které odstraňuje neduhy předchozích generací. Je ovládaná řetízkem a nabízí tradiční barevnou škálu odstínů lamel, barevného sladění horního a dolního profilu.
                                <br /><br />
                            Horizontální žaluzie stále představují nejrozšířenější způsob protisluneční ochrany a staly se nedílnou součástí interiéru, ochraňují nejen proti slunečním paprskům, regulují světlo v místnosti, ale chrání i vaše soukromí. Využití horizontálních žaluzií je mnohostranné a jejich barevná škála dovoluje harmonicky sladit barvy v místnosti s barevnými doplňky a vytvořit tak příjemnou atmosféru dle vašeho vkusu. Výhodou je jejich jednoduchost, rychlost montáže, minimální údržba a cenová dostupnost.
                                <br /><br />
                            Horizontální žaluzii lze zaměřit pomocí návodu.<br />Šíře výrobku je šíře lamel, horní držáky přesahují tuto šíři na každé straně o 35 mm.
                                <br /><br />
                            Důležitá je hloubka zasklívací lišty. V případě, že je menší nez 19 mm, je nutné doobjednat speciální vymezovací podložky. Žaluzie se musí v okně volně pohybovat! 
                                <br /><br />
                            <b>Pozor některá okna nemusí být zcela rovná, měřte proto šířku v různých výškách.</b>
                                <br /><br />
                        </div>
                        <div className='manual_and_contact'>
                           <span>
                           Pro správné určení rozměrů se podívejte na <a className='first_link' href="https://www.google.com/">video návod</a> nebo si přečtěte <a className='second_link' href="https://www.google.com/">návod zaměření</a>.     
                                <br />
                                Pokud si chcete objednat zaměření naším technikem, pak nás neváhejte <a className='third_link' href="https://www.google.com/">kontaktovat</a>.
                            </span> 
                        </div>

                        <div className='ph_contact'>
                            <span className='contact_span'> 
                                Nevíte si rady se zaměřením? Máte jiný požadavek? <br /> Volejte <b>+420 777 292 384</b>
                            </span> 
                            <i className="fa fa-phone"></i>
                        </div>

                        <div className='links'>
                            <ul>
                                <li className='link_one'>
                                <i className="fa fa-caret-right"></i> <a href="https://www.google.com/">Video návod na zaměření</a>
                                </li>
                                <li>
                                <i className="fa fa-caret-right"></i> <a href="https://www.google.com/">Video návod na montáž</a>
                                </li>
                                <li className='link_three'>
                                <i className="fa fa-caret-right"></i> <a href="https://www.google.com/">Návod na zaměření [PDF]</a>
                                </li>
                                <li>
                                <i className="fa fa-caret-right"></i> <a href="https://www.google.com/">Návod na údržbu</a>
                                </li>
                            </ul> 
                        </div>

                    </div>
                </div> 

            </div>
                <div className = 'further_options'>                         
                    <div className='radio_cell'>                
                        <div className="stahovaniPopis"> Strana ovládání </div>                    
                        <div className="stahovaniHodnoty" onChange={control_lr}>
                            <div>                        
			                <label>
                                <div className = 'vlevo'/>
                                <div className = 'hh1'>
                                    <input type="radio" name={'ovladani'} id={'vlevo'} value={'vlevo'}
                                        defaultChecked ={'true'}/>
                                    <span>vlevo</span>      
                                </div>                      
                            </label>
                            </div>
                            <div>                        
			                <label>
                                <div className = 'vpravo'/>
                                <div className = 'hh1'>
                                    <input type="radio" name={'ovladani'} id={'vpravo'} value={'vpravo'}/>
                                    <span>vpravo</span>      
                                </div>                      
                            </label>
                            </div>                        
                        </div> 
                    </div>        
                    <div className="delka_brzda">               
                      <div className="delkaOvladani">
                        <span className="popis">Délka ovládání</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="700" value={control_len} name="delkaOvladani"
                                    maxLength="4" onChange={handleChange4} />
                            <span className="jednotka">mm</span>
                        </span>
                      </div>
                      <div className="brzda">
                        <input type="checkbox" name="brzda" id="brzda" />
                        <label htmlFor="brzda" className="hodnota">
                            <span className="nazev">
                                Brzda (zastaví žaluzii v požadované poloze/zabrání samovolnému sjíždění)
                                <span className="cena"><br /> +25 CZK </span>
                            </span>
                        </label>
                      </div>
                    </div>
                </div>
        </div>

  <div className='pallete_container'>
            <div className='pallete1' onChange={handleLamellaColor}>
                <div className='titleBar_1'>
                <span className="palleteTitle"> <i className='fas fa-paint-roller'></i>ZÁKLADNÍ BARVY</span> 
                </div>
                <div className='subPallete1'>
                    
                    <div className='palleteshh'>
            {/*------------------------------------------------------------------------------------*/}
            <div>                        
			            <label>
                            <div className = 'label_class_1'/>
                            <div className = 'hh'>
                                <input type="radio" name="palleteInput" id="1" value="bílá lesklá" onClick={form1}/>
                                <span>bílá lesklá</span>      
                            </div>                      
                        </label>
                    </div>
                        
                    <div>                        
			            <label>
                            <div className = 'label_class_2'/>
                            <div className = 'hh'>
                                <input type="radio" name="palleteInput" id="2" value="bílá matná" onClick={form2}/>
                                <span>bílá matná</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className = 'label_class_3'/>
                            <div className = 'hh'>
                                <input type="radio" name="palleteInput" id="3" value="stříbrná hladká" onClick={form3}/>
                                <span>stříbrná hladká</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_4'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="4" value="perleťová stříbrná" onClick={form4}/>
                                <span>perleťová stříbrná</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_5'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="5" value="metalická stříbrná" onClick={form5}/>
                                <span>metalická stříbrná</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_6'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="6" value="matná slonová kost" onClick={form6}/>
                                <span>matná slonová kost</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_7'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="7" value="lesklá slonová kost" onClick={form7}/>
                                <span>lesklá slonová kost</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_8'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="8" value="matná bílé kafe" onClick={form8}/>
                                <span>matná bílé kafe</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_9'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="9" value="lesklá bílé kafe" onClick={form9}/>
                                <span>lesklá bílé kafe</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_10'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="10" value="matná béžová" onClick={form10}/>
                                <span>matná béžová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_11'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="11" value="matná světle béžová" onClick={form11}/>
                                <span>matná světle béžová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_12'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="12" value="světle šedá" onClick={form12}/>
                                <span>světle šedá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_13'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="13" value="perleťová zlatá" onClick={form13}/>
                                <span>perleťová zlatá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_14'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="14" value="metalická tmavá zlatá" onClick={form14}/>
                                <span>metalická tmavá zlatá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_15'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="15" value="metalická červené zlato" onClick={form15}/>
                                <span>metalická červené zlato</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_16'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="16" value="perleťová červené zlato" onClick={form16}/>
                                <span>perleťová červené zlato</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_17'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="17" value="lesklá tělová" onClick={form17}/>
                                <span>lesklá tělová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_18'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="18" value="lesklá světle modrá" onClick={form18}/>
                                <span>lesklá světle modrá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_19'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="19" value="perleťová světle modrá" onClick={form19}/>
                                <span>perleťová světle modrá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_20'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="20" value="metalická modrá" onClick={form20}/>
                                <span>metalická modrá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_21'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="21" value="lesklá modrá" onClick={form21}/>
                                <span>lesklá modrá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_22'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="22" value="lesklá růžová" onClick={form22}/>
                                <span>lesklá růžová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_23'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="23" value="metalická růžová" onClick={form23}/>
                                <span>metalická růžová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_24'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="24" value="perleťová růžová" onClick={form24}/>
                                <span>perleťová růžová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_25'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="25" value="lesklá červená" onClick={form25}/>
                                <span>lesklá červená</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_26'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="26" value="metalická zelenomodrá" onClick={form26}/>
                                <span>metalická zelenomodrá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_27'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="27" value="lesklá pastelová zelená/hrášková" onClick={form27}/>
                                <span>lesklá pastelová zelená/hrášková</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_28'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="28" value="lesklá zelená" onClick={form28}/>
                                <span>lesklá zelená</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_29'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="29" value="lesklá žlutá" onClick={form29}/>
                                <span>lesklá žlutá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_30'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="30" value="lesklá světle hnědá" onClick={form30}/>
                                <span>lesklá světle hnědá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_31'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="31" value="lesklá hnědá" onClick={form31}/>
                                <span>lesklá hnědá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_32'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="32" value="metalická šedohnědá" onClick={form32}/>
                                <span>metalická šedohnědá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_33'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="33" value="perleťová šedohnědá světlá" onClick={form33}/>
                                <span>perleťová šedohnědá světlá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_34'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="34" value="perleťová hnědá" onClick={form34}/>
                                <span>perleťová hnědá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_35'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="35" value="lesklá antracit" onClick={form35}/>
                                <span>lesklá antracit</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_36'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="36" value="lesklá černá" onClick={form36}/>
                                <span>lesklá černá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_37'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="37" value="stříbrná líc/bílá rub" onClick={form37}/>
                                <span>stříbrná líc/bílá rub</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_38'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="38" value="stříbrná líc/zlatá rub" onClick={form38}/>
                                <span>stříbrná líc/zlatá rub</span>      
                            </div>                      
                        </label>
                    </div>
            
            {/*------------------------------------------------------------------------------------*/}
                    </div>
                </div>
                <div className='titleBar_1'>
                <div className='p_title'>
                <i className='fas fa-paint-roller'></i>
                <span className="palleteTitle">PŘÍPLATKOVÉ BARVY</span></div>
                        <span className="amount">
                            <span id="amount_sp"> 0 </span> Kč / m<sup>2</sup></span>
                </div>
                <div className='subPallete2'>
                   

                    <div className='palleteshh1'>
                        
                    <div>                        
			            <label>
                            <div className= 'label_class_41'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="41" value="W91 IMITACE DŘEVA" onClick={form41}/>
                                <span>W91 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_42'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="42" value="W92 IMITACE DŘEVA" onClick={form42}/>
                                <span>W92 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_43'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="43" value="W93 IMITACE DŘEVA" onClick={form43}/>
                                <span>W93 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>
                       
                    <div>                        
			            <label>
                            <div className= 'label_class_44'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="44" value="W94 IMITACE DŘEVA" onClick={form44}/>
                                <span>W94 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_45'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="45" value="W95 IMITACE DŘEVA" onClick={form45}/>
                                <span>W95 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_46'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="46" value="W96 IMITACE DŘEVA" onClick={form46}/>
                                <span>W96 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_47'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="47" value="W97 IMITACE DŘEVA" onClick={form47}/>
                                <span>W97 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_48'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="48" value="W98 IMITACE DŘEVA" onClick={form48}/>
                                <span>W98 IMITACE DŘEVA</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_49'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="49" value="perforovaná bílá" onClick={form49}/>
                                <span>perforovaná bílá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_50'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="50" value="perforovaná stříbrná" onClick={form50}/>
                                <span>perforovaná stříbrná</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_51'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="51" value="perforovaná béžová" onClick={form51}/>
                                <span>perforovaná béžová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_52'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="52" value="perforovaná šedá" onClick={form52}/>
                                <span>perforovaná šedá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_53'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="53" value="perforovaná slonová kost" onClick={form53}/>
                                <span>perforovaná slonová kost</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_54'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="54" value="šikmý proužek bílá" onClick={form54}/>
                                <span>šikmý proužek bílá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_55'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="55" value="šikmý proužek stříbrná" onClick={form55}/>
                                <span>šikmý proužek stříbrná</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_56'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="56" value="šikmý proužek zlatá" onClick={form56}/>
                                <span>šikmý proužek zlatá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_57'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="57" value="matná světle šedá" onClick={form57}/>
                                <span>matná světle šedá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_58'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="58" value="matná tělová" onClick={form58}/>
                                <span>matná tělová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_59'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="59" value="matná cihlová" onClick={form59}/>
                                <span>matná cihlová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_60'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="60" value="matná béžová" onClick={form60}/>
                                <span>matná béžová</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_61'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="61" value="matná šedá" onClick={form61}/>
                                <span>matná šedá</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_62'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput" id="62" value="matná světle šedá" onClick={form62}/>
                                <span>matná světle šedá</span>      
                            </div>                      
                        </label>
                    </div>                    
                    </div>
                </div>
            </div>
            <div className='titleBar_1'>
            <div className='p_title'>
                        <i className='fas fa-paint-roller'></i>
                        <span className="palleteTitle">BARVA HORNÍHO A DOLNÍHO PROFILU</span>
                        </div>
                        <span className="amount">
                                <span id="amount_2"> 0 </span> Kč / bm</span>
            </div>
            <div className='pallete2'>
            
            <div className='palleteshh2' onChange={handleProfileColor}>

                    <div>                        
			            <label>
                            <div className= 'label_class_71'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="71" value="bílá 9010" onClick={form71}/>
                                <span>bílá 9010</span>      
                            </div>                      
                        </label>
                    </div>


                    <div>                        
			            <label>
                            <div className= 'label_class_72'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="72" value="slonová kost 1013" onClick={form72}/>
                                <span>slonová kost 1013</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_73'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="73" value="pinie 8023" onClick={form73}/>
                                <span>pinie 8023</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_74'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="74" value="světle hnědá 8003" onClick={form74}/>
                                <span>světle hnědá 8003</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_75'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="75" value="kaštan 8004" onClick={form75}/>
                                <span>kaštan 8004</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_76'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="76" value="tmavě hnědá 8019" onClick={form76}/>
                                <span>tmavě hnědá 8019</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_77'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="77" value="stříbrná 9006" onClick={form77}/>
                                <span>stříbrná 9006</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_78'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="78" value="perleť červené zlato 0700" onClick={form78}/>
                                <span>perleť červené zlato 0700</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_79'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="79" value="perleť zlatá 0714" onClick={form79}/>
                                <span>perleť zlatá 0714</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_80'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="80" value="antracit 7016" onClick={form80}/>
                                <span>antracit 7016</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_81'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="81" value="zlatý dub" onClick={form81}/>
                                <span>zlatý dub</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_82'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="82" value="třešeň amaretto" onClick={form82}/>
                                <span>třešeň amaretto</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_83'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="83" value="tmavý dub" onClick={form83}/>
                                <span>tmavý dub</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_84'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="84" value="vlašský ořech" onClick={form84}/>
                                <span>vlašský ořech</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_85'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="85" value="sapeli" onClick={form85}/>
                                <span>sapeli</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_86'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="86" value="přírodní dub" onClick={form86}/>
                                <span>přírodní dub</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_87'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="87" value="tmavý ořech" onClick={form87}/>
                                <span>tmavý ořech</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_88'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="88" value="douglas" onClick={form88}/>
                                <span>douglas</span>      
                            </div>                      
                        </label>
                    </div>

                    <div>                        
			            <label>
                            <div className= 'label_class_89'/>
                            <div className= 'hh'>
                                <input type="radio" name="palleteInput1" id="89" value="borovice horská" onClick={form89}/>
                                <span>borovice horská</span>      
                            </div>                      
                        </label>
                    </div>
            </div>
            </div>
            <div className='formOptions'>
                <div className="formCol">
                    <div className="col">
                        <span className="colLabel">Provedení</span>
		                <select name="sel[1]">
			                <option value="domykatelné">domykatelné</option>
			                <option value="standardní">standardní</option>
		                </select>
		                <span className="info">(více naleznete v sekci TECHNICKÝ POPIS)</span>
	                </div>
	                <div className="col">
		                <span className="colLabel">Barva žebříčků</span>
		                <select name="sel[2]">
			                <option value="shodná s barvou lamely">shodná s barvou lamely</option>
			                <option value="bílá">bílá</option>
		                </select>
		                <span className="info">(svislá spojnice lamel)</span>
	                </div>
	                <div className="col">
		                <span className="colLabel">Okno z materiálu</span>
		                <select name="sel[3]">
			                <option value="plastové okno">plastové okno</option>
			                <option value="dřevěné okno">dřevěné okno</option>
		                </select>
		                <span className="info">Dle materiálu okna se přikládá vhodný spojovací materiál.</span>
	                </div>
	                <div className="col">
		                <span className="colLabel">Podložky</span>
		                <select name="sel[4]">
			                <option value="žádné">žádné</option>
			                <option value="1 sada">1 sada</option>
			                <option value="2 sady">2 sady</option>
		                </select>
		                <span className="info">zdarma</span>
	                </div>
	                <div className="col">
		                <input type="checkbox" name="sel[5]" id="sel5"/>
			            <label htmlFor="sel5" className="hodnota">
				            <span className="colLabel">Vrták</span>				            
			            </label>
                        <span className="info">zdarma (2.5 mm do plastových oken, 4 mm do dřevěných oken)</span>
		            </div>
	            </div>
            </div>
            <div className="priceandsubmit">
                <div className='ps'>
                <span className="psLabel">CELKOVÁ CENA:</span>
                <span className="psPrice">
                    <span className="total" id="total"> {getFinalPrice()} </span> Kč vč. DPH
                </span>
                <input type="submit" value="cart" id="btnSubmit" name="cart"/>
                <label htmlFor="btnSubmit" className="btnSubmit">                   
                    <span className="addToCart">VLOŽIT DO KOŠÍKU</span>
                </label>
                </div>
            </div>
      </div>
    </div>
)
}