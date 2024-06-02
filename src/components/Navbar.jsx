import { FaHome, FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaAlignLeft, FaCaretDown } from 'react-icons/fa6';
import Logo from './Logo';
import { toggleSidebar } from '../features/userSlice';
import { useState } from 'react';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const { user } = useSearchParams((store) => store.user);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={() => toggle}>
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div className="">
          <Logo></Logo>
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            <FaUserCircle></FaUserCircle>
            {user?.name}
            <FaCaretDown></FaCaretDown>
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                console.log('logout user');
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
