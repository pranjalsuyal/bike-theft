import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  searchBarStyle: {
    paddingTop: "20px",
    marginBottom: "20px",
    marginLeft: "15%",
    marginRight: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  alignDate: {
    margin: "0 20%",
  },
}));

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [fromDate, setFromDate] = useState(new Date(0));
  const [toDate, setToDate] = useState(new Date());
  const classes = useStyles();
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSearchSubmit(
      term,
      new Date(fromDate / 1000).getTime(),
      new Date(toDate / 1000).getTime()
    );
  };
  const handleFromDateChange = (date) => {
    props.onSearchSubmit(
      term,
      new Date(date / 1000).getTime(),
      new Date(toDate / 1000).getTime()
    );
    setFromDate(date);
  };
  const handleToDateChange = (date) => {
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
      </div>
      <div className={classes.alignDate}>
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
