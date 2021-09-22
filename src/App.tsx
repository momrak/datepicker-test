import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDayjs";
import MuiDatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import nb from "dayjs/locale/nb";
import React, { useState } from "react";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import "./App.css";

function DatePicker({ field }: { field: ControllerRenderProps }) {
  return (
    <LocalizationProvider locale={nb} dateAdapter={DateAdapter}>
      <MuiDatePicker
        renderInput={(params) => <TextField {...params} />}
        mask="__.__.____"
        inputFormat="DD.MM.YYYY"
        {...field}
        onChange={(e) => {
          console.log("CHANGING");
          console.log(e);
          field.onChange(e);
        }}
      />
    </LocalizationProvider>
  );
}

function App() {
  const { control } = useForm();

  return (
    <div className="App">
      <div>
        <label htmlFor="fromDate">From Date</label>
        <Controller
          name="fromDate"
          control={control}
          render={({ field }) => <DatePicker field={field} />}
        />
      </div>
      <div>
        <label htmlFor="fromDate">To Date</label>
        <Controller
          name="fromDate"
          control={control}
          render={({ field }) => <DatePicker field={field} />}
        />
      </div>
    </div>
  );
}

export default App;
