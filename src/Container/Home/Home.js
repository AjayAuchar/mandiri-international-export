import { Button, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import homeShipBgImg2 from '../../Images/homeShipBgImg2.jpg';
import shipIndustryDelivering from '../../Images/shipIndustryDelivering.jpg';
import Services from '../Services/Services';
import About from '../About/About';
import DetailPage from '../page';
import HomeContactForm from './Components/HomeContactForm';
import BussinessLocationMap from './Components/BussinessLocationMap';
import ClientComponent from './Components/ClientComponent';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const useStyles = makeStyles(() => ({
  homeContainer : {
    width : '100%',
    height : '100%',
    position : 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.9)',
      zIndex: -1, // Place the pseudo-element below the button's content
    },
  },
  homeBgImg : {
    width: "100%",
    height: 680,
    opacity: 0.5,                     
  },
  homeTitle : {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    padding: "10px",
    "& h4": {
      color: '#fff',
      textTransform: 'uppercase',
      marginTop: '0px',
      marginBottom: '15px',
      fontSize: 30,
      fontFamily : "Roboto"

    },
    "& h1" :{
      color: '#eb0028',
      fontSize: 42,
      textTransform: 'uppercase',
      marginTop: '0px',
      marginBottom: '15px',
      fontWeight: '600',
      fontFamily : "Roboto"
    },
    '& p' : {
      fontSize: '16px',
      color: '#fff',
      textAlign : 'justify',
      wordSpacing : 2,
      lineHeight : 1.3,
    }
  },
  contactBtn: {
    display: 'inline-block',
    color: '#fff',
    borderRadius: '4px',
    textTransform: 'uppercase',
    fontSize: '15px',
    backgroundColor: '#eb0028',
    padding: '15px 30px',
    border: '0px',
    fontWeight : 600,
    marginTop : 15,
    "&:hover": {
      textDecoration: 'none',
      backgroundColor: '#3b3b3b',
      color: '#fff',
      cursor : 'pointer',
    }
  }

}));

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // const items = [
  //   {
  //     img : homeBgImg1
  //   },
  //   {
  //     img : homeShipBgImg2
  //   },
  // ];

  return (
    <>
    <div className={classes.homeContainer}>
       <img className={classes.homeBgImg} src={shipIndustryDelivering} alt="homeShipBgImg2" />
       <div className={classes.homeTitle}>
         <h4> MANDIRI INTERNATIONAL</h4>
         <h1> PROFESSIONAL IMPORT EXPORT SERVICES  </h1>
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
         <button className={classes.contactBtn} onClick={() => navigate('contact')}> Contact with us </button>
       </div>
    </div>
    <Services />
    <DetailPage />
    <HomeContactForm />
    <ClientComponent />
    <BussinessLocationMap/>
    {/* <About /> */}
    </>
  )
}

export default Home










// homeContainer : {
//   '& img' : {
//     width : "100%",
//     height : 800,
//     position : "relative",
//     display : "flex",
//   justifyContent : "center",
//   alignItems : "center",
//   }
// },
// homeTitle : {
//   position : 'absolute',
//   zIndex : 10,
// },
// carouselBtn: {
//   width: '60px',
//   height: '60px',
//   backgroundColor: 'rgba(42,42,42,0.6)',
//   borderRadius: '4px',
//   color: '#fff',
//   fontWeight: '900',
//   fontSize: '24px',
//   textAlign: 'center',
//   opacity: '0',
// },

// <Carousel
// navButtonsProps={{         
//   style: {
//       width : 60,
//       height : 60,
//       backgroundColor: 'rgba(42,42,42,0.6)',
//       borderRadius: 8
//   }
// }} 

// PrevIcon={<ChevronLeftRoundedIcon/>}
// NextIcon={<ChevronRightRoundedIcon/>}             
// >
// {items.map((item, i) => (
// <>
//   <img src={item.img} alt="cargoShipBgImg" />
//   <div className={classes.homeTitle}>
//   <h4> We are Proud </h4>
//   <h1> To be always on demand </h1>
//   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
//   <button> Contact With Us </button>
//   </div>
// </>
// ))}
// </Carousel>