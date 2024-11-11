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
              {/* Add links from client/src/main.tsx from router*/}
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/comics'>Comics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/events'>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/series'>Series</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/favorites'>Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Navbar;
