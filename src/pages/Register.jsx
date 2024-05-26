import { useState, useEffect } from 'react';
import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  // REDUX TK AND Navigate Later

  const handleChange = (e, type) => {
    if (type === 'name') {
      setValues({ ...values, name: e.target.value });
    }
    if (type === 'email') {
      setValues({ ...values, email: e.target.value });
    }
    if (type === 'password') {
      setValues({ ...values, password: e.target.value });
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.warning('Please Fill out all the Fields');
      return;
    }
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo></Logo>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* Name */}
        {!values.isMember && (
          <FormRow
            name={'name'}
            type={'text'}
            handleChange={handleChange}
            value={values.name}
          ></FormRow>
        )}

        {/* Email */}
        <FormRow
          type={'email'}
          name={'email'}
          handleChange={handleChange}
          value={values.email}
        ></FormRow>

        {/* Password */}
        <FormRow
          type={'password'}
          name={'password'}
          handleChange={handleChange}
          value={values.password}
        ></FormRow>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
