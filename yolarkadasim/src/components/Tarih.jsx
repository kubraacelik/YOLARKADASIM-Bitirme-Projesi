import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, StaticDatePicker, DatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/material";

export const Tarih = ({ handleTarihChange }) => {
  const [selectedDate, setSelectedDate] = useState(null); // Boş değer durumu için null olarak başlatıyoruz
  
  function formatDate(date) {
    const day = date.date()+1;
    const month = date.month()+1;
    const year = date.year();
    return `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year}`;
  }
  
  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(date); // Tarih seçildiğinde state'i güncelle
    handleTarihChange(formattedDate); // Seçilen tarihi ana bileşene ilet
  };

  return (
    <Stack sx={{ border: '3px solid black', borderRadius: '20px', padding: '10px'}}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
        <StaticDatePicker
          value={selectedDate} // Seçilen tarihi belirle
          onChange={handleDateChange}
          disablePast
        />
      </LocalizationProvider>
    </Stack>
  );
};
