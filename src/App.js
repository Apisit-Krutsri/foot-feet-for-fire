import "./App.css";
import Landing from "./pages/landing/landing";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
// import Card from "./pages/DashboardCenter/cardComponent/cardComponent.jsx;
// import CardComponent from "./pages/cardComponent/cardComponent.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";
import AccountEdit from './pages/accountEdit/accountEdit';
import React from "react";
import ProfileEdit from "./pages/profileEdit/profileEdit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 
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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/account' element={<AccountEdit />} />
        </Routes>
      
    
    </>
  );
}

export default App;
