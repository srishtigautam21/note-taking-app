import "./loginPage.css";
import { Navbar } from "../../component";
import { useAuth } from "../../context/AuthContext";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
const LoginPage = () => {
  useDocumentTitle("LoginPage");
  const { loginInfo, setloginInfo, loginHandler } = useAuth();

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
              setloginInfo((prev) => ({ ...prev, email: e.target.value }))
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
              setloginInfo((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <div className='forgot-psswrd'>
            <label>
              <input
                type='checkbox'
                name='checkbox'
                className='checkbox-size'
                defaultChecked
              />
              Remember Me
            </label>
            <p
              onClick={() => {
                setloginInfo((prev) => ({
                  ...prev,
                  email: "testuser@notet.com",
                }));
                setloginInfo((prev) => ({ ...prev, password: "notet12345" }));
              }}
              className='test-login forgot-psswrd-margin'
            >
              Use Test Credentials
            </p>
          </div>

          <button
            type='submit'
            className='button login-button'
            onClick={(e) => loginHandler(e)}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export { LoginPage };
