import { makeStyles } from '@material-ui/core';
import React from 'react';
import homepageSeaImg from "../../Images/homepageSeaImg.jpg";

const useStyles = makeStyles(() => ({
  aboutContainer : {
      width : "100%",
      height : "100%",
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      flexDirection : "column",
      '& img' : {
        width : "65%",
        height : 500,
        marginTop : 25
      },
  },
  aboutDetail : {
    width : "65%",
    '& h2' : {
      fontFamily : 'Roboto',
      fontSize : 25,
      marginTop : 35,
      textTransform : 'uppercase',
      color : '#eb0028'
    },
    "& p" : {
      fontSize : 16,
      fontFamily : 'Roboto',
      textAlign : 'justify',
      wordSpacing : 2,
      lineHeight : 1.3,
      color : 'rgba(37,38,94,.7)'
    }
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <img src={homepageSeaImg} alt="homepageSeaImg" />
      <div className={classes.aboutDetail}>
      <h2>About US</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      </div>
    </div>
  )
}

export default About
