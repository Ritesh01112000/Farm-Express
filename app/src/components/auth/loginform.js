import '../../pages/auth/login.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../action/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginForm() {
  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form className="input-fields">
        <div>
          <input
            type="email"
            placeholder={errors.email? "Email is required":"Email"}
            className="custom-input"
            onChange={emailHandler}
          />
          {errors.email && <span className="input-error">{errors.email}</span>}
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            className="custom-input"
            onChange={passwordHandler}
          />
          {errors.password && <span className="input-error">{errors.password}</span>}
        </div>
        <br />
        <button type="submit" onClick={submitHandler} className="login-button">
          LogIn
        </button>
      </form>
      <div style={{ paddingTop: '30px' }}>
        <span>
          Don't have an account?{' '}
          <span style={{ color: '#007bff' }}>
            <Link to="/signup" style={{ color: 'red' }}>
              Register here
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
