import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SeyahatKart.css";
import { SeyahatKartDialog } from "./SeyahatKartDialog";

export const SeyahatKart = () => {
  const [seyahatler, setSeyahatler] = useState([]);
  const [open, setOpen] = useState(null);

  const [aramaKriterleri, setAramaKriterleri] = useState({
    baslangic_noktasi: "",
    bitis_noktasi: "",
    tarih: "",
    bos_koltuk_sayisi: "",
  });

  const formatDate = (date) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    return `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year}`;
  };

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
          ...seyahat,
          tarih: formatDate(seyahat.tarih),
        }));
        setSeyahatler(seyahatler);
        console.log(seyahatler);
      } catch (error) {
        console.error("Veriler getirilirken hata oluştu:", error);
      }
    };

    if (
      aramaKriterleri.baslangic_noktasi &&
      aramaKriterleri.bitis_noktasi &&
      aramaKriterleri.tarih &&
      aramaKriterleri.bos_koltuk_sayisi
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
    <div className="seyahat">
      {seyahatler.map((seyahat, index) => (
        <div key={index} className="kart">
          <p>Kalkış Noktası: {seyahat.baslangic_noktasi}</p>
          <p>Varış Noktası: {seyahat.bitis_noktasi}</p>
          <p>Tarih: {seyahat.tarih}</p>
          <p>Boş Koltuk Sayısı: {seyahat.bos_koltuk_sayisi}</p>
        </div>
      ))}
      <SeyahatKartDialog open={open} handleClose={handleClose} />
    </div>
  );
};
