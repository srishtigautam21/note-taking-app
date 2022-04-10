import { Route, Routes } from "react-router-dom";
import "./App.css";

import { LandingPage, HomePage, Archive, Labels, Trash } from "./pages";

function App() {
  // const { pathname } = useLocation();  //future TODO

  return (
    <>
      {/* {pathname !== "/" && <Navbar />} */}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/labels' element={<Labels />} />
        <Route path='/trash' element={<Trash />} />
      </Routes>
    </>
  );
}

export default App;
