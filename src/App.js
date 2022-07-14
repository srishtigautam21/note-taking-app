import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { RequireAuth } from "./utils/RequireAuth";
import { ToastContainer } from "react-toastify";
import {
  LandingPage,
  HomePage,
  Archive,
  Trash,
  LoginPage,
  Page404,
} from "./pages";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/homePage'
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route
          path='/archive'
          element={
            <RequireAuth>
              <Archive />
            </RequireAuth>
          }
        />

        <Route
          path='/trash'
          element={
            <RequireAuth>
              <Trash />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<Page404 />} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
