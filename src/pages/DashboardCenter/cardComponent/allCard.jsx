import React from "react";
import { Container, Button, Box } from "@mui/material";
import CardList from "./cardList";
import { useState, useEffect } from "react";
import axios from "axios";
import ActivityCreate from "../../activityCreate/activityCreate";

const AllCard = () => {
  const [load, setLoad] = useState(true);
  const [dataCard, setDataCard] = useState([]);

  const [open, setOpen] = useState("hidden");
  const handleOpen = () => {
    if (open === "hidden") {
      setOpen("flex");
    } else {
      setOpen("hidden");
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://foot-feet-default-rtdb.asia-southeast1.firebasedatabase.app/cardactivity.json"
      )
      .then((res) => {
        const datas = res.data;
        const cards = [];

        for (const key in datas) {
          const card = {
            id: key,
            ...datas[key],
          };

          cards.push(card);
        }

        setLoad(false);
        setDataCard(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dataCard]);

  if (load) {
    return (
      <div>
        <h1>Card is loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Container className='p-0 grid justify-center items-center'>
        <Button
          onClick={handleOpen}
          className='px-40 bg-green-400'
          variant='contained'
        >
          POST
        </Button>
        <div className='grid content-center justify-center'>
          <div className={open}>
            <ActivityCreate />
          </div>
        </div>
        <Box>
          <CardList cardActivity={dataCard} />
        </Box>
      </Container>
    </div>
  );
};

export default AllCard;
