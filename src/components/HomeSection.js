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
  },
  cover: {
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
              className={classes.colorText}
              align="center"
            >
              Berlin Police Department
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default HomeSection;
