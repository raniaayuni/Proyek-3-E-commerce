import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGoogle} from "react-icons/fa6";
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer_contant'>
            <div className='footer_section brand'>
                <div className='logo'>
                    <img src='images/logo.svg' />
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
                id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel
                ut sollicitudin elit at amet.
                </p>
            </div>
            <div className='footer_section links'>
                <h2>About Us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer_section links'>
                <h2>Customer Care</h2>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>
            <div className='footer_section contact'>
                <h2>Contact Us</h2>
                <p>70 Washington Square South, New York, NY 10012, United States</p>
                <p>Email: uilib.help@gmail.com</p>
                <p>Phone: +1 1123 456 780</p>
                <div className='social_icon'>
                    <i><FaFacebookF /></i>
                    <i><FaTwitter /></i>
                    <i><FaInstagram /></i>
                    <i><FaYoutube /></i>
                    <i><FaGoogle /></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer