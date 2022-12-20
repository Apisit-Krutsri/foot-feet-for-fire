// import { useState } from "react";
import BarChart from "./BarChart";
import { TypeData, UserData } from "./Data";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import BMI from "./BMI";

const ActivitySummary = (props) => {

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  // const navigate = useNavigate();
  const [cardData, setCardData] = useState("");

  const fetchCard = () => {
    axios
      .get(
        // "https://foot-feet-default-rtdb.asia-southeast1.firebasedatabase.app/cardactivity.json"
        `${process.env.REACT_APP_API}/cards/${decoded._id}`
      )
      .then((response) => {
        const datas = response.data;
        // console.log(datas)
        setCardData(datas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [swim, setSwim] = useState(0)
  const [run, setRun] = useState(0)
  const [walk, setWalk] = useState(0)
  const [hike, setHike] = useState(0)
  const [cycling, setCycling] = useState(0)

  useEffect(() => {
    fetchCard();
  }, []);

  useEffect (()=>{
  let sportData;
  // let timeStart;
  if (cardData) {
    sportData = cardData.map((data) => data.sport);
    const activityString = sportData.join(",");
    // console.log(activityString);
    const countSwimming = (activityString.match(/swimming/g) || []).length;
    setSwim(countSwimming)
    const countRunning = (activityString.match(/running/g) || []).length;
    setRun(countRunning)
    const countWalking = (activityString.match(/walking/g) || []).length;
    setWalk(countWalking)
    const countHiking = (activityString.match(/hiking/g) || []).length;
    setHike(countHiking)
    const countCycling = (activityString.match(/cycling/g) || [0]).length;
    setCycling(countCycling)
    // console.log(countSwimming);
    // timeStart = cardData.map((data) => data.firstTime);
    // console.log(timeStart)
    // let timediff = require('timediff');
    // // let timeEnd = props.toTime
    // // let timeStart = props.firstTime
    // // let duration = timediff(new Date(props.date +" "+ timeStart), new Date(props.date +" "+ timeEnd), 'Hm');
  } else {
    console.log("error");
  }
})
  console.log(swim)


  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.Days),
  //   datasets: [
  //     {
  //       label: "Calories",
  //       data: UserData.map((data) => data.Calories),
  //       backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
  //     },
  //     {
  //       label: "Goal",
  //       data: UserData.map((data) => data.GoalCal),
  //       backgroundColor: ["#c6d8cf", "#50c7c7", "#7986cb", "#e5ddd1"],
  //     },
  //   ],
  // });

  // const [time, setTime] = useState({
  //   labels: UserData.map((data) => data.Days),
  //   datasets: [
  //     {
  //       label: "Time",
  //       data: UserData.map((data) => data.Time),
  //       backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
  //     },
  //     {
  //       label: "Goal Time",
  //       data: UserData.map((data) => data.GoalTime),
  //       backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue"],
  //     },
  //   ],
  // });


  let typeData = {
  // const [typeData, setTypeData] = useState({
    labels: ["running", "hiking", "swimming", "cycling", "walking"],
    datasets: [
      {
        label: "times",
        data: [run, hike, swim, cycling, walk],
        backgroundColor: ["salmon", "lavender", "lightgreen", "lightblue", "khaki"],
        hoverOffset: 20,
      },
    ],
  // });
  }

  return (
    <div style={{ width: 700 }} className='mx-auto'>
      <Slide className=' '>
        <div className='flex flex-col content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-200 p-5'>
          <div className='justify-center '>
            <BMI bmi={props.bmi} />
          </div>
        </div>
        {/* <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-800 p-5'> */}
          {/* <div className=' w-full flex justify-center '> */}
            {/* <LineChart chartData={time} /> */}
          {/* </div> */}
        {/* </div> */}
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-200 p-5'>
          <div className='justify-center  '>
          <div className="text-center font-bold">Your Activities</div>
            <PieChart chartData={typeData} />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ActivitySummary;
