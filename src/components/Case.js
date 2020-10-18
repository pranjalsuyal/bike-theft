import React, { useState } from "react";
import bike from "../utils/bike.png";
import Pagination from "@material-ui/lab/Pagination";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
  Box,
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
      {props.results
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((result) => (
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
                <Typography variant="subtitle1" color="textSecondary">
                  {result.description || "Not Available"}
                </Typography>
              </CardContent>
              {/* <CardActionArea></CardActionArea> */}
            </div>
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
    </>
  );
}

export default Case;
