import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import boatServiceImg from "../../../Images/boatServiceImg.jpg";
const useStyles = makeStyles({
    root: {
      maxWidth: 450,
    },
    media: {
      height: 250,
    },
    cardContent : {
      height : 200,
      '& .MuiTypography-h5 .MuiTypography-body2' : {
       fontFamily : 'Roboto',
       }
    }
  });

const ServiceCard = (props) => {
    const classes = useStyles();
    const {serviceData} = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={serviceData.imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          {serviceData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {serviceData.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  )
}

export default ServiceCard
