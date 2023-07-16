import './Footer.scss';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa6';
import { SlSocialSpotify } from 'react-icons/sl';

function Footer() {
    return (
        <footer>
            <div className='footer-row'></div>
            <hr />
            <div className='footer-row'>
                <SlSocialSpotify className='social-media-icon' id='first-social-icon' />
                <FaFacebookF className='social-media-icon' />
                <FaLinkedinIn className='social-media-icon' />
                <FaInstagram className='social-media-icon' />
                <FaYoutube className='social-media-icon' />
                <FaTwitter className='social-media-icon' />
            </div>
            <div className='footer-row'></div>
        </footer>
    )
}

export default Footer;