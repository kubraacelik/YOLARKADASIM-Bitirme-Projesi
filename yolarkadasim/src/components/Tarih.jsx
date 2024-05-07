import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, StaticDatePicker, DatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/material";
import { useState } from "react";

export const Tarih = () => {
  const [first, setfirst] = useState("");
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  }

  const handleDateChange = (date) => {
    const lastdate = formatDate(date.$d);
    setfirst(lastdate);
    console.log(lastdate);
  };

  return (
    <Stack sx={{ border: '3px solid black', borderRadius: '20px', padding: '10px'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
        <StaticDatePicker
          sx={{
            ".css-1hbyad5-MuiTypography-root": {
              visibility: "hidden",
              display: "none"
            },
            ".css-knqc4i-MuiDialogActions-root": {
              visibility: "hidden",
              display: "none"
            },
          }}
          onChange={handleDateChange}
          disablePast
        />
      </LocalizationProvider>
    </Stack>
  );
};
