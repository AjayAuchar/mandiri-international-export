import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import exportDarkImg from "../../Images/exportDarkImg.jpg";
import homeShipBgImg2 from '../../Images/homeShipBgImg2.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(() => ({
  contactContainer : {
    width : "100%",
    height : "100%"
  },
  contactUsTitle : {
    width : '100%',
    height : '100%',
    position : 'relative',
    fontFamily : 'Roboto',
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
    '& img' : {
      width : "100%",
      height : "580px",
      opacity: 0.5,
    }
  },
  contactText : {
    width : '100%',
    display : 'flex',
    justifyContent : 'center',
    flexDirection : 'column',
    alignItems : "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    padding : '0px 50px',
    boxSizing : 'border-box',
    '& h2' : {
      fontSize : 35,
      fontWeight : 800,
      textAlign : 'left',
      textTransform : 'uppercase',
      color : '#fff',
      margin : '0',
      fontFamily : 'Roboto'
    },
    '& h1' : {
      fontSize : 40,
      fontWeight : 800,
      textAlign : 'left',
      textTransform : 'uppercase',
      color : '#eb0028',
      margin : '20px 0px 0px',
      fontFamily : 'Roboto'
    },
    '& p' : {
      fontSize : 20,
      fontWeight : 500,
      textAlign : 'center',
      lineHeight : "2",
      color : '#fff',
      fontFamily : 'Roboto',
      '& span' : {
        color : '#eb0028',
        fontWeight : 900,
      fontFamily : 'Roboto'

      }
    }
  },
  formInput : {
  // width: '50%',
  padding: '8px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontFamily : 'Roboto'
  },
  formContainer : {
    width : '100%',
    height : 625,
    marginTop : 25,
    boxSizing : 'border-box',
    display : "flex",
    alignItems : 'center',
    gap : 50,
    justifyContent : 'center',  
    fontFamily : 'Roboto'
  },
  formSection : {
    width : '40%',
    // height : 500,
    border : '2px solid #eb0028',
    borderRadius : 10,
    padding : 20,
    '& h2' : {
      fontSize : 22,
      textTransform : "uppercase",
      color : '#eb0028',
      fontFamily : 'Roboto'
    }
  },
  fieldBox : {
    display : 'flex',
    flexDirection : 'column',
    '& label' : {
      textAlign : 'left',
      fontSize : 18,
      color : 'gray',
      fontFamily : 'Roboto'
    },
    "& input" : {
      padding : "8px 15px",
      fontSize : 20,
      margin : '12px 0px'
    }
  },
  submitBtn: {
    margin : '15px 0',
    textAlign : 'start',
    "& button":{
    padding : '10px 25px',
    backgroundColor: '#eb0028',
    borderColor: '#e60329',
    color: '#fff',
    cursor: 'pointer',
    border : 'none',
    borderRadius : 5,
    fontSize : 15,
    fontFamily : 'Roboto'
    }
  },
  contactRightContainer : {
    width : '30%',
    height : 600,
    display : 'flex',
    flexDirection : 'column',
    gap : 20,
    fontFamily : 'Roboto'
  },
  contactDetailBox : {
    width : '100%',
    height : 290,
    border : '2px solid #eb0028',
    borderRadius : 8,
    backgroundColor : '#f5f5f5',
    fontFamily : 'Roboto'
  },
  contactBoxHeader : {
    width : '100%',
    height : 50,
    backgroundColor : '#eb0028',
    color : '#fff',
    fontSize : 16,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    textTransform : 'uppercase',
  },
  contactBoxContainer : {
    display : 'flex',
    width : '100%',
    // height : '100%',
    flexDirection : 'column',
    padding : 15,
    boxSizing : 'border-box',
  },
  contactFieldBox : {
    display : 'flex',
    gap : 20,
    textAlign : 'start',
    marginBottom : 25
  },
  contactEmailBox : {
    display : 'flex',
    flexDirection : 'column',
    '& span' : {
      marginBottom : 5
    }
  }
}));


const Contact = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Submitted values: Name -', name, 'Email -', email);
  };

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactUsTitle}>
        <img src={homeShipBgImg2} alt="contactDemo" />
        <div className={classes.contactText}>
          <h2>Contact us</h2>
          <h1>We are always with you :)</h1>
          <p>
            We freight to all over the world
            The best logistic company, <br /> 
            <span>FAST</span> and <span>SAFELY !</span> 
          </p>
        </div>
      </div>

       <div className={classes.formContainer}>
       <form onSubmit={handleSubmit} className={classes.formSection}>
       <h2>Contact Form</h2>
         <div className={classes.fieldBox}>
           <label>Name:</label>
           <input
            type="text"
            // value={name}
            className={classes.formInput}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.fieldBox}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            // value={email}
            className={classes.formInput}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.fieldBox}>
          <label htmlFor="email">Phone Number:</label>
          <input
            type="text"
            // value={email}
            className={classes.formInput}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.fieldBox}>
          <label htmlFor="email">Company Name:</label>
          <input
            type="email"
            // value={email}
            className={classes.formInput}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={classes.fieldBox}>
          <label htmlFor="email">Message:</label>
          <input
            type="textArea"
            // value={email}
            className={classes.formInput}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.submitBtn}>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className={classes.contactRightContainer}>
        <div className={classes.contactDetailBox}>
          <div className={classes.contactBoxHeader}>
            <span> Corporate Office </span>
          </div>
          <div className={classes.contactBoxContainer}>
            <div className={classes.contactFieldBox}>
              <LocationOnIcon />
              <span> Address : Soho capital LT.32 unit 7jl.letjen parman kav 28 tanjung duren selatan grogol petamburan jakarta barat DKI jakarta, 11470 </span>
            </div>
            <div className={classes.contactFieldBox}>
              <PhoneIcon />
              <span> Telephone No : 021-29181359 </span>
            </div>
            <div className={classes.contactFieldBox}>
              <EmailIcon />
              <div className={classes.contactEmailBox}>
              <span> Email : Pt.mandiriexpo@gmail.com </span>
              <span> Email : sales@internationalmandiriexpo.com </span>
              <span> Email : Internationalmandiriexpo@IME.one </span>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.contactDetailBox}>
          <div className={classes.contactBoxHeader}>
            <span> Section Office </span>
          </div>
          <div className={classes.contactBoxContainer}>
            <div className={classes.contactFieldBox}>
              <LocationOnIcon />
              <span> Address : Soho capital LT.32 unit 7jl.letjen parman kav 28 tanjung duren selatan grogol petamburan jakarta barat DKI jakarta, 11470 </span>
            </div>
            <div className={classes.contactFieldBox}>
              <PhoneIcon />
              <span> Telephone No : 021-29181359 </span>
            </div>
            <div className={classes.contactFieldBox}>
              <EmailIcon />
              <div className={classes.contactEmailBox}>
              <span> Email : ceo@internationalmandiriexpo.one </span>
              <span> Email : admin@internationalmandiriexpo.com </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      
    </div>
  )
}

export default Contact


