const Login = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='login col-lg-4 col-md-8 col-sm-12 mt-5 shadow'>
          <div className='login-header'>
            <ul>
              <li className='form-login active'>Login</li>
              <li className='form-sign-up'>Sign Up</li>
            </ul>
          </div>
          <div className='login-subheader mt-3 text-center'>
            <p className='text-secondary '>We are glad to see you again!</p>
          </div>
          <form className='p-4'>
            <div className='form-group '>
              <label for='mobile-email'>Mobile or Email</label>
              <input
                type='email'
                className='form-control p-3 mt-3'
                id='mobile-email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1' className='mt-3'>
                Password
              </label>
              <input
                type='password'
                className='form-control p-3 mt-3'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </div>
            <div className='form-check my-4'>
              <input
                type='checkbox'
                className='form-check-input'
                id='exampleCheck1'
              />
              <div className='checkbox '>
                <label className='form-check-label' for='exampleCheck1'>
                  Remember Me
                </label>
                <label>
                  <a>Forgot Password?</a>
                </label>
              </div>
            </div>
            <button type='submit' className='btn  p-3'>
              Login
            </button>
          </form>
          <div className='socials'>
            <div className='socials-header m-4 d-flex align-items-center text-secondary'>
              <hr className='flex-grow-1' />
              <span className='p-2'>Or Login with Social Profile</span>
              <hr className='flex-grow-1' />
            </div>
            <div className='socials-icon text-center'>
              <i className='lab la-facebook facebook'></i>
              <i className='lab la-twitter twitter'></i>
              <i className='lab la-google google'></i>
              <i className='lab la-linkedin-in linkedin'></i>
            </div>
            <div className='text-center mt-3'>
              New to Quickai?{' '}
              <a className='signup' href='#'>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
