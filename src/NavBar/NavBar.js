import './NavBar.css'
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div className='nav-bar'>
                {props.displayHomeButton && <div className="home-button" onClick={() => navigate('/home')}>Home</div>}
                <div className="main-title">Illustrator's Paradise</div>
            </div>
            {/* {props.displayBasketButton && <div className="basket-button" onClick={() => navigate('/basket')}>Basket</div>} */}
            <div className="separator-bar"></div>
        </div>
    )
}
export default NavBar