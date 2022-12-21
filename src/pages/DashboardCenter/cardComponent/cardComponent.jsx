import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import img from "../../../img/landingpic.png";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function CardComponent(props) {
  // ยืนยันเวลากดลบบทความ
  const confirmDelete = ({ uuid }) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "you will not able to recover this activity",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      //result คือกดปุ่มยืนยันการลบหรือ cancel, ถ้ากด cancel จะไม่มีไรเกิดขึ้น แต่ถ้ากด confirm จะมี Swal ขึ้นมาว่า deleted
      if (result.isConfirmed) {
        deleteActivity(uuid);
      }
    });
  };

  //ลบบทความ
  const deleteActivity = () => {
    //  ส่ง request ไปที่ api เพื่อลบข้อมูล พอลบแล้วก็ค่อยขึ้นข้อความว่าลบบทความเรียบร้อย
    axios
      .delete(`${process.env.REACT_APP_API}/card/${props.uuid}`)
      .then((response) => {
        Swal.fire(
          "Deleted!",
          response.data.message, //"ลบบทความเรียบร้อย",
          "success"
        );
        // fetchData(); //รีเฟรชใหม่หลังลบ
      })
      .catch((err) => console.log(err));
  };
  // get uuid for edit card
  const [aCard, setACard] = useState("");

  const handleEdit = () => {
    //  ดึงข้อมูล props แล้วเอาไปเปลี่ยน path อีกที (ตรง <Link>) เพื่อที่หน้า edit จะได้ใช้ useParams ได้
    axios
      .get(`${process.env.REACT_APP_API}/card/${props.uuid}`)
      .then((response) => {
        setACard(response.data);
        console.log(aCard[0]);
        // return <ActivityCreate2 card={aCard[0]}/>
        // fetchData(); //รีเฟรชใหม่หลังลบ
      })
      .catch((err) => console.log(err));
  };

  let timediff = require("timediff");
  let timeEnd = props.toTime;
  let timeStart = props.firstTime;
  let duration = timediff(
    new Date(props.date + " " + timeStart),
    new Date(props.date + " " + timeEnd),
    "Hm"
  );

  // console.log(duration.hours)
  // console.log(duration.minutes)

  return (
    <Card
      sx={{ maxWidth: 200 }}
      className='rounded-md m-2 w-80 flex flex-col justify-between'
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='150'
          image={props.image ? props.image : img}
          alt='green iguana'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className='text-lg font-bold'
          >
            {props.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className='font-bold text-lime-900'
          >
            {" "}
            {props.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Date:{props.date}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Duration: {duration.hours} hr, {duration.minutes} min
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Activity: {props.sport}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Description: {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='flex justify-end'>
        {/*<Button size="small" color="primary">
            Edit
    </Button>*/}
        <IconButton onClick={() => handleEdit(props.uuid)}>
          <Link to={`/card/${props.uuid}`}>
            <EditOutlinedIcon />
          </Link>
        </IconButton>
        <IconButton onClick={() => confirmDelete(props.uuid)}>
          {" "}
          <DeleteOutlineOutlinedIcon />{" "}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
