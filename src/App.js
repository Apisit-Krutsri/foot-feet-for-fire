import "./App.css";
import Landing from "./pages/landing/landing";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
// import Card from "./pages/DashboardCenter/cardComponent/cardComponent.jsx;
// import CardComponent from "./pages/cardComponent/cardComponent.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountEdit from './pages/accountEdit/accountEdit';
// import ActivityEdit from './pages/activityEdit/activityEdit.jsx'
import React from "react";
import ProfileEdit from "./pages/profileEdit/profileEdit";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ActivityEdit from "./pages/activityEdit/ActivityEdit";
// import {useState} from 'react'

function App() {

  //ถ้า login แล้วจะมี token
  const user = localStorage.getItem("token");

  return (
    <>
    
    {/* <Dashboard />
    <AccountEdit />
    <ProfileEdit />
    <Landing />
    <SignIn/>
    <SignUp/> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/edit' element={<ProfileEdit />} />
          {/* {user && <Route path='/dashboard' element={<Dashboard />} />} */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/account' element={<AccountEdit />} />
          <Route path='/card/:uuid' element={<ActivityEdit />} />
        </Routes>
    </>
  );
}

export default App;
