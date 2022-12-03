import "./App.css";
import AccountEdit from './pages/accountEdit/accountEdit'
import React from "react";
import ProfileEdit from "./pages/profileEdit/profileEdit";
import ActivitySummary from "./pages/activitySummary/activitySummary";

function App() {
  return (<div className='App'>
    <AccountEdit />
    <ProfileEdit />
  <ActivitySummary/>
  </div>)
}

export default App;
