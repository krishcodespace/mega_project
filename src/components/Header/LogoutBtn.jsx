import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '../../appwrite/auth';
import { logout } from '../../store/features/authSlice';

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full' 
    onClick={logoutHandler}>LogoutBtn</button>
  )
}

export default LogoutBtn