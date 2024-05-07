import React, { useState, useEffect } from "react";
import "../styles/SeyahatKart.css";
import avatar from "../assets/avatar.jpg";
import axios from "axios";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import { SeyahatKartDialog } from "./SeyahatKartDialog";

export const SeyahatKart = () => {
  const [seyahatler, setSeyahatler] = useState([]);
  const [open, setOpen] = useState(null);
  const [baslangicNoktasi, setBaslangicNoktasi] = useState('');
  const [bitisNoktasi, setBitisNoktasi] = useState('');
  const [tarih, setTarih] = useState('');
  const [bosKoltukSayisi, setBosKoltukSayisi] = useState('');

  const [aramaKriterleri, setAramaKriterleri] = useState({
    baslangic_noktasi: baslangicNoktasi,
    bitis_noktasi: bitisNoktasi,
    tarih: tarih,
    bos_koltuk_sayisi: bosKoltukSayisi
  });

  const handleSearch = () => {
    setAramaKriterleri({
      baslangic_noktasi: baslangicNoktasi,
      bitis_noktasi: bitisNoktasi,
      tarih: tarih,
      bos_koltuk_sayisi: parseInt(bosKoltukSayisi) // parseInt ile dönüştür
    });
  };

  const handleButtonClick = () => {
    handleSearch(); // Kullanıcının belirlediği kriterlere göre arama yap
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/seyahatler/arama", {
          params: aramaKriterleri 
        });
        setSeyahatler(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Veriler getirilirken hata oluştu:", error);
      }
    };
    fetchData();
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
        <button key={index} className="open-kart" onClick={() => handleClickOpen(index)}>
          <div className="kart">
            <div className="kart-icerik">
              <Timeline sx={{ width: "340px", marginTop: "20px" }}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{seyahat.baslangic_noktasi}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>{seyahat.bitis_noktasi}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>{seyahat.tarih}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>{seyahat.bos_koltuk_sayisi}</TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </button>
      ))}
      <SeyahatKartDialog open={open} handleClose={handleClose} />
    </div>
  );
};
