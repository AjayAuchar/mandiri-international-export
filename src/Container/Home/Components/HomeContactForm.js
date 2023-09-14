import { makeStyles } from '@material-ui/core';
import React from 'react'
import worldDeliveryImg from '../../../Images/worldDeliveryImg.jpg';

const useStyles = makeStyles(() => ({
    HomeContactForm: {
        width: '100%',
        height: "600px",
        display: 'flex',
        justifyContent: 'space-between',
    },
    formImg: {
        width: '58%',
        height: 'inherit'
    },
    contactForm: {
        width: '42%',
        height: 'inherit',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formSection: {
        borderRadius: 10,
        '& h2': {
            fontSize: 22,
            textTransform: "uppercase",
            color: '#eb0028',
        }
    },
    fieldBox: {
        display: 'flex',
        flexDirection: 'column',
        '& label': {
            textAlign: 'left',
            fontSize: 18,
            color: 'gray'
        },
        "& input": {
            width: '400px',
            padding: "8px 15px",
            fontSize: 20,
            margin: '12px 0px'
        }
    },
    submitBtn: {
        margin: '15px 0',
        textAlign: 'start',
        "& button": {
            padding: '15px 25px',
            backgroundColor: '#eb0028',
            borderColor: '#e60329',
            color: '#fff',
            cursor: 'pointer',
            border: 'none',
            borderRadius: 5,
            fontSize: 15,
        }
    }

}));
const HomeContactForm = () => {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // console.log('Submitted values: Name -', name, 'Email -', email);
    };

    return (
        <div className={classes.HomeContactForm}>

            <img src={worldDeliveryImg} alt="worldDeliveryImg" className={classes.formImg} />
            <div className={classes.contactForm}>
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
                        <label>Email:</label>
                        <input
                            type="email"
                            // value={email}
                            className={classes.formInput}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.fieldBox}>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            // value={email}
                            className={classes.formInput}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.fieldBox}>
                        <label>Company Name:</label>
                        <input
                            type="email"
                            // value={email}
                            className={classes.formInput}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={classes.fieldBox}>
                        <label>Message:</label>
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
            </div>
        </div>
    )
}

export default HomeContactForm
