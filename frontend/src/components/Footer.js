import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <img className='footer_arrow' src='/images/arrow_footer.png' alt=''></img>
      <div className='footer-links'>
        <div className='footer-link-items' id='first_col'>
          <h2>KONTAKT</h2>
          <p><i className="far fa-address-book"></i>  Leoš Procházka</p>
          <p><i className="fas fa-map-marker-alt"></i>  Krátká 561, Lenešice 439 23</p>
          <p><i className="fas fa-phone-alt"></i>  +420 605 454 093</p>
          <p><i className="fas fa-envelope"></i>  prochazka.l@seznam.cz</p>
        </div>
        <div className='footer-link-items'>
          <h2>INFORMACE</h2>
          <Link to='/'><li>O společnosti</li></Link>
          <Link to='/'><li>Podmínky a pravidla</li></Link>
          <Link to='/'><li>Postup pro podávání stížností</li></Link>
          <Link to='/'><li>Ochrana a osobní údaje</li></Link>
        </div>
        <div className='footer-link-items' id='last_col'>
          <h2>STÁHNOUT</h2>
          <Link to='/'><li>Brožura ke stažení</li></Link>
          <Link to='/'><li>Technické detaily</li></Link>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Zaluzie Prochazka
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>Zaluzie Prochazka © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
