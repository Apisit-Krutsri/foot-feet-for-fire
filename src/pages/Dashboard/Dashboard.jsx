import React from "react";
import LeftComponent from "../leftComponent/leftComponent";
import Center from "../DashboardCenter/center";
import NavBar from "../../G-components/navBar";
import RightComponent from "../rightcomponent/rightcomponent";
import ActivitySummary from "../activitySummary/activitySummary";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
  const [inform, setInform] = useState("");
  // const [cardData, setCardData] = useState("");

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const navigate = useNavigate();

  const bmi = calculateBMI(inform.weight, inform.height);
  // BMI calculation function (weight=kg, height=cm)
  function calculateBMI(weight, height) {
    const num = (weight / height / height) * 10000;
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  // get profile information มา (เอาไว้ส่ง props ต่อ)
  const fetchData = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_API}/information/${decoded._id}`)
        .then((response) => {
          setInform(response.data[0]);
        });
    } catch (error) {
      alert(error);
      navigate("/profile");
    }
  };
  // get card information มา (เอาไว้ส่ง props ต่อ)
  // const fetchCard = () => {
  //   axios
  //     .get(
  //       // "https://foot-feet-default-rtdb.asia-southeast1.firebasedatabase.app/cardactivity.json"
  //       `${process.env.REACT_APP_API}/cards/${decoded._id}`
  //     )
  //     .then((response) => {
  //       const datas = response.data;
  //       // console.log(datas)
  //       setCardData(datas);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // console.log(cardData)
  // console.log("image" + inform.image)
  // console.log(inform)
  /////////////////////////////หรือลองไป fetch ตรง dashboard แล้ว props ต่อดี??

  useEffect(() => {
    fetchData();
    // fetchCard();
  }, []);

  return (
    <div>
      <NavBar image={inform.image} />
      <div className='flex justify-between'>
        <LeftComponent
          weight={inform.weight}
          height={inform.height}
          gender={inform.gender}
          firstname={inform.firstName}
          lastname={inform.lastName}
          birthday={inform.birthday}
          image={inform.image}
        />
        <div>
          <ActivitySummary bmi={bmi}  />
          <Center />
        </div>
        <RightComponent
          number={inform.number}
          goal={inform.goal}
          quote={inform.quote}
          selectGoal={inform.selectGoal}
        />
      </div>
    </div>
  );
};

export default Dashboard;
