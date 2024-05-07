import React, { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Stack } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import "../styles/YolculukYayınla.css";

export const Saat = () => {
  const [value, setValue] = useState(null);

  // Şimdiki Saati alıyor
  const now = dayjs();
  const currentHour = now.hour();
  const currentMinute = now.minute();

  // Minimum seçilebilir saati ayarlıyor
  // const minTime = dayjs().set("hour", currentHour).set("minute", currentMinute);

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
          value={value}
          onChange={(newValue) => setValue(newValue)}
          // minTime={minTime}
        />
      </LocalizationProvider>
    </Stack>
  );
};
