import { useState } from "react";
import BarChart from "./BarChart";
import { TypeData, UserData } from "./Data";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ActivitySummary = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Days),
    datasets: [
      {
        label: "Calories",
        data: UserData.map((data) => data.Calories),
        backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
      },
      {
        label: "Goal",
        data: UserData.map((data) => data.GoalCal),
        backgroundColor: ["#c6d8cf", "#50c7c7", "#7986cb", "#e5ddd1"],
      },
    ],
  });

  const [time, setTime] = useState({
    labels: UserData.map((data) => data.Days),
    datasets: [
      {
        label: "Time",
        data: UserData.map((data) => data.Time),
        backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
      },
      {
        label: "Goal Time",
        data: UserData.map((data) => data.GoalTime),
        backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
      },
    ],
  });

  const [typeData, setTypeData] = useState({
    labels: ["running", "hiking", "swimming", "bicycle"],
    datasets: [
      {
        label: "ครั้ง",
        data: [10, 13, 14, 15],
        backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
        hoverOffset: 20,
      },
    ],
  });

  return (
    <div style={{ width: 700 }} className='mx-auto'>
      <Slide className=' '>
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-800 p-5'>
          <div className=' w-full flex justify-center '>
            <LineChart chartData={userData} />
          </div>
        </div>
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-800 p-5'>
          <div className=' w-full flex justify-center '>
            <LineChart chartData={time} />
          </div>
        </div>
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-800 p-5'>
          <div className=' w-full flex justify-center  '>
            <PieChart chartData={typeData} />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ActivitySummary;
