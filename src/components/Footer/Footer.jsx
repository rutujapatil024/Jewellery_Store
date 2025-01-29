import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.nlogo} alt=''/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div className="footer-social-icons">
                    <img src={assets.whatsapp} alt="" />
                    <img src={assets.facebook} alt="" />
                    <img src={assets.instagram} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>GET TO KNOW US</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 98679 32282</li>
                    <li>+91 77180 69999</li>
                </ul>
                <ul>
                    <b>Locate our store</b><br></br>
                    Shop No-9, Gagangiri Soc., Pakhadi, Kharigaon, Kalwa (W), Maharashtra - 400605
                </ul>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.798484052603!2d72.99849937466826!3d19.204002047942726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7beceee5493b5%3A0xf910b900f32c8162!2sNiranjan%20Jewellers!5e0!3m2!1sen!2sin!4v1735721666180!5m2!1sen!2sin" width="400" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
      <hr/>
      <p className="footer-copyright">Copyright © Niranjan Jewellers, 2024. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
