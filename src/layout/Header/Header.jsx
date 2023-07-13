import './Header.scss';
import logo from '../../assets/logo.svg';

function Header(){
    return (
        <header>
            <div className='nav-wraper'>
                <img src={logo} alt="Starbucks logo" />
                <nav>
                    <ul>
                        <li>MENU</li>
                        <li>REWARDS</li>
                        <li>NOSSO CAFÉ</li>
                        <li>IMPACTO SOCIAL</li>
                    </ul>
                </nav>
            </div>
            <div className='nav-right'>

            </div>
        </header>
    )
}

export default Header;