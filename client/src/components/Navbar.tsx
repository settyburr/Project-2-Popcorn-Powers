import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Popcorn Powers</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/comicspage'>Comics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/eventspage'>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/favoritespage'>Favorites</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/seriesspage'>Series</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>

    // <div id='navbar' className='display-flex justify-space-between align-center py-2 px-5 mint-green'>
    //   <h1 id='popcorn-title'>Popcorn Powers</h1>
    //   <div>
    //     {!loginCheck ? (
    //       <button className='btn' type='button'>
    //         <Link to='/login'>Login</Link>
    //       </button>
    //     ) : (
    //       <button
    //         className='btn'
    //         type='button'
    //         onClick={() => {
    //           auth.logout();
    //         }}
    //       >
    //         Logout
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
};

export default Navbar;
