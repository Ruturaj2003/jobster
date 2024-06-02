import { useState } from 'react';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.name ||
      !userData.email ||
      !userData.lastName ||
      !userData.location
    ) {
      toast.error('Please Fill Out All Fields');
      return;
    }
  };

  // Reusable Function for handling an changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <FormRow
          type="text"
          name="name"
          value={userData.name}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="lastName"
          value={userData.lastName}
          handleChange={handleChange}
        />{' '}
        <FormRow
          type="email"
          name="email"
          value={userData.email}
          handleChange={handleChange}
        />{' '}
        <FormRow
          type="text"
          name="location"
          value={userData.location}
          handleChange={handleChange}
        />
        <button className="btn btn-block" type="submit" disabled={isLoading}>
          {isLoading ? 'Please Wait...' : 'Save Changes'}
        </button>
      </form>
    </Wrapper>
  );
};
export default Profile;
