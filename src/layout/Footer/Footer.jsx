import './Footer.scss';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa6';
import { SlSocialSpotify } from 'react-icons/sl';

function Footer() {
    return (
        <footer>
            <div className='footer-row'></div>
            <hr />
            <div className='footer-row social'>
                <SlSocialSpotify className='social-media-icon' id='first-social-icon' />
                <FaFacebookF className='social-media-icon' />
                <FaLinkedinIn className='social-media-icon' />
                <FaInstagram className='social-media-icon' />
                <FaYoutube className='social-media-icon' />
                <FaTwitter className='social-media-icon' />
            </div>
            <div className='footer-row'>
                <span id='privacy-politics' >Política de privacidade</span>
                <span className='center-politics' >Política de troca de produto</span>
                <span className='center-politics' >Termos de uso</span>
                <span id='last-span' >Política de cookies</span>
            </div>
        </footer>
    )
}

export default Footer;