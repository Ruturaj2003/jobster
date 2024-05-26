import { useState, useEffect } from 'react';
import { Logo } from '../components';
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

        {/* Name Field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={values.name}
            className="form-input"
            onChange={(e) => handleChange(e, 'name')}
            name="name"
          ></input>
        </div>
        {/* Email Field */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={values.email}
            className="form-input"
            onChange={(e) => handleChange(e, 'email')}
            name="email"
          ></input>
        </div>

        {/* Password Field */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            minLength={'5'}
            maxLength={'16'}
            value={values.password}
            className="form-input"
            onChange={(e) => handleChange(e, 'password')}
            name="password"
          ></input>
        </div>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
