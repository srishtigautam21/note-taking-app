import heroSvg from "../../Asset/Svg/hero.svg";
import "./landingPage.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const LandingPage = () => {
  useDocumentTitle("LandingPage");
  return (
    <div className='main-container md-pd-landingPage'>
      <div className='landingPage-content-container'>
        <h1 className='lg-header md-top-margin'>
          <span className='color-primary'>Notet</span>
        </h1>
        <div className='lg-note-margin'>
          <h2 className='md-sub-head'>
            Meet your modern
            <span className='color-primary'> Note Taking App</span>
          </h2>
          <p className='sm-margin'>
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <Link to='/homePage'>
          <button className='button btn-width sm-pd'>Start Taking Notes</button>
        </Link>
      </div>
      <img src={heroSvg} alt='svg' className='hero-image-container' />
    </div>
  );
};
export { LandingPage };
