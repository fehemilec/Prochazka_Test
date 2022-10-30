import React from 'react';
import './HomeImage.css';

function HomeImage() {
  return (
    <div className='main_image'>
      <div className='home_image_text'>
      <div className='home_image_title'><h1><p>Lorem ipsum dolor <br/> sit <span>consectetur</span> </p><img src='/images/title_arrow.png' alt=''></img></h1></div>
      <div className='home_image_subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit tristique quam fermentum nunc, amet, a. Egestas donec pharetra tincidunt purus. </div>
      <div className='home_image_button'>Výběr žaluzií <i class="fa-solid fa-angle-right"></i> </div>
      </div>
        <img src='/images/horizontal_blind_pic.png' alt=""/>    
    </div>
  );
}

export default HomeImage;