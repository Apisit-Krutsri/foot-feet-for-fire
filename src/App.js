import "./App.css";
import Landing from "./pages/landing/landing";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountEdit from './pages/accountEdit/accountEdit';
import React from "react";
import ProfileEdit from "./pages/profileEdit/profileEdit";
import Profile from "./pages/profileEdit/profile";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ActivityEdit from "./pages/activityEdit/ActivityEdit";

function App() {

  //ถ้า login แล้วจะมี token
  const user = localStorage.getItem("token");

  return (
    <>
        <Routes>
        {!user && <Route path='/dashboard' element={<Landing />} />}
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profileEdit' element={<ProfileEdit />} />
          <Route path='/profile' element={<Profile />} />
          {/* {user && <Route path='/dashboard' element={<Dashboard />} />} */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/account' element={<AccountEdit />} />
          <Route path='/card/:uuid' element={<ActivityEdit />} />
        </Routes>
    </>
  );
}

export default App;
