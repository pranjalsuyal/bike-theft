import React, { useState } from "react";
import { Link } from "react-router-dom";
import bike from "../utils/bike.png";
import Pagination from "@material-ui/lab/Pagination";
import Alert from "@material-ui/lab/Alert";
import {
  makeStyles,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
  Divider,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "5px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    // height: "auto",
    height: "250px",
    // width: "auto",
    width: "250px",
    objectFit: "contain",
  },
  paginator: {
    justifyContent: "center",
    padding: "10px",
  },
  buttonStyle: {
    width: "100%",
  },
  alertStyle: {
    width: "50%",
    margin: "5% 25%",
  },
}));

function Case(props) {
  const classes = useStyles();
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(props.results.length / itemsPerPage); //check if need to convert into state
  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(props);

  return (
    <>
      <div className={classes.alertStyle}>
        <Alert
          variant="outlined"
          severity="success"
          style={{ placeContent: "center" }}
        >
          {`  Yay! We found ${props.results.length} Cases`}
        </Alert>
      </div>
      {/* </Typography> */}
      {props.results
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((result) => (
          <Card className={classes.root} key={result.id}>
            <Button
              className={classes.buttonStyle}
              component={Link}
              to={{ pathname: `/case/${result.id}` }}
            >
              <CardMedia
                className={classes.cover}
                component="img"
                image={result.media.image_url_thumb || bike}
              />
              <div className={classes.details}>
                {/* <CardActionArea> */}
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h6" align="center">
                    {result.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    align="center"
                  >
                    {result.description || "Not Available"}
                  </Typography>

                  <Typography
                    component="h5"
                    variant="h6"
                    color="secondary"
                    align="center"
                  >
                    {`Stolen on : ${new Date(result.occurred_at * 1000)
                      .toUTCString()
                      .slice(0, 16)} at : ${new Date(result.occurred_at * 1000)
                      .toLocaleTimeString()
                      .replace(/:.* /, "")
                      .toLowerCase()}`}
                  </Typography>
                  <Typography
                    component="h5"
                    variant="h6"
                    color="textPrimary"
                    align="center"
                  >
                    {`Location : ${result.address}`}
                  </Typography>
                  <Typography
                    component="h5"
                    variant="h6"
                    color="secondary"
                    align="center"
                  >
                    {`Reported on : ${new Date(result.updated_at * 1000)
                      .toUTCString()
                      .slice(0, 16)} at : ${new Date(result.updated_at * 1000)
                      .toLocaleTimeString()
                      .replace(/:.* /, "")
                      .toLowerCase()}`}
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
              </div>
            </Button>
          </Card>
        ))}
      <Divider />
      <Box component="span">
        <Pagination
          // className={classes.pageStyle}
          classes={{ ul: classes.paginator }}
          count={totalPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="secondary"
          size="large"
          showLastButton
          showFirstButton
        />
      </Box>
      {/* </> */}
      {/* //   )} */}
    </>
  );
}

export default Case;
