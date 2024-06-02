import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const SmallSideBar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button className="close-btn" onClick={() => console.log('Toggle')}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">NavLinks</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSideBar;
