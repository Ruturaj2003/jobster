import { useState, useEffect } from 'react';
import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo></Logo>
        <h3>Login</h3>

        <FormRow
          name={'name'}
          type={'text'}
          handleChange={handleChange}
          value={values.name}
        ></FormRow>

        <FormRow
          type={'email'}
          name={'email'}
          handleChange={handleChange}
          value={values.email}
        ></FormRow>

        <FormRow
          type={'password'}
          name={'password'}
          handleChange={handleChange}
          value={values.password}
        ></FormRow>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
