import { FaHome, FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaAlignLeft, FaCaretDown } from 'react-icons/fa6';
import Logo from './Logo';

const Navbar = () => {
  const { user } = useSearchParams((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => console.log('toggle sidebar')}
        >
          <FaAlignLeft></FaAlignLeft>
        </button>
      </div>
      <div className="">
        <Logo></Logo>
        <h3 className="logo-text">Dashboard</h3>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          type="button"
          onClick={() => {
            console.log('toggle logot dropdown');
          }}
        >
          <FaUserCircle></FaUserCircle>
          {user?.name}
          <FaCaretDown></FaCaretDown>
        </button>
        <div className="dropdown show-dropdown">
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

      <FaHome></FaHome>
    </Wrapper>
  );
};
export default Navbar;
