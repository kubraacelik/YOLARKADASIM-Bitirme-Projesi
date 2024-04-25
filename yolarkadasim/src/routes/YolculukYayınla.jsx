import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import "../styles/YolculukYayınla.css";
import { Tarih } from "../components/Tarih";
import { Saat } from "../components/Saat";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";

export default function YolculukYayınla() {
  return (
    <div>
      <Navbar />
      <Box>
        <Box
          sx={{
            height: 200,
            marginTop: 10,
          }}
        >
          <Typography textAlign="center" variant="h3">
            Yeni Bir Yolculuk Yayınla
          </Typography>
        </Box>
        <Box justifyContent="center" textAlign="center">
          <Typography textAlign="center" variant="h6">
            Yolculuk Detaylarını Paylaşın
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
            }}
          >
            <PersonOutlineOutlinedIcon
              sx={{ marginRight: 1, fontSize: 30, marginTop: 2 }}
            />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Kişi Sayısı
            </Typography>
            <input className="kisiSayiInput" type="number" min="0" max="4" />
          </Box>

          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
            }}
          >
            <FlightTakeoffIcon sx={{ marginRight: 1, fontSize: 30, marginTop: 2 }} />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Kalkış Yeri
            </Typography>
            <select className="SeyahatInput" id="sehirler" name="sehirler">
              <option value="baslangic" disabled selected>
                Kalkış Yeri Seçiniz
              </option>
              <option value="ankara">Ankara</option>
              <option value="zonguldak">Zonguldak</option>
            </select>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
            }}
          >
            <FlightLandIcon sx={{ marginRight: 1, fontSize: 30, marginTop: 2 }} />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Varış Yeri
            </Typography>
            <select className="SeyahatInput" id="sehirler" name="sehirler">
              <option value="baslangic" disabled selected>
                Varış Yeri Şeçiniz
              </option>
              <option value="ankara">Ankara</option>
              <option value="zonguldak">Zonguldak</option>
            </select>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
            }}
          >
            <Tarih />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
              height: 50,
            }}
          >
            <QueryBuilderOutlinedIcon
              sx={{ marginRight: 1, fontSize: 30, marginTop: 2 }}
            />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Kalkış Saati
            </Typography>
            <Saat />
          </Box>

          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
            }}
          >
            <button className="yayinla-btn">Kaydet</button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
