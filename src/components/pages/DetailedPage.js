import React, { useState, useEffect } from "react";
import HomeSection from "../HomeSection";
import Navbar from "../Navbar";
import Police from "../../utils/police.jpg";
import {
  Grid,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import bike from "../../utils/bike.png";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     backgroundColor: "green",
  //     flexDirection: 1,
  //   },
  root: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Police})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  cardSection: {
    margin: "0 15%",
    backgroundColor: "#fff",
    borderRadius: "20px",
  },
  parentDiv: {
    float: "left",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
}));

function DetailedPage(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const res = await axios.get(
      `https://bikewise.org:443/api/v2/incidents/${props.match.params.id}`
    );
    setData(res.data.incident); //whatver
  };

  console.log(data);
  return (
    <>
      <div className={classes.root}>
        <div className={classes.hero}>
          <Navbar />
          <HomeSection />
          {!data.media && (
            <CircularProgress
              size={200}
              thickness={2}
              style={{ marginLeft: "42%" }}
            />
          )}
          {data.media && ( //need to replace with loader
            <>
              {/* <Grid container md className={classes.root}> */}
              {/* <Grid item> */}
              <div className={classes.cardSection}>
                <Grid container>
                  <Grid item xs={12}>
                    {/* <div style={{ width: "50%" }}> */}
                    <img
                      src={
                        data.media.image_url ||
                        data.media.image_url_thumb ||
                        bike
                      }
                      style={{ objectFit: "contain", width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      color="secondary"
                      align="center"
                      gutterBottom
                    >
                      STOLEN
                    </Typography>
                    {/* </Grid> */}
                    {/* <Grid item> */}
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      gutterBottom
                    >
                      {data.title || "Not Available"}
                    </Typography>
                    {/* </Grid> */}
                    {/* <Grid item> */}
                    <Typography
                      variant="h4"
                      color="primary"
                      align="center"
                      gutterBottom
                    >
                      {data.address || "Not Available"}
                    </Typography>
                    {/* </Grid> */}
                    {/* </Grid> */}
                    <Typography
                      variant="h4"
                      color="textPrimary"
                      align="center"
                      gutterBottom
                    >
                      Description
                    </Typography>
                    <Divider variant="middle" />
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      align="center"
                    >
                      {data.description || "Not Available"}
                    </Typography>
                    <Typography variant="h4" color="textPrimary" align="center">
                      Date of Theft
                    </Typography>
                    <Divider variant="middle" />
                    <Typography
                      variant="h5"
                      color="secondary"
                      align="center"
                      gutterBottom
                    >
                      {`${new Date(data.occurred_at * 1000)
                        .toUTCString()
                        .slice(0, 16)} At : 
                         ${new Date(data.occurred_at * 1000)
                           .toLocaleTimeString()
                           .replace(/:.* /, "")
                           .toLowerCase()}`}
                    </Typography>
                    <Typography variant="h4" color="textPrimary" align="center">
                      Reporting Date
                    </Typography>
                    <Divider variant="middle" />
                    <Typography
                      variant="h5"
                      color="secondary"
                      align="center"
                      gutterBottom
                    >
                      {`${new Date(data.updated_at * 1000)
                        .toUTCString()
                        .slice(0, 16)}
                 At : 
                ${new Date(data.updated_at * 1000)
                  .toLocaleTimeString()
                  .replace(/:.* /, "")
                  .toLowerCase()}`}
                    </Typography>
                  </Grid>
                  {/* </div> */}
                </Grid>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailedPage;
