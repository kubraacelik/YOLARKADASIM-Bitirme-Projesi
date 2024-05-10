import React, { useState, useEffect } from "react";
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
import Alert from "@mui/material/Alert";

export default function YolculukYayınla() {
  const [bosKoltukSayisi, setBosKoltukSayisi] = useState(0);
  const [baslangicNoktasi, setBaslangicNoktasi] = useState("");
  const [bitisNoktasi, setBitisNoktasi] = useState("");
  const [tarih, setTarih] = useState("");
  const [saat, setSaat] = useState("");
  const [hayvanDurumu, setHayvanDurumu] = useState("");
  const [sigaraDurumu, setSigaraDurumu] = useState("");
  const [ucret, setUcret] = useState(0);
  const [kaydetmeDurumu, setKaydetmeDurumu] = useState(null);

  //Alert 3sn sonra gitsin
  useEffect(() => {
    if (kaydetmeDurumu !== null) {
      const timer = setTimeout(() => {
        setKaydetmeDurumu(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [kaydetmeDurumu]);

  // Tarih bileşeninden seçilen tarihi güncellemek için fonksiyon
  const handleTarihChange = (selectedDate) => {
    setTarih(selectedDate); // Ana bileşenedeki tarih state'ini güncelle
  };

  // Saat bileşeninden seçilen saati güncellemek için fonksiyon
  const handleSaatChange = (selectedTime) => {
    setSaat(selectedTime); // Ana bileşenedeki saat state'ini güncelle
  };

  const handleKaydetClick = async (e) => {
    e.preventDefault();

    // Gerekli alanların dolu olup olmadığını kontrol et
    if (
      !bosKoltukSayisi ||
      !baslangicNoktasi ||
      !bitisNoktasi ||
      !tarih ||
      !saat ||
      !hayvanDurumu ||
      !sigaraDurumu ||
      !ucret
    ) {
      // Eğer gerekli alanlardan biri boşsa hata mesajı göster
      setKaydetmeDurumu(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/seyahatler",
        {
          bosKoltukSayisi,
          baslangicNoktasi,
          bitisNoktasi,
          tarih,
          saat,
          hayvanDurumu: convertToBoolean(hayvanDurumu),
          sigaraDurumu: convertToBoolean(sigaraDurumu),
          ucret,
        }
      );
      console.log("Yolculuk başarıyla kaydedildi:", response.data);
      setKaydetmeDurumu(true);

      setBosKoltukSayisi(0);
      setBaslangicNoktasi("");
      setBitisNoktasi("");
      setHayvanDurumu("");
      setSigaraDurumu("");
      setUcret(0);
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
              value={bosKoltukSayisi}
              className="Input"
              type="number"
              onChange={(e) => setBosKoltukSayisi(e.target.value)}
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
              value={baslangicNoktasi}
              onChange={(e) => setBaslangicNoktasi(e.target.value)}
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
              value={bitisNoktasi}
              onChange={(e) => setBitisNoktasi(e.target.value)}
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
              value={hayvanDurumu}
              onChange={(e) => setHayvanDurumu(e.target.value)}
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
              value={sigaraDurumu}
              onChange={(e) => setSigaraDurumu(e.target.value)}
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
      {kaydetmeDurumu === true && (
        <div className="uyarıYazısı">
          <Alert
            sx={{
              fontSize: 20,
              backgroundColor: "lightgreen",
              borderRadius: 20,
              width: 700,
            }}
            severity="success"
          >
            Yolculuk Başarıyla Kaydedildi.
          </Alert>
        </div>
      )}
      {kaydetmeDurumu === false && (
        <div className="uyarıYazısı">
          <Alert
            sx={{
              fontSize: 20,
              backgroundColor: "salmon",
              borderRadius: 20,
              width: 700,
            }}
            severity="error"
          >
            Lütfen Tüm Verileri Eksiksiz Giriniz!
          </Alert>
        </div>
      )}
      <Footer />
    </div>
  );
}
