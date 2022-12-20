import React from "react";
import { useState, useEffect } from "react";

const BMI = (props) => {

  const [color, setColor] = useState("bg-slate-100/80");
  const [text, setText] = useState("");
    const userBMI = props.bmi;
//   const userBMI = 50;

  function BMIColor() {
    if (userBMI < 18.5) {
      setColor("bg-cyan-400 rounded-md px-3 ");
      setText("😐 You are underweight 😐");
    } else if (userBMI >= 18.5 && userBMI <= 24.9) {
      setColor("bg-lime-500 rounded-md px-3");
      setText("😊 You have normal BMI 😊");
    } else if (userBMI > 24.9 && userBMI <= 29.9) {
      setColor("bg-yellow-400 rounded-md px-3");
      setText("🤨 Ohhh! You are overweight 🤨");
    } else if (userBMI > 29.9 && userBMI <= 34.9) {
      setColor("bg-orange-400 rounded-md px-3");
      setText("💪 Ohhh! Keep exercise, and you can be healthier! 💪");
    } else {
      setColor("bg-red-500 rounded-md px-3");
      setText("💪 Ohhh! Keep exercise, and you can be healthier! 💪")
    }
  }

  useEffect(() => {
    BMIColor();
  }, [userBMI]);

  return (
    <div className='flex flex-col content-center justify-center rounded-md'>
      <div className={color}>
        <div className='text-center font-bold text-lg p-3'>Your BMI is</div>
        <div className='text-center font-bold text-lg pb-3'>{userBMI}</div>
      </div>
      <div className='text-center bg-slate-100 rounded-md p-3'>{text}</div>
    </div>
  );
};

export default BMI;