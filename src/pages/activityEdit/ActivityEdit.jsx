import {
  Typography,
  TextField,
  Input,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateAlert from "../activityCreate/CreateAlert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Resize from "react-image-file-resizer";
import jwt_decode from "jwt-decode";

//   import Swal from "sweetalert2";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

function ActivityEdit(props) {

  const token = localStorage.getItem("token")
  // const decoded = jwt_decode(token);

  const navigate = useNavigate();
  /*set states*/
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [firstTime, setFirstTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([])
  const [list, setList] = useState([]); //list = array contains object(s) of information
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    severity: "",
  });

  // console.log(props)

  // ดึงข้อมูลบทความที่ต้องการแก้ไขมาแปะใน state ใน form ลอกมาาาาาาาาาาาาาาาาา
  const { uuid } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/card/${uuid}`).then((response) => {
      // console.log(response.data[0]);
      const cardData = response.data[0];
      setName(cardData.title);
      setDate(cardData.date);
      setDescription(cardData.description);
      setFirstTime(cardData.firstTime);
      setToTime(cardData.toTime);
      setSport(cardData.sport);
      setImage(cardData.image);
    });
  }, [uuid]);

  /*set conditions when click save button*/
  const submitData = (e) => {
    e.preventDefault();
    if (!(name && date && firstTime && toTime && sport && description)) {
      // console.log("no nameeeee");
      setAlert({
        show: true,
        msg: "You must complete all fields ",
        severity: "error",
      });
    } else {
      const newItem = {
        uuid: uuidv4(),
        title: name,
        date: date,
        firstTime: firstTime,
        toTime: toTime,
        sport: sport,
        description: description,
        image: image,
      };
      // console.log("API URL", process.env.REACT_APP_API)
      axios
        .put(`${process.env.REACT_APP_API}/card/${uuid}`, newItem)
        .then((res) => {
          // console.log(res.data);
          navigate('/dashboard')
        })
        .catch((err) => {
          console.log(err);
        });

      setList([...list, newItem]);
      setName("");
      setDate("");
      setFirstTime("");
      setToTime("");
      setSport("");
      setDescription("");
      setImage("");
      setAlert({
        show: true,
        msg: "Your activity was saved",
        severity: "success",
      });
      // console.log(newItem);
    }
  };

  /*set conditions when click save button*/
  const cancel = () => {
    setName("");
    setDate("");
    setFirstTime("");
    setToTime("");
    setSport("");
    setDescription("");
    setImage("");
    // setOpen('hidden')
  };

  // post image
  const handleChangeFile = (e) => {
    const files = e.target.files
    if (files) {
      // console.log(files)
      Resize.imageFileResizer(
        files[0],
        150,
        150,
        "JPEG",
        100,
        0,
        (uri) => {
          axios.post(`${process.env.REACT_APP_API}/images`,{
            image: uri
          },
          {
            headers: {
              authtoken: token
            },
          } 
          ).then (res => {
            const img = res.data.secure_url
            setImage(img)
          }).catch(err=> {
            console.log(err)
          })
        },
        "base64"
      )
    }
  }

  return (
    <div className='h-screen bg-gradient-to-r bg-zinc-800'>
      <div className='flex content-center justify-center pt-20'>
        <Box className='flex flex-col w-96 m-2 rounded-lg bg-gradient-to-r from-lime-300 to-lime-100 ...'>
          <Typography className='text-center p-5 font-bold text-xl'>
            Edit Activity
          </Typography>

          {/*Choose Image*/}
          <input
            className='mx-3 p-1 rounded-md block'
            type='file'
            name='myImage'
            accept='image/x-png,image/gif,image/jpeg'
            onChange={handleChangeFile}
          ></input>
          <img src={image}></img>

          {/*Add Activity Name*/}
          <InputLabel className='px-3 py-1 text-sm'>Activity Name</InputLabel>
          <TextField
            className='mx-3 bg-slate-50'
            size='small'
            required
            id='outlined-required'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          {/*Select Date*/}
          <InputLabel className='px-3 py-1 text-sm'>Date</InputLabel>
          <Input
            className='mx-3 p-1 bg-slate-50 rounded-md'
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Input>

          {/*Select Time Range*/}
          <Box>
            <InputLabel className='px-3 pt-1 text-sm'>Time</InputLabel>
          </Box>
          <Box className='flex my-1 content-center'>
            <Input
              className='mx-3 px-5 bg-slate-50 rounded-md'
              type='time'
              value={firstTime}
              onChange={(e) => setFirstTime(e.target.value)}
            ></Input>
            <InputLabel className='px-1 py-1 text-sm'>to</InputLabel>
            <Input
              className='ml-2 px-5 bg-slate-50 rounded-md'
              type='time'
              value={toTime}
              onChange={(e) => setToTime(e.target.value)}
            ></Input>
          </Box>

          {/*Select Sport Type*/}
          <InputLabel className='px-3 py-0 text-sm'>Sport</InputLabel>
          <Select
            className='mx-3 my-1 bg-slate-50 rounded-md'
            id='demo-simple-select'
            label='Sport'
            size='small'
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          >
            <MenuItem value={"walking"}>Walking</MenuItem>
            <MenuItem value={"running"}>Running</MenuItem>
            <MenuItem value={"swimming"}>Swimming</MenuItem>
            <MenuItem value={"cycling"}>Cycling</MenuItem>
            <MenuItem value={"hiking"}>Hiking</MenuItem>
          </Select>

          {/*Add Activity Description*/}
          <InputLabel className='px-3 py-1 text-sm'>Description</InputLabel>
          <TextField
            className="mx-3 bg-slate-50 rounded-md'"
            required
            id='outlined-required'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={2}
          />

          {/*Alert will place here, types of Alert will based on conditions*/}
          {alert.show && (
            <CreateAlert {...alert} setAlert={setAlert} list={list} />
          )}

          {/*Button*/}
          <Box className='flex m-3 content-center justify-center'>
            <Button
              className='bg-lime-600 h-8 w-20 m-3'
              variant='contained'
              type='submit'
              onClick={submitData}
            >
              Save
            </Button>
            <Button
              className='bg-red-600 h-8 w-20 m-3'
              variant='contained'
              type='submit'
              onClick={cancel}
            >
              <Link to='/dashboard'>Cancel</Link>
            </Button>
          </Box>
        </Box>
      </div>

      {/*    <section className="list-container">
      {list.map((data, index)=> {return <CardComponent key={index} {...data} />})}
    </section>*/}
    </div>
  );
}

export default ActivityEdit;
