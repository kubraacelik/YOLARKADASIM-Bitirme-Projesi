import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SeyahatKart.css";
import { SeyahatKartDialog } from "./SeyahatKartDialog";
import SürücüResim from "../assets/Add-user.jpg"

export const SeyahatKart = ({ seyahatler }) => {
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
          ...seyahat,
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
      {seyahatler && (
        <div className="seyahat">
          {seyahatler.map((seyahat, index) => (
            <div key={index} className="kart">
              <div className="kart-elemanlar">
              <div className="kart-eleman">
                <p className="kart-eleman-seçilen">Kalkış Noktası: </p>
                <p className="kart-eleman-gelen">{seyahat.baslangicNoktasi}</p>
              </div>
              <div className="kart-eleman">
                <p className="kart-eleman-seçilen">Varış Noktası: </p>
                <p className="kart-eleman-gelen">{seyahat.bitisNoktasi}</p>
              </div>
              </div>
              <div className="kart-elemanlar">
              <div className="kart-eleman">
                <p className="kart-eleman-seçilen">Tarih: </p>
                <p className="kart-eleman-gelen">{seyahat.tarih}</p>
              </div>
              <div className="kart-eleman ayarla">
                <p className="kart-eleman-seçilen ayarla">Boş Koltuk Sayısı: </p>
                <p className="kart-eleman-gelen">{seyahat.bosKoltukSayisi}</p>
              </div>
              </div>
              <div className="sürücü-resim">
                <img src={SürücüResim} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
