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
// import ActivityCreate from "../../activityCreate/activityCreate";
// import {useState} from 'react';

function CardComponent(props) {
  // const [image,setImage] = useState('')


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
          <Typography variant='body2' color='text.secondary'>{props.date} : TIME (MIN)</Typography>
          <Typography variant='body2' color='text.secondary'>Activity: {props.sport}</Typography>
          <Typography variant='body2' color='text.secondary'>Description: {props.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-end">
        {/*<Button size="small" color="primary">
            Edit
    </Button>*/}
        <IconButton>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton>
          {" "}
          <DeleteOutlineOutlinedIcon />{" "}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
