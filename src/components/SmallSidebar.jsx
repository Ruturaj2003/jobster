import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/userSlice';

const SmallSideBar = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  const { isSidebarOpen } = useSelector((store) => store.user);

  console.log(isSidebarOpen);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
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
