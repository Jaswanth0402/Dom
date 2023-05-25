import { Link } from 'react-router-dom';
import './Nav.css';
function Nav(){


    return(

        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid  ">
    <Link className="navbar-brand ms-4" to="#"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active home" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userdata">Data</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/update">Update</Link>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        </ul>
        <div className='navbar-nav ms-auto  me-3'> 
        <button className='nav-item home me-2  'style={{border:"1px",borderRadius:"25px",width:"70px",height:"40px",backgroundColor:"blue"}} ><Link className='nav-link active home text-white' to='/login'>Signin</Link></button>
        <button className='nav-item home 'style={{border:"1px",borderRadius:"25px", width:"70px",height:"40px",backgroundColor:"blue"}}><Link className='nav-link active home text-white' to='/signup'>Signup</Link></button>
        </div>
      
    </div>
  </div>
</nav>

        </div>
    )
}

export default Nav;











