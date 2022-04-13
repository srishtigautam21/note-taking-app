import "./loginPage.css";
import { Navbar } from "../../component";
const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className='login-signup-page height-100'>
        <form className='input-form login'>
          <h1 className='login-bottom-margin text-center'>Login</h1>
          <label htmlFor='email-input' className='label-font-size'>
            Email Address*
          </label>
          <input
            type='email'
            placeholder='example@xyz.com'
            className='input-box'
            id='email-input'
          />
          <label htmlFor='password' className='label-font-size'>
            Password*
          </label>
          <input
            type='password'
            minLength='8'
            className='input-box'
            id='password'
          />
          <div className='forgot-psswrd'>
            <label>
              <input
                type='checkbox'
                name='checkbox'
                className='checkbox-size'
              />
              Remember Me
            </label>
            <p className='red-color forgot-psswrd-margin'>Forgot Password?</p>
          </div>

          <button className='button login-button'>Guest Login</button>
        </form>
      </div>
    </>
  );
};
export { LoginPage };
