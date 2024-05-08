import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/material";
import dayjs from "dayjs"; // dayjs kütüphanesini import edin

export const Tarih = ({ handleTarihChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Tarihi doğru formata dönüştürmek için dayjs kütüphanesini kullanın
  function formatDate(date) {
    return dayjs(date).format("YYYY-MM-DD");
  }

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(date);
    handleTarihChange(formattedDate);
  };

  return (
    <Stack sx={{ border: '3px solid black', borderRadius: '20px', padding: '10px'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
        <StaticDatePicker
          value={selectedDate}
          onChange={handleDateChange}
          disablePast
        />
      </LocalizationProvider>
    </Stack>
  );
};