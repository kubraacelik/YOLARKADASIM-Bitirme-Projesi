import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/YolculukGörüntülemeAra2.css";
import { SeyahatKart } from "./SeyahatKart";
import { Alert } from "@mui/material";

export const YolculukGörüntülemeAra2 = () => {
  const [baslangicNoktasi, setBaslangicNoktasi] = useState("");
  const [bitisNoktasi, setBitisNoktasi] = useState("");
  const [tarih, setTarih] = useState("");
  const [bosKoltukSayisi, setBosKoltukSayisi] = useState(0);
  const [seyahatler, setSeyahatler] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // Uyarı mesajı için state
  const [showAlert2, setShowAlert2] = useState(false);

  //Alert 3sn sonra gitsin
  useEffect(() => {
    if (showAlert !== null || showAlert2 !== null) {
      const timer = setTimeout(() => {
        setShowAlert(null);
        setShowAlert2(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert, showAlert2]);

  const handleSearch = async () => {
    if (!baslangicNoktasi || !bitisNoktasi || !tarih || !bosKoltukSayisi) {
      setShowAlert2(true);
      console.error("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:8080/api/seyahatler/arama",
        {
          params: {
            baslangicNoktasi: baslangicNoktasi,
            bitisNoktasi: bitisNoktasi,
            tarih: tarih,
            bosKoltukSayisi: bosKoltukSayisi,
          },
        }
      );

      if (response.data.length === 0) {
        setShowAlert(true); // Veri bulunamazsa uyarı mesajını göster
      } else {
        setShowAlert(false);
      }

      setSeyahatler(response.data); // Verileri state'e kaydet
    } catch (error) {
      console.error("Veriler getirilirken hata oluştu:", error);
    }
  };

  return (
    <div className="ara2">
      <div className="arama2">
        <div className="arama-elemanları2">
          <div className="kalkış2">
            <label htmlFor="kalkisNoktasi">Kalkış Yeri</label>
            <select
              id="kalkisNoktasi"
              name="kalkisNoktasi"
              value={baslangicNoktasi}
              onChange={(e) => setBaslangicNoktasi(e.target.value)}
            >
              <option value="" disabled>
                Kalkış Yeri Seçiniz
              </option>
              <option value="Ankara">Ankara</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
          </div>
          <hr className="dikey-çizgi2" />
          <div className="varış2">
            <label htmlFor="varisNoktasi">Varış Yeri</label>
            <select
              id="varisNoktasi"
              name="varisNoktasi"
              value={bitisNoktasi}
              onChange={(e) => setBitisNoktasi(e.target.value)}
            >
              <option value="" disabled>
                Varış Yeri Seçiniz
              </option>
              <option value="Ankara">Ankara</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
          </div>
          <hr className="dikey-çizgi2" />
          <div className="tarih2">
            <label htmlFor="tarih">Tarih</label>
            <input
              value={tarih}
              type="date"
              id="tarih"
              name="tarih"
              onChange={(e) => setTarih(e.target.value)}
            />
          </div>
          <hr className="dikey-çizgi2" />
          <div className="kişi-sayısı2">
            <label htmlFor="kisiSayisi">Kişi Sayısı</label>
            <input
              value={bosKoltukSayisi}
              type="number"
              id="kisiSayisi"
              name="kisiSayisi"
              onChange={(e) => setBosKoltukSayisi(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="arama-btn2" onClick={handleSearch}>
            Ara
          </button>
        </div>
      </div>
      {/* Uyarı mesajı */}
      {showAlert && (
        <div className="uyarıMesajı">
          <Alert
            sx={{
              fontSize: 20,
              backgroundColor: "salmon",
              borderRadius: 20,
              width: 900,
            }}
            severity="error"
          >
            Bu Seçimlere Uyan Bir Seyahat Bulunamamaktadır!
          </Alert>
        </div>
      )}
      {showAlert2 && (
        <div className="uyarıMesajı">
          <Alert
            sx={{
              fontSize: 20,
              borderRadius: 20,
              backgroundColor: "#F7DC6F",
              width: 900,
            }}
            severity="warning"
          >
            Lütfen Tüm Alanları Doldurun!
          </Alert>
        </div>
      )}
      <SeyahatKart seyahatler={seyahatler} />
    </div>
  );
};
