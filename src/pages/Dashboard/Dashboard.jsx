import React from "react";
import LeftComponent from "../leftComponent/leftComponent";
import Center from "../DashboardCenter/center";
import NavBar from "../../G-components/navBar";
import RightComponent from "../rightcomponent/rightcomponent";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className='flex justify-between'>
        <LeftComponent />
        <div>
          <div>Graph</div>
          <Center />
        </div>
        <RightComponent />
      </div>
    </div>
  );
};

export default Dashboard;
