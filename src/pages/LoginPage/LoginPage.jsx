import "./loginPage.css";
import { Navbar } from "../../component";
import { useAuth } from "../../context/AuthContext";
const LoginPage = () => {
  const { loginInfo, setLoginInfo, loginHandler } = useAuth();
  const { email, password } = loginInfo;
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
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label htmlFor='password' className='label-font-size'>
            Password*
          </label>
          <input
            type='password'
            minLength='8'
            className='input-box'
            id='password'
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
            }
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

          <button
            className='button login-button'
            onClick={(e) => loginHandler(e, email, password)}
          >
            Guest Login
          </button>
        </form>
      </div>
    </>
  );
};
export { LoginPage };
