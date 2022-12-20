// import BarChart from "./BarChart";
// import { TypeData, UserData } from "./Data";
// import LineChart from "./LineChart";
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
  const [cardData, setCardData] = useState("");

  //get card data
  const fetchCard = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/cards/${decoded._id}`
      )
      .then((response) => {
        const datas = response.data;
        setCardData(datas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [swim, setSwim] = useState(0);
  const [run, setRun] = useState(0);
  const [walk, setWalk] = useState(0);
  const [hike, setHike] = useState(0);
  const [cycling, setCycling] = useState(0);

  useEffect(() => {
    fetchCard();
  }, []);


  // count "MODE" of each sport type
  useEffect(() => {
    let sportData;
    if (cardData) {
      sportData = cardData.map((data) => data.sport);
      const activityString = sportData.join(",");
      const countSwimming = (activityString.match(/swimming/g) || []).length;
      setSwim(countSwimming);
      const countRunning = (activityString.match(/running/g) || []).length;
      setRun(countRunning);
      const countWalking = (activityString.match(/walking/g) || []).length;
      setWalk(countWalking);
      const countHiking = (activityString.match(/hiking/g) || []).length;
      setHike(countHiking);
      const countCycling = (activityString.match(/cycling/g) || []).length;
      setCycling(countCycling);
    } else {
      console.log("Graph is loading..");
    }
  });

  let typeData = {
    labels: ["running", "hiking", "swimming", "cycling", "walking"],
    datasets: [
      {
        label: "times",
        data: [run, hike, swim, cycling, walk],
        backgroundColor: [
          "salmon",
          "lavender",
          "lightgreen",
          "lightblue",
          "khaki",
        ],
        hoverOffset: 20,
      },
    ],
  };

  return (
    <div style={{ width: 700 }} className='mx-auto'>
      <Slide>
        <div className='flex flex-col content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-200 p-5'>
          <div className='justify-center '>
            <BMI bmi={props.bmi} />
          </div>
        </div>
        <div className='flex content-center justify-center bg-cover h-60 border-6 bg-green-100 border-solid border-2 border-green-200 p-5'>
          <div className='justify-center  '>
            <div className='text-center font-bold'>Your Activities</div>
            <PieChart chartData={typeData} />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ActivitySummary;
