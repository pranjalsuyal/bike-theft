import React, { useState, useEffect } from "react";
import HomeSection from "../HomeSection";
import {
  Grid,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import axios from "axios";
import bike from "../../utils/bike.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "green",
    flexDirection: 1,
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
      <HomeSection />
      <h1>Detailed Page</h1>
      {data.media && ( //need to replace with loader
        <>
          {/* <Grid container md className={classes.root}> */}
          {/* <Grid item> */}
          <Typography variant="h4" color="secondary">
            STOLEN
          </Typography>
          {/* </Grid> */}
          {/* <Grid item> */}
          <Typography variant="h5" color="textSecondary">
            {data.title || "Not Available"}
          </Typography>
          {/* </Grid> */}
          {/* <Grid item> */}
          <Typography variant="h5" color="primary">
            {data.address || "Not Available"}
          </Typography>
          {/* </Grid> */}
          {/* </Grid> */}
          <Grid container>
            <Grid item xs={12} sm={6}>
              {/* <div style={{ width: "50%" }}> */}
              <img
                src={data.media.image_url || data.media.image_url_thumb || bike}
                style={{ objectFit: "contain", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" color="textPrimary" align="center">
                Description
              </Typography>
              <Divider variant="middle" />
              <Typography variant="h6" color="textSecondary" align="center">
                {data.description || "Not Available"}
              </Typography>
              <Typography variant="h5" color="textPrimary" align="center">
                Date of Theft
              </Typography>
              <Divider variant="middle" />
              <Typography variant="h6" color="secondary" align="center">
                {`${new Date(data.occurred_at * 1000)
                  .toUTCString()
                  .slice(0, 16)}
                 At : 
                ${new Date(data.occurred_at * 1000)
                  .toLocaleTimeString()
                  .replace(/:.* /, "")
                  .toLowerCase()}`}
              </Typography>
              <Typography variant="h5" color="textPrimary" align="center">
                Reporting Date
              </Typography>
              <Divider variant="middle" />
              <Typography variant="h6" color="secondary" align="center">
                {`${new Date(data.updated_at * 1000).toUTCString().slice(0, 16)}
                 At : 
                ${new Date(data.updated_at * 1000)
                  .toLocaleTimeString()
                  .replace(/:.* /, "")
                  .toLowerCase()}`}
              </Typography>
            </Grid>
            {/* </div> */}
          </Grid>
        </>
      )}
    </>
  );
}

export default DetailedPage;
