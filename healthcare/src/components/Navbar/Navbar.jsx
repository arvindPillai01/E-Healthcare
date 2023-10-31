import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import mainLogo from './ALogo.png';
import LoginModal from '../Login/login';
import SignInModal from '../Login/signup';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/userAction';

const Navigation = ({ isAuthenticated, userName, logoutUser }) => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [registerModalShow, setRegisterModalShow] = useState(false);

  const handleLoginClick = () => {
    setLoginModalShow(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalShow(false);
  };

  const handleSignUpClick = () => {
    setRegisterModalShow(true);
  };

  const handleRegisterModalClose = () => {
    setRegisterModalShow(false);
  };

  const handleLogout = () => {
    // Dispatch the logout action
    logoutUser();
  };

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
      </style>
      <Navbar className="navbar navbar-expand-lg navbar-inner">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={mainLogo} alt="Healthcare Icon" />
          <span className='logoName'>ABC Healthcare</span>
        </Link>
        <Nav className="navoptions">
            <Link to="/cart">
              <Button className="navbutton">Cart</Button>
            </Link>
          {isAuthenticated ? (
            <>
              <h4 id="username">{userName}</h4>
              <Button variant="primary" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button className='navbutton' variant="outline-primary" onClick={handleSignUpClick}>
                Sign Up
              </Button>
              <Button className='navbutton' variant="primary" onClick={handleLoginClick}>
                Sign In
              </Button>
            </>
          )}
        </Nav>
      </Navbar>

      {/* Render the login modal */}
      <LoginModal show={loginModalShow} handleClose={handleLoginModalClose} />
      {/* Render the register modal */}
      <SignInModal show={registerModalShow} handleClose={handleRegisterModalClose} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  userName: state.user.userName, // Access the userName from the Redux state
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
