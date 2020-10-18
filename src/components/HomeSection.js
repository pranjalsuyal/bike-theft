import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";
import BPDLogo from "../utils/BPDLogo.png";

const useStyles = makeStyles((theme) => ({
  root: { margin: "80px 200px" },
  cardRoot: {
    display: "flex",
    backgroundColor: "transparent",
    // marginBottom: "5px",
  },
  cover: {
    // height: "auto",
    // height: "250px",
    // width: "auto",
    width: "250px",
    objectFit: "contain",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    flex: "1 0 auto",
  },
  colorText: {
    color: "#fff",
  },
}));

function HomeSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.cardRoot}>
        <CardMedia
          className={classes.cover}
          component="img"
          image={BPDLogo}
        ></CardMedia>
        <Divider orientation="vertical" light />
        <div className={classes.heading}>
          <CardContent className={classes.content}>
            <Typography
              variant="h1"
              component="h2"
              // color="#fff"
              className={classes.colorText}
              align="center"
              glutterBottom
            >
              Berlin Police Department
            </Typography>
            {/* <Typography
              variant="h1"
              component="h2"
              color="white"
              align="center"
              glutterBottom
            >
              Police
            </Typography>
            <Typography
              variant="h1"
              component="h2"
              color="white"
              align="center"
              glutterBottom
            >
              Department
            </Typography> */}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default HomeSection;
