import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ServiceCard from './Components/ServiceCard';
import boatServiceImg from "../../Images/boatServiceImg.jpg";
import plainServiceImg from "../../Images/plainServiceImg.jpg";
import truckServiceImg from "../../Images/truckServiceImg.jpg";

const useStyles = makeStyles(() => ({
  serviceContainer : {
    marginTop: 30,
    '& h1' : {
    color :'#eb0028'
    },
    '& img' : {
      width : "100%",
      height : 800,
      backgroundSize : 'cover',
    }
  },
  serviceCardContainer : {
    width : "100%",
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 35,
    marginTop : 50,
    fontFamily : 'Roboto'
  }
}));

const Service = () => {
  const classes = useStyles();
  // state
  const [servicesData, setServicesData] = useState([
    {
      imgSrc : boatServiceImg,
      title : 'Ocean Freight Shipping',
      detail : "We provide our clients with time saving economical solution at extremely affordable rates. At mandiri international export, we pride ourselves on delivering not just cargo but also peace of mind. We navigate the complexities of international shipping, so you can focus on growing your business."
    },
    {
      imgSrc : plainServiceImg,
      title : 'Air Freight Shipping',
      detail : "We provide affordable solution for express, consolidation and regular types of mandiri service. With our global network of partners and access to major airports worldwide, we ensure that your cargo reaches its destination quickly and efficiently. Our dedicated team of experts handles everything from documentation and customs clearance to cargo tracking and delivery coordination, providing you with peace of mind every step of the way."
    },
    {
      imgSrc : truckServiceImg,
      title : 'Truck Transport Shipping',
      detail : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ])

  return (
    <div className={classes.serviceContainer}>
      <h1> OUR SERVICES </h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div className={classes.serviceCardContainer}>
       {servicesData.map(serviceData => (
         <ServiceCard serviceData={serviceData}/>
       ))}
      </div>
    </div>
  )
}

export default Service
