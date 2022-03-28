import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage, HomePage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/homePage' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
