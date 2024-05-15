import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { logout, clearUserData  } from '../AuthSlice'; 
import './Header.css'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleLogout = () => {
    dispatch(clearUserData());
    dispatch(logout());
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 20px', backgroundColor: '#ffff !important' ,}}>
              <h1 className='mainHeader fontclass'>Tailwebs .</h1>
      <div className='mainHeader1 fontclass'>
      <span>Home</span>
      <button className='logoutbtn fontclass' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
