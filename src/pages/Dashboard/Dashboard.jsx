import React from "react";
import LeftComponent from "../leftComponent/leftComponent";
import Center from "../DashboardCenter/center";
import NavBar from "../../G-components/navBar";
import RightComponent from "../rightcomponent/rightcomponent";
import ActivitySummary from "../activitySummary/activitySummary";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";


const Dashboard = () => {
  const [inform, setInform] = useState('')
  const [cardData, setCardData] = useState ('')

  const token = localStorage.getItem("token")
  const decoded = jwt_decode(token);
  const navigate = useNavigate();

  // get profile information มา (เอาไว้ส่ง props ต่อ)
  const fetchData = () => {
    try {
    axios
      .get(`${process.env.REACT_APP_API}/information/${decoded._id}`)
      .then((response) => {
        setInform(response.data[0])
      })}
      catch(error) {
        alert(error)
        navigate("/profile");
      }
  }
// get card information มา (เอาไว้ส่ง props ต่อ)
  // const fetchCard = () => {
  //   axios
  //     .get(
  //       // "https://foot-feet-default-rtdb.asia-southeast1.firebasedatabase.app/cardactivity.json"
  //       `${process.env.REACT_APP_API}/cards`
  //     )
  //     .then((response) => {
        
  //       const datas = response.data;
  //       const cards = [];

  //       for (const key in datas) {
  //         const card = {
  //           id: key,
  //           ...datas[key],
  //         };
  //         cards.push(card);
  //         setCardData(cards)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })}
      // console.log(cardData)

  /////////////////////////////หรือลองไป fetch ตรง dashboard แล้ว props ต่อดี??

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='flex justify-between'>
        <LeftComponent weight={inform.weight} height={inform.height} gender={inform.gender} firstname={inform.firstName} lastname={inform.lastName} birthday={inform.birthday}/>
        <div>
        <ActivitySummary/>
          <Center />
        </div>
        <RightComponent number={inform.number} goal={inform.goal} quote={inform.quote} selectGoal={inform.selectGoal} />
      </div>
    </div>




  );
};

export default Dashboard;
