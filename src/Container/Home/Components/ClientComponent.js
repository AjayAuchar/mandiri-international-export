import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import client1 from "../../../Images/client1.jpg";
import client2 from "../../../Images/client2.jpg";
import client3 from "../../../Images/client3.jpg";
import client4 from "../../../Images/client4.jpg";
import client5 from "../../../Images/client5.jpg";
import client6 from "../../../Images/client6.jpg";

const useStyles = makeStyles(() => ({
  clientContainer : {
    '& h4' : {
      color : "#eb0028",
      fontSize : 30,
      fontWeight : 900,
      fontFamily : 'Roboto',
      textTransform : 'uppercase',
      marginTop : '25px',
    },
  },
    clientComponent : {
        width : '100%',
        display : "flex",
        gap : 20,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        boxSizing : 'border-box',
        padding : '0px 0px 40px',
        '& img' : {
          width : 345,
          height : 250,
          border : '3px solid #e60329',
          borderRadius : 5,
        },
    }
}));
const ClientComponent = () => {
    const classes = useStyles();
    const [clientImg, setClientImg] = useState([
        client1,
        client2,
        client3,
        client4,
        client5,
    ]);

  return (
    <div className={classes.clientContainer}>
      <h4>Our Valuable Client</h4>
    <div className={classes.clientComponent}>
      {clientImg.map((elem) => (
       <img src={elem} alt="clientimg" />
      ))}
    </div>
    </div>

  )
}

export default ClientComponent
