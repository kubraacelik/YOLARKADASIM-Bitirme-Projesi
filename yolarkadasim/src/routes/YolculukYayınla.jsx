import React, { useState } from "react";
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
import { FaCat } from "react-icons/fa6";
import { MdOutlineSmokeFree } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import axios from "axios";

export default function YolculukYayınla() {
  const [bos_koltuk_sayisi, setBos_koltuk_sayisi] = useState(0);
  const [baslangic_noktasi, setBaslangic_noktasi] = useState("");
  const [bitis_noktasi, setBitis_noktasi] = useState("");
  const [tarih, setTarih] = useState("");
  const [saat, setSaat] = useState("");
  const [hayvan_durumu, setHayvan_durumu] = useState("");
  const [sigara_durumu, setSigara_durumu] = useState("");
  const [ucret, setUcret] = useState(0);
  const [kaydetmeDurumu, setKaydetmeDurumu] = useState(null);

  // Tarih bileşeninden seçilen tarihi güncellemek için fonksiyon
  const handleTarihChange = (selectedDate) => {
    setTarih(selectedDate); // Ana bileşenedeki tarih state'ini güncelle
  };

  // Saat bileşeninden seçilen saati güncellemek için fonksiyon
  const handleSaatChange = (selectedTime) => {
    setSaat(selectedTime); // Ana bileşenedeki saat state'ini güncelle
  };

  const resetDateTime = () => {
    setTarih("");
    setSaat("");
  };

  const handleKaydetClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/seyahatler",
        {
          bos_koltuk_sayisi,
          baslangic_noktasi,
          bitis_noktasi,
          tarih,
          saat,
          hayvan_durumu: convertToBoolean(hayvan_durumu),
          sigara_durumu: convertToBoolean(sigara_durumu),
          ucret,
        }
      );
      console.log("Yolculuk başarıyla kaydedildi:", response.data);

      resetDateTime();

      setBos_koltuk_sayisi(0);
      setBaslangic_noktasi("");
      setBitis_noktasi("");
      setHayvan_durumu("");
      setSigara_durumu("");
      setUcret(0);
      setKaydetmeDurumu(true);
    } catch (error) {
      console.error("Yolculuk kaydedilirken hata oluştu:", error);
      setKaydetmeDurumu(false);
    }
  };

  const convertToBoolean = (value) => {
    return value === "evet" ? true : false;
  };

  return (
    <div>
      <Navbar />
      <Box>
        <Box
          sx={{
            height: 100,
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
            <input
              value={bos_koltuk_sayisi}
              className="Input"
              type="number"
              onChange={(e) => setBos_koltuk_sayisi(e.target.value)}
            />
          </Box>

          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
            }}
          >
            <FlightTakeoffIcon
              sx={{ marginRight: 1, fontSize: 30, marginTop: 2 }}
            />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Kalkış Yeri
            </Typography>
            <select
              className="Input"
              id="sehirler"
              name="sehirler"
              value={baslangic_noktasi}
              onChange={(e) => setBaslangic_noktasi(e.target.value)}
            >
              <option value="" disabled>
                Kalkış Yeri Seçiniz
              </option>
              <option value="Ankara">Ankara</option>
              <option value="Zonguldak">Zonguldak</option>
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
            <FlightLandIcon
              sx={{ marginRight: 1, fontSize: 30, marginTop: 2 }}
            />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Varış Yeri
            </Typography>
            <select
              className="Input"
              id="sehirler"
              name="sehirler"
              value={bitis_noktasi}
              onChange={(e) => setBitis_noktasi(e.target.value)}
            >
              <option value="" disabled>
                Varış Yeri Şeçiniz
              </option>
              <option value="Ankara">Ankara</option>
              <option value="Zonguldak">Zonguldak</option>
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
            <Tarih handleTarihChange={handleTarihChange} />

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
            <Saat handleSaatChange={handleSaatChange} />
          </Box>

          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              marginTop: 5,
              display: "flex",
            }}
          >
            <FaCat className="icon" />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Hayvan İzni Var Mı?
            </Typography>
            <select
              className="Input"
              id="hayvanlar"
              name="hayvanlar"
              value={hayvan_durumu}
              onChange={(e) => setHayvan_durumu(e.target.value)}
            >
              <option value="" disabled>
                Seçiniz
              </option>
              <option value="evet">Evet</option>
              <option value="hayır">Hayır</option>
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
            <MdOutlineSmokeFree className="icon" />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Sigara İzni Var Mı?
            </Typography>
            <select
              className="Input"
              id="sigara"
              name="sigara"
              value={sigara_durumu}
              onChange={(e) => setSigara_durumu(e.target.value)}
            >
              <option value="" disabled>
                Seçiniz
              </option>
              <option value="evet">Evet</option>
              <option value="hayır">Hayır</option>
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
            <GiTakeMyMoney className="icon" />
            <Typography
              variant="body1"
              sx={{ fontSize: 20, marginRight: 2, marginTop: 2 }}
            >
              Ücret
            </Typography>
            <div style={{ position: "relative" }}>
              <input
                className="Input"
                type="number"
                value={ucret}
                onChange={(e) => setUcret(e.target.value)}
              />
              <span
                style={{
                  position: "absolute",
                  right: "45px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "30px",
                }}
              >
                ₺
              </span>
            </div>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <button className="yayinla-btn" onClick={handleKaydetClick}>
              Kaydet
            </button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
