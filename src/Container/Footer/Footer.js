import { makeStyles } from '@material-ui/core';
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import bussinessLogo from '../../Images/bussinessLogo.jpg';

const useStyles = makeStyles(() => ({
  footerContainer : {
    width : '100%',
    // height : 200,
    backgroundColor : '#f5f5f5',
    display : 'flex',
    // justifyContent : 'space-between',
    padding : '30px 35px',
    boxSizing : 'border-box',
    marginTop : 50
  },
  footerCompanyDetail : {
    width : '25%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'start',
    '& img' : {
      width : 120,
      height : 100
    }
  },
  footerNavLink : {
    display : 'flex',
    marginTop : 15,
    '& ul' : {
      padding : 0,
    },
    '& ul li' : {
      display : 'inline-block',
      padding : 5,
      fontSize : 15,
      '&:hover' : {
      textDecoration   : 'underline'
      }
    }
  },
  footerLeftSection : {
    width : '30%',
    display : 'flex',
    flexDirection : 'column',
    '& h4' : {
      fontSize : 20,
      textAlign : 'start',
      color : '#eb0028',
      fontWeight : 700,
      fontFamily : 'Roboto',
      margin : '0px 0 20px 5px',
    }
  },
  footerDetail : {
    display : 'flex',
    marginBottom : 25,
    '& span' : {
      fontSize : 16,
      // fontWeight : 700,
      fontFamily : 'Roboto',
      marginLeft : 15,
      textAlign : 'justify'
    }
  },
  footerRightSection : {
    width : '45%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    '& h4' : {
      fontSize : 20,
      textAlign : 'start',
      color : '#eb0028',
      fontWeight : 700,
      fontFamily : 'Roboto',
      margin : 0,
    },
    '& p' : {
      fontSize : 16,
      fontFamily : 'Roboto',
      textAlign : 'justify',
      padding : '0 30px'
    } 
  },
  socialMediaIcons : {
    display : 'flex',
    gap : 20,
    '& img' : {
      width : 50,
      height : 50,
    }
  },
  socialIcons : {
      width : 35,
      height : 35,
  },
  
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerCompanyDetail}>
        <img src={bussinessLogo} alt="bussinessLogo" />
        <div className={classes.footerNavLink}>
          <ul>
            <li> Home </li> |
            <li> About </li> |
            <li> Contact </li> |
            <li> Services </li> 
          </ul>
        </div>
      </div>
      <div className={classes.footerLeftSection}>
        <h4> Contact Us </h4>
         <div className={classes.footerDetail}>
           <LocationOnIcon />
           <span> Address : Soho capital LT.32 unit 7jl.letjen parman kav 28 tanjung duren selatan grogol petamburan jakarta barat DKI jakarta, 11470 </span>

         </div>
         <div className={classes.footerDetail}>
           <PhoneIcon />
           <span> Telephone No : 021-29181359 </span>
         </div>
         <div className={classes.footerDetail}>
           <EmailIcon />
           <span> Email : Pt.mandiriexpo@gmail.com </span>
         </div>
      </div>
      <div className={classes.footerRightSection}>
         <h4>
           About my Company
         </h4>
         <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
         <div className={classes.socialMediaIcons}>
           <FacebookIcon  className={classes.socialIcons}/>
           <WhatsAppIcon  className={classes.socialIcons}/>
           <InstagramIcon  className={classes.socialIcons}/>
         </div>
      </div>
    </div>
  )
}

export default Footer
