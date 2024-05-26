import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not found Pic" />
        <h3>Sorry!</h3>
        <p>It seems there is no such page that you are looking for.</p>
      </div>
      <Link to={'/'}> Take me Back Home</Link>
    </Wrapper>
  );
};
export default Error;
