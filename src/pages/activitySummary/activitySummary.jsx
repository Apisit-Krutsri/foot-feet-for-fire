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
          "grey",
          "lightblue",
          "khaki",
        ],
        hoverOffset: 20,
      },
    ],
  };

  return (
    <div className='mx-3 rounded-md h-80 m-2 flex flex-col pt-2 items-center content-center bg-white border'>
            <div className='text-center font-bold text-xl mt-2'>Your Activities</div>
            <PieChart chartData={typeData}/>
    </div>
  );
};

export default ActivitySummary;
