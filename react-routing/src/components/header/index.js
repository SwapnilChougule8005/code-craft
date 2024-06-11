import { Link, useNavigate } from "react-router-dom"
import './styles.css'
const Header = ()=>{
    const navigate = useNavigate();
    const handleHomeLinkBtn=()=>{
        navigate('/')
    }
    return(
        <div className='app-header'>
            <button onClick={handleHomeLinkBtn}>Home</button>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contacts</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/signOut'>Logout</Link>
        </div>
    )
}

export default Header;