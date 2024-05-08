import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SeyahatKart.css";
import { SeyahatKartDialog } from "./SeyahatKartDialog";

export const SeyahatKart = () => {
  const [seyahatler, setSeyahatler] = useState([]);
  const [open, setOpen] = useState(null);

  const [aramaKriterleri, setAramaKriterleri] = useState({
    baslangicNoktasi: "",
    bitisNoktasi: "",
    tarih: "",
    bosKoltukSayisi: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/seyahatler/arama",
          {
            params: aramaKriterleri,
          }
        );
        const seyahatler = response.data.map((seyahat) => ({
          ...seyahat
        }));
        setSeyahatler(seyahatler);
        console.log(seyahatler);
      } catch (error) {
        console.error("Veriler getirilirken hata oluştu:", error);
      }
    };

    if (
      aramaKriterleri.baslangicNoktasi &&
      aramaKriterleri.bitisNoktasi &&
      aramaKriterleri.tarih &&
      aramaKriterleri.bosKoltukSayisi
    ) {
      fetchData();
    }
  }, [aramaKriterleri]);

  const handleClickOpen = (index) => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <div>Yolculuklar</div>

      {seyahatler && (
        <div className="seyahat">
          {seyahatler.map((seyahat, index) => (
            <div key={index} className="kart">
              <p>Kalkış Noktası: {seyahat.baslangicNoktasi}</p>
              <p>Varış Noktası: {seyahat.bitisNoktasi}</p>
              <p>Tarih: {seyahat.tarih}</p>
              <p>Boş Koltuk Sayısı: {seyahat.bosKoltukSayisi}</p>
            </div>
          ))}
          <SeyahatKartDialog open={open} handleClose={handleClose} />
        </div>
      )}
    </div>
  );
};
