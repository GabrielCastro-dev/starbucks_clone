import './Nav.scss';
import historias from '../../assets/historias.svg';
import { FaLocationDot } from 'react-icons/fa6';

function Nav() {
    return (
        <nav className='desktop-nav'>
            <ul>
                <li>MENU</li>
                <li>REWARDS</li>
                <li>NOSSO CAFÉ</li>
                <li>IMPACTO SOCIAL</li>
            </ul>
            <div className='nav-right'>
                <img src={historias} alt="Logo Histórias Starbucks" />
                <div>
                    <FaLocationDot className='nav-icon' />
                    <span>Encontre uma loja</span>
                </div>
                <button>Entrar</button>
                <button id='btn-participe' >Participe agora</button>
            </div>
        </nav>
    )
}

export default Nav;