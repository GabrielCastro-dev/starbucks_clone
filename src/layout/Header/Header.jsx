import './Header.scss';
import logo from '../../assets/logo.svg';
import Nav from '../Nav/Nav';

function Header(){
    return (
        <header>
            <img src={logo} alt="Starbucks logo" className='logo' />
            <Nav />
            {/* MobileNav goes in here */}
        </header>
    )
}

export default Header;