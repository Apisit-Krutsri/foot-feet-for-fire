import "./App.css";
// <<<<<<< HEAD
// =======
import Landing from "./pages/landing/landing";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
// import Card from "./pages/DashboardCenter/cardComponent/cardComponent.jsx
// import CardComponent from "./pages/cardComponent/cardComponent.jsx";
import LeftComponent from "./pages/leftComponent/leftComponent.jsx"
import ActivityCreate from "./pages/activityCreate/activityCreate";
import AllCard from "./pages/DashboardCenter/cardComponent/allCard";
import CardComponent from "./pages/DashboardCenter/cardComponent/cardComponent";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Center from "./pages/DashboardCenter/center";
import Dashboard from "./pages/Dashboard/Dashboard";
// >>>>>>> conflict1
import AccountEdit from './pages/accountEdit/accountEdit'
import React from "react";
import ProfileEdit from "./pages/profileEdit/profileEdit";
import ActivitySummary from "./pages/activitySummary/activitySummary";

function App() {
 
  return (
    <div className='App'>
    <Dashboard />
    <AccountEdit />
    <ProfileEdit />
  <ActivitySummary/>
      {/*<BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
         
        </Routes>
      </BrowserRouter>*/}

      
    </div>
  );
}

export default App;
