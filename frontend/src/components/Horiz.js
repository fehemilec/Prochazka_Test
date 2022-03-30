import {React, useState, useEffect} from 'react';
import '../App.css';
import './Horiz.css';

function Horiz() {
    const [age1, setAge1] = useState(0);
    const [hor, setHor] = useState(0);
    const [ver, setVer] = useState(1);
    const [age4, setAge4] = useState(1);

const handleChange1 = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setAge1(value);
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
    setAge4(value);
  };

  const getPriceCount = () => {
    
    if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return (293);
    }else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(303);
    }else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(314);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(325);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(336);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(364);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(370);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(378);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(389);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(401);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(410);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(418);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(430);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(470);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(482);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(490);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(501);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(512);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(520);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2000)) && ((250 <= Number(ver)) && (Number(ver) < 350))){
        return(532);
    }
    //--- second line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return (301);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(312);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(323);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(333);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(343);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(369);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(379);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(389);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(400);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(411);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(419);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(430);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(470);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(481);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(491);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(500);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(511);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(521);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(533);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((350 <= Number(ver)) && (Number(ver) < 450))){
        return(543);
    }
    //--- third line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return (309);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(321);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(333);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(345);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(357);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(386);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(399);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(410);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(423);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(434);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(446);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(459);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(502);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(514);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(526);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(538);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(550);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(562);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(577);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((450 <= Number(ver)) && (Number(ver) < 550))){
        return(588);
    }

    //--- fourth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return (317);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(330);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(348);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(358);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(371);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(403);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(417);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(431);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(445);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(459);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((550 <= Number(ver)) && (Number(ver) < 550))){
        return(474);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(488);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(534);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(547);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(561);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(576);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(590);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(604);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(620);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((550 <= Number(ver)) && (Number(ver) < 650))){
        return(635);
    }

    //--- fith line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return (324);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(339);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(354);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(370);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(387);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(420);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(437);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(452);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(469);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(485);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(501);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(518);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(565);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(580);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(598);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(603);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(631);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(645);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(663);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((650 <= Number(ver)) && (Number(ver) < 750))){
        return(680);
    }

     //--- sixth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return (327);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(346);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(366);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(383);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(401);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(437);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(453);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(473);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(493);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(509);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(529);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(546);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(596);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(615);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(633);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(652);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(665);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(687);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(709);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((750 <= Number(ver)) && (Number(ver) < 850))){
        return(727);
    }

    //--- seventh line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return (333);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(354);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(375);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(396);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(417);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(452);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(473);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(493);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(515);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(535);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(555);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(576);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(628);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(649);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(669);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(689);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(709);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(730);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(752);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((850 <= Number(ver)) && (Number(ver) < 950))){
        return(772);
    }

    //--- eigth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return (340);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(363);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(386);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(408);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(430);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(470);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(492);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(520);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(538);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(560);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(582);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(605);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(659);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(682);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(703);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(727);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(749);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(771);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(798);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((950 <= Number(ver)) && (Number(ver) < 1050))){
        return(818);
    }

     //--- eigth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return (347);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(371);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(395);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(421);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(445);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(487);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(511);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(536);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(560);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(584);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(610);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(634);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(712);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(716);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(739);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(764);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(789);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(813);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(839);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(864);
    }
    //--- eigth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return (347);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(371);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(395);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(421);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(445);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(487);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(511);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(536);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(560);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(584);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(610);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(634);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(712);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(716);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(739);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(764);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(789);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(813);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(839);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1050 <= Number(ver)) && (Number(ver) < 1150))){
        return(864);
    }

     //--- ninth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return (358);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(381);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(406);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(432);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(461);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(503);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(530);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(567);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(583);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(609);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(636);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(663);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(721);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(750);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(775);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(801);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(829);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(855);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(884);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1150 <= Number(ver)) && (Number(ver) < 1250))){
        return(910);
    }

     //--- tenth line of table ---
    
     else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return (374);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(388);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(416);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(446);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(474);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(520);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(548);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(578);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(606);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(635);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(664);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(692);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(753);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(785);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(810);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(839);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(868);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(896);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(928);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1250 <= Number(ver)) && (Number(ver) < 1350))){
        return(955);
    }

    //--- eleventh line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return (381);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(396);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(427);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(459);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(490);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(537);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(567);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(598);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(629);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(660);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(690);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(722);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(785);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(808);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(836);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(876);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(918);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(939);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(971);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1350 <= Number(ver)) && (Number(ver) < 1450))){
        return(1002);
    }

    //--- twelweth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return (389);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(405);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(438);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(471);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(504);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(554);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(586);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(619);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(653);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(685);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(717);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(751);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(816);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(842);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(879);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(814);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(947);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(981);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(1016);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1450 <= Number(ver)) && (Number(ver) < 1550))){
        return(1048);
    }

    //--- thirteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return (402);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(413);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(449);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(483);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(519);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(570);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(605);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(640);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(675);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(710);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(744);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(780);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(847);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(886);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1550 <= Number(ver)) && (Number(ver) < 1550))){
        return(916);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(942);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(987);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(1022);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(1059);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1550 <= Number(ver)) && (Number(ver) < 1650))){
        return(1094);
    }
    
    //--- fourteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return (409);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(422);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(459);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(494);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(533);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(586);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(624);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(661);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(698);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(736);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(771);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(810);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(878);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(920);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(953);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(989);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1027);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1064);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1118);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1650 <= Number(ver)) && (Number(ver) < 1750))){
        return(1140);
    }

    //--- fifteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return (417);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(429);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(469);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(508);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(548);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(604);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(642);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(682);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(721);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(760);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(798);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(838);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(910);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(954);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(988);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1027);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1066);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1106);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1147);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1750 <= Number(ver)) && (Number(ver) < 1850))){
        return(1185);
    }

    //--- sixteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return (430);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(438);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(480);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(521);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(563);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(620);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(661);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(703);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(744);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(786);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(825);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(868);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(939);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(988);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1024);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1064);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1105);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1147);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1192);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1850 <= Number(ver)) && (Number(ver) < 1950))){
        return(1233);
    }

    //--- sixteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return (438);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(446);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(490);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(533);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(578);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(637);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(680);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(723);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(768);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(811);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(852);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(897);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(972);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1022);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1059);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1102);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1146);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1190);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1235);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((1950 <= Number(ver)) && (Number(ver) < 2050))){
        return(1278);
    }
    
    //--- seventeenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return (447);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(454);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(501);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(546);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(592);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(654);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(699);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(744);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(790);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(835);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(880);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(927);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1004);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1056);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1095);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1141);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1186);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1231);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1278);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((2050 <= Number(ver)) && (Number(ver) < 2150))){
        return(1324);
    }

    //--- eighteenth line of table ---
    
    else if( ((250 <= Number(hor)) && (Number(hor) < 350)) && ((2150 <= Number(ver)) && (Number(ver) <= 2200))){
        return (456);
    }
    else if( ((350 <= Number(hor)) && (Number(hor) < 450)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(464);
    }
    else if( ((450 <= Number(hor)) && (Number(hor) < 550)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(510);
    }
    else if( ((550 <= Number(hor)) && (Number(hor) < 650)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(559);
    }
    else if( ((650 <= Number(hor)) && (Number(hor) < 750)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(606);
    }
    else if( ((750 <= Number(hor)) && (Number(hor) < 850)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(671);
    }
    else if( ((850 <= Number(hor)) && (Number(hor) < 950)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(718);
    }
    else if( ((950 <= Number(hor)) && (Number(hor) < 1050)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(766);
    }
    else if( ((1050 <= Number(hor)) && (Number(hor) < 1150)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(813);
    }
    else if( ((1150 <= Number(hor)) && (Number(hor) < 1250)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(860);
    }
    else if( ((1250 <= Number(hor)) && (Number(hor) < 1350)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(906);
    }
    else if( ((1350 <= Number(hor)) && (Number(hor) < 1450)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(956);
    }
    else if( ((1450 <= Number(hor)) && (Number(hor) < 1550)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1036);
    }
    else if( ((1550 <= Number(hor)) && (Number(hor) < 1650)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1089);
    }
    else if( ((1650 <= Number(hor)) && (Number(hor) < 1750)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1131);
    }
    else if( ((1750 <= Number(hor)) && (Number(hor) < 1850)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1178);
    }
    else if( ((1850 <= Number(hor)) && (Number(hor) < 1950)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1225);
    }
    else if( ((1950 <= Number(hor)) && (Number(hor) < 2050)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1273);
    }
    else if( ((2050 <= Number(hor)) && (Number(hor) < 2150)) && ((2050 <= Number(ver)) && (Number(ver) <=2200))){
        return(1323);
    }
    else if( ((2150 <= Number(hor)) && (Number(hor) <= 2200)) && ((2050 <= Number(ver)) && (Number(ver) <= 2200))){
        return(1370);
    }


  };
  return (
    <div className='horiz-container'>                          
        <div className='blokVnitrek'>
            <div className="levy">
                <h3>ISOLINE PRIM</h3>
            <div className="pocet">
                <span className="popis">Zadejte počet</span>
                <span className="hodnota">
                    <textarea type="text" className="hodnota" defaultValue="1" value={age1} id="pocet"
                           name="pocet" maxLength="4" onChange={handleChange1} 
                           onKeyDown="LUKY.prepocitejCenu()" autoComplete="off"/>
                </span>
            </div>
            <div className="sirka">
                <span className="popis">Zadejte šířku</span>
                <span className="hodnota">
                    <textarea type="text" className="hodnota" defaultValue="0" value={hor} id="sirka" 
                           name="sirka" maxLength="4" onChange={handleChange2} 
                           onKeyDown="LUKY.prepocitejCenu()" autoComplete="off"/>
                        <span className="jednotka">mm</span>
                </span>
            </div>
            <div className="vyska">
                <span className="popis">Zadejte výšku</span>
                <span className="hodnota">
                    <textarea type="text" className="hodnota" defaultValue="0" value={ver} id="vyska" 
                           name="vyska" maxLength="4" onChange={handleChange3}
                           onKeyDown="LUKY.prepocitejCenu()" autoComplete="off" />
                    <span className="jednotka">mm</span>
                </span>
            </div>
            <div className="cenaRozmery">
                <span className="popis">Cena základní</span>
                <span className="hodnota">
                    <span id="cenaRozmery"> 0 </span> 
                    CZK 
                </span>
            </div>
            
            <div className="stahovaniPopis">Ovládání</div>
            
            <div className="stahovaniHodnoty">

                <div>                        
                    <label>
                        <div class = 'vlevo'/>
                        <div class = 'hh1'>
                            <input type="radio" name={'ovladani'} id={'vlevo'} value={'vlevo'}
                                defaultChecked ={'true'} onChange="LUKY.prepocitejCenu()"/>
                            <span>vlevo</span>      
                        </div>                      
                    </label>
                </div>

                <div>                        
                    <label>
                        <div class = 'vpravo'/>
                        <div class = 'hh1'>
                            <input type="radio" name={'ovladani'} id={'vpravo'} value={'vpravo'}
                                onChange=""/>
                            <span>vpravo</span>      
                        </div>                      
                    </label>
                </div>                        
            </div>
                
                <div className="delkaOvladani">
                    <span className="popis">Délka ovládání</span>
                    <span className="hodnota">
                        <textarea type="text" className="hodnota" defaultValue="700" value={age4} name="delkaOvladani"
                            maxLength="4" onChange={handleChange4} onKeyDown="LUKY.prepocitejCenu()"/>
                        <span className="jednotka">mm</span>
                    </span>
                </div>

                <div className="brzda">
                    <input type="checkbox" name="brzda" id="brzda" 
                    onChange="LUKY.prepocitejCenu();"/>
                        <label htmlFor="brzda" className="hodnota">
                            <span className="nazev">
                            Brzda (zastaví žaluzii v požadované poloze/zabrání samovolnému sjíždění)
                                <span className="cena"><br /> +25 CZK </span>
                            </span>
                        </label>
                </div>
            </div>

            <div className='lastTwoCol'>
            <div className="stredCol">
                <div className="stred"> </div>
            </div>
            
            <div className="infoCol">
            <div className="info">
                <div>
                    Maximální rozměry naleznete v sekci TECHNICKÝ POPIS <br />Dodací lhůta je 7-9 dnů. <br /> <br />
                </div>
                <ul className="a">
                    <li className='one'>šířku v rozmezí od 250 do 2200 mm</li>
                    <li className='two'>výšku v rozmezí od 250 do 2200 mm</li>
                    <li className='three'>standardně z výroby 2/3 výšky</li>
                </ul>
                <div>&nbsp;</div>
                <div>
                    <a href="https://www.zaluzienejlevneji.shop/Instance/lukyshop/Sablona/Sablona/Komponenta/Luky/Detail/Slozka23/Cenik/CZ_Navod_na_vymereni_a_montaz.pdf">
                        NÁVOD NA ZAMĚŘENÍ A MONTÁŽ
                    </a>
                </div>
                <div>
                    <a href="https://www.zaluzienejlevneji.shop/technicky-popis-s33CZ">
                        TECHNICKÝ POPIS
                    </a>
                </div>
                <div>
                    <a href="https://www.zaluzienejlevneji.shop/fotogalerie-s65CZ">
                        FOTOGALERIE
                    </a>
                </div>
            </div>
            </div> </div>

        </div>
    </div>
);
}

export default Horiz;
