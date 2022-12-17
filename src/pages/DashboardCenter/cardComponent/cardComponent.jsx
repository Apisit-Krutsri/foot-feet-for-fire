import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import img from '../../../img/landingpic.png'
import Swal from 'sweetalert2';
import axios from "axios";
import {useState} from 'react'
// import ActivityCreate2 from "../../activityCreate/ActivityEdit";
import { Link } from "react-router-dom";

function CardComponent(props) {

  // ยืนยันเวลากดลบบทความ
  const confirmDelete=({uuid})=> {
    Swal.fire({
      title: "Are you sure ?",
      text: "you will not able to recover this activity",
      icon: "warning",
      showCancelButton: true
    }).then((result)=>{   //result คือกดปุ่มยืนยันการลบหรือ cancel, ถ้ากด cancel จะไม่มีไรเกิดขึ้น แต่ถ้ากด confirm จะมี Swal ขึ้นมาว่า deleted
        if(result.isConfirmed){
          deleteActivity(uuid)
        }
    })
  }

  //ลบบทความ
  const deleteActivity=()=>{
          //  ส่ง request ไปที่ api เพื่อลบข้อมูล พอลบแล้วก็ค่อยขึ้นข้อความว่าลบบทความเรียบร้อย
          axios.delete(`${process.env.REACT_APP_API}/card/${props.uuid}`)
          .then(response=>{
          Swal.fire(
            "Deleted!" ,
            response.data.message, //"ลบบทความเรียบร้อย",
            "success"
          )
          // fetchData(); //รีเฟรชใหม่หลังลบ
          }).catch(err=>console.log(err))
  }

  //Edit บทความ ลองงงงงงงงงงงงงงงงงงงงงงเฉยๆๆๆๆๆๆๆๆๆๆๆๆๆ (แต่กดปุ่ม edit แล้ว uuid มานะะ)
  const [aCard, setACard] = useState("")
  
  const handleEdit =  () => {
      //  ส่ง request ไปที่ api เพื่อลบข้อมูล พอลบแล้วก็ค่อยขึ้นข้อความว่าลบบทความเรียบร้อย
      axios.get(`${process.env.REACT_APP_API}/card/${props.uuid}`)
          .then(response=>{
            setACard(response.data)
            console.log(aCard[0])
            // return <ActivityCreate2 card={aCard[0]}/>
          // fetchData(); //รีเฟรชใหม่หลังลบ
          }).catch(err=>console.log(err))      
  }

  // var timediff = require('timediff');
  // const duration = timediff(new Date("2022-12-19" + " 16:31:00"), new Date("2022-12-19" + " 14:34:00"), 'Hm');
  // const duration = timediff(new Date(`${props.date} ${props.firstTime}`), new Date(`${props.date} ${props.toTime}`), 'Hm');
  // const duration = timediff(new Date(props.firstTime *1), new Date(props.toTime *1), 'Hm');
  // const date = new Date(`${props.date}, ${props.firstTime}`)
  // console.log(`this is date: ${date}`)
  // console.log(typeof date)


  // console.log(duration)
  // console.log(props.date)
  // console.log(props.firstTime)

  // console.log(props.toTime.getTime() - props.firstTime.getTime() )

  return (
    <Card sx={{ maxWidth: 200 }} className="rounded-md m-2">
      <CardActionArea>
        <CardMedia
          component='img'
          height='150'
          image={img}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' className="text-lg font-bold">
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary' className="font-bold text-lime-900"> {props.title}</Typography>
          <Typography variant='body2' color='text.secondary'>Date:{props.date}</Typography>
          <Typography variant='body2' color='text.secondary'>Duration: {props.firstTime} min</Typography>
          <Typography variant='body2' color='text.secondary'>Activity: {props.sport}</Typography>
          <Typography variant='body2' color='text.secondary'>Description: {props.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-end">
        {/*<Button size="small" color="primary">
            Edit
    </Button>*/}
        <IconButton onClick={()=>handleEdit(props.uuid)}><Link to={`/card/${props.uuid}`}>
          <EditOutlinedIcon /></Link>
        </IconButton>
        <IconButton onClick={()=>confirmDelete(props.uuid)}>
          {" "}
          <DeleteOutlineOutlinedIcon />{" "}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
