import React from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack } from "@mui/material";
import "dayjs/locale/tr";
import "../styles/YolculukYayınla.css";

export const Saat = ({ handleSaatChange }) => {

  function formatTime(date) {
    const hour = date.hour();
    const minute = date.minute();
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  }

  const handleTimeChange = (time) => {
    const lastTime = formatTime(time);
    console.log(lastTime);
  
    // Seçilen saati ana bileşene iletmek için props fonksiyonunu çağır
    handleSaatChange(lastTime);
  };
  

  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
        <TimePicker
          sx={{
            ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "black",
              },
            ".css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
          }}
          localeText={{
            okButtonLabel: "Onayla",
            cancelButtonLabel: "İptal Et",
            toolbarTitle: "Tarih Seçiniz",
          }}
          slotProps={{
            layout: {
              sx: {
                ".css-jv54yp-MuiList-root-MuiMultiSectionDigitalClockSection-root": {
                  width: "100px",
                },
              },
            },
            popper: { placement: "bottom" },
          }}
          label="Kalkış Saatinizi Şeçiniz"
          ampm={false}
          onChange={handleTimeChange}
        />
      </LocalizationProvider>
    </Stack>
  );
};
