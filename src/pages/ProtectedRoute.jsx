import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);

  if (!user.user) {
    return <Navigate to={'/landing'}></Navigate>;
  }
  return children;
};
export default ProtectedRoute;
