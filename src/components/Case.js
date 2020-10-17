import React from "react";
import bike from "../utils/bike.png";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "5px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: "150px",
    width: "250px",
  },
}));

function Case(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <>
      {props.results.map((result) => (
        <Card className={classes.root} key={result.id}>
          <CardMedia
            className={classes.cover}
            component="img"
            image={result.media.image_url_thumb || bike}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {result.title}
              </Typography>
            </CardContent>
            {/* <CardActionArea></CardActionArea> */}
          </div>
        </Card>
      ))}
    </>
  );
}

export default Case;
