import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  console.log(user);
  if (!true) {
    return <Navigate to={'/landing'}></Navigate>;
  }
  return children;
};
export default ProtectedRoute;
