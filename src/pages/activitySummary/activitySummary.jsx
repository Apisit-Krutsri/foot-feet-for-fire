import { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ActivitySummary = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gainer",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
      },
      {
        label: "User Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["#c6d8cf", "#50c7c7", "#7986cb", "#e5ddd1"],
      },
    ],
  });

  return (
    <div style={{ width: 700 }} className='mx-auto'>
      <Slide className='m-auto '>
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-800 p-5'>
          <div className=' w-full flex justify-center'>
            <BarChart chartData={userData} />
          </div>
        </div>
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-800 p-5'>
          <div className=' w-full flex justify-center'>
            <LineChart chartData={userData} />
          </div>
        </div>
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-800 p-5'>
          <div className=' w-full flex justify-center'>
            <PieChart chartData={userData} />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ActivitySummary;
