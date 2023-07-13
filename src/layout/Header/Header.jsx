import './Header.scss';
import logo from '../../assets/logo.svg';

function Header(){
    return (
        <header>
            <div className='nav-wraper'>
                <img src={logo} alt="Starbucks logo" />
                <nav>

                </nav>
            </div>
            <div className='nav-right'>

            </div>
        </header>
    )
}

export default Header;