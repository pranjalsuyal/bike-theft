import React, { useState } from "react";
import { Link } from "react-router-dom";
import bike from "../utils/bike.png";
import Pagination from "@material-ui/lab/Pagination";
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
      {/* {props.results.length && <CircularProgress />} */}
      {/* {!props.results.length && ( */}
      {/* <> */}
      <Typography variant="h5" color="primary" align="right">
        Total Cases : {props.results.length}
      </Typography>
      {props.results
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((result) => (
          <Card className={classes.root} key={result.id}>
            <Button
              className={classes.buttonStyle}
              component={Link}
              to={{ pathname: `/case/${result.id}`, result: { result } }}
            >
              <CardMedia
                className={classes.cover}
                component="img"
                image={result.media.image_url_thumb || bike}
              />
              <div className={classes.details}>
                {/* <CardActionArea> */}
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {result.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {result.description || "Not Available"}
                  </Typography>

                  <Typography variant="h6" color="primary" align="right">
                    {`Stolen on : ${new Date(result.occurred_at * 1000)
                      .toUTCString()
                      .slice(0, 16)} at : ${new Date(result.occurred_at * 1000)
                      .toLocaleTimeString()
                      .replace(/:.* /, "")
                      .toLowerCase()}`}
                  </Typography>
                  <Typography variant="h6" color="secondary" align="right">
                    {`Location : ${result.address}`}
                  </Typography>
                  <Typography variant="h6" color="primary" align="right">
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
          color="primary"
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
