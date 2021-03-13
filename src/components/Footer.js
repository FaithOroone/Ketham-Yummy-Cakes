import React from 'react'
import {FaTwitter,
       FaYoutube,
       FaFacebook,
       FaInstagram
} from "react-icons/fa"
import {IconContext} from "react-icons"
import {Link} from 'react-router-dom'


function Footer(){
    return( 
        <div>
            <footer>
                <IconContext.Provider  value={{ style: {fontSize: '30px',size :'2x'}}}>
                <div className= 'Social-container'>
                    <div className='footer-items'>
                        <h2>About Us</h2>
                        <ul>
                            <ol><Link to ='/#'>Delivery Info</Link></ol>
                            <ol><Link to ='/#'>Privacy Policy</Link></ol>
                            <ol> <Link to ='/#'>Terms & Conditions</Link></ol>
                        </ul>                       
                    </div>

                    <div className='footer-items'>
                        <h2>Customer Service</h2>
                        <ul>
                        <ol><Link to ='/#'>Contact Us</Link></ol>
                        <ol><Link to ='/#'>Testimonials</Link></ol>
                        <ol><Link to = '#'>F&Q</Link></ol>
                        </ul> 
                    </div>
                    
                    <div className='footer-items'>
                   <h2>  My Account</h2>
                   <ul>
                       <ol><Link to ='/#'>My Account</Link></ol>
                       <ol><Link to ='/#'>Order History</Link></ol>
                       <ol><Link to = '#'>Wish List</Link></ol>
                   </ul>
                   </div>

                   <div className='footer-items'>
                   <h3>Social Follow</h3>
                   <a href = 'https://m.facebook.com/orone.faith?ref=bookmarks' className= 'Facebook'>
                   <FaFacebook/>
                   </a>
                   <a href = 'https://m.facebook.com/orone.faith?ref=bookmarks' className= 'Twitter'>
                   <FaTwitter/>
                   </a>
                   <a href = 'https://m.facebook.com/orone.faith?ref=bookmarks' className= 'Youtube'>
                   <FaYoutube/>
                   </a>
                   <a href = 'https://m.facebook.com/orone.faith?ref=bookmarks' className= 'Instagram'>
                   <FaInstagram/>
                   </a>
                   </div>
                  
                   <div className='footer-items'>
                   <h3>Payment;</h3>
                   </div>
                </div>
                </IconContext.Provider>

            </footer>
        </div>
    )
}

export default Footer;