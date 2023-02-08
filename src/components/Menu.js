import { Link } from 'react-router-dom';
import './Menu.css'

function Menu(){
    
    return (
        <div className='menu'>
            <Link to = "/students" className = "menu-item">STUDENTS</Link>
            <Link to = "/add-student" className = "menu-item">ADD STUDENT</Link>
        </div>
    );
}

export default Menu;