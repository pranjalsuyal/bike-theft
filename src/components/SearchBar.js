import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// import { connect } from "react-redux";
// import { searchItem } from "../actions";

const useStyles = makeStyles((theme) => ({
  searchBarStyle: {
    marginBottom: "20px",
    marginLeft: "15%",
    marginRight: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const classes = useStyles();
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("here");
    // console.log(fromDate, "date");
    props.onSearchSubmit(
      term,
      new Date(fromDate / 1000).getTime(),
      new Date(toDate / 1000).getTime()
    );
  };
  // const onFromDateSubmit = (fromDate) => {
  //   console.log(fromDate, "from");
  //   props.onSearchSubmit(fromDate);
  // };
  // const onToDateSubmit = (toDate) => {
  //   console.log(toDate, "to");
  //   props.onSearchSubmit(toDate);
  // };
  const handleFromDateChange = (date) => {
    console.log("from");
    props.onSearchSubmit(
      term,
      new Date(date / 1000).getTime(),
      new Date(toDate / 1000).getTime()
    );
    setFromDate(date);
  };
  const handleToDateChange = (date) => {
    console.log("to");
    props.onSearchSubmit(
      term,
      new Date(fromDate / 1000).getTime(),
      new Date(date / 1000).getTime()
    );
    setToDate(date);
  };
  return (
    <>
      <div className={classes.searchBarStyle}>
        <form onSubmit={onFormSubmit}>
          <TextField
            id="outlined-basic"
            label="Search Case Descriptions"
            variant="outlined"
            type="text"
            fullWidth
            margin="normal"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="From Date"
            format="MM/dd/yyyy"
            autoOk
            disableFuture
            value={fromDate}
            onChange={(date) => handleFromDateChange(date)}
            // onAccept={onFromDateSubmit(new Date(fromDate / 1000).getTime())}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="To Date"
            format="MM/dd/yyyy"
            autoOk
            disableFuture
            value={toDate}
            minDate={fromDate}
            // onAccept={onToDateSubmit(new Date(toDate / 1000).getTime())}
            onChange={(date) => handleToDateChange(date)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}

export default SearchBar;
