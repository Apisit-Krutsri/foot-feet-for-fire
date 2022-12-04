import React from "react";
import LeftComponent from "../leftComponent/leftComponent";
import Center from "../DashboardCenter/center";
import NavBar from "../../G-components/navBar";
import RightComponent from "../rightcomponent/rightcomponent";
import ActivitySummary from "../activitySummary/activitySummary";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className='flex justify-between'>
        <LeftComponent />
        <div>
        <ActivitySummary/>
          <Center />
        </div>
        <RightComponent />
      </div>
    </div>
  );
};

export default Dashboard;
