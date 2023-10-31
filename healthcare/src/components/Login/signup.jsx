import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { registerUser} from '../../redux/userAction';

const Signup = ({ show, handleClose, registerUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const handleRegister = () => {
    if (isAdmin && adminPassword !== 'Admin1234') {
      alert('Default admin password is incorrect.');
      return;
    }

    const access = isAdmin ? "true" : "false";


    const userData = {
      UserName:username,
      Email:email,
      Password:password,
      Access: access, 
    };
    console.log(userData);

    registerUser(userData)
    .then((response) => {
      if (response.error) {
        alert(response.error);
      } else {
        alert('User is registered.');
        handleClose();
      }
    })
    .catch((error) => {
      // Handle any errors that occur during registration
      alert('Registration Error:', error);
    });

    registerUser(userData);
    handleClose();
  };


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your registration form components here */}
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              placeholder="Enter username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
          </div>
        {/* admin checkbox and default admin pass */}
          <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isAdminCheck"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
              />
              <label className="form-check-label" htmlFor="isAdminCheck">
                Register as Admin
              </label>
            </div>
            {isAdmin && (
              <div className="form-group">
                <label htmlFor="adminPassword">Default Admin Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="adminPassword"
                  placeholder="Enter admin password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </div>
            )}

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


const mapDispatchToProps = {
  registerUser,
};
export default connect(null, mapDispatchToProps)(Signup);