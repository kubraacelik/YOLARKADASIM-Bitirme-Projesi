import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SeyahatKart.css";
import { SeyahatKartDialog } from "./SeyahatKartDialog";
import SürücüResim from "../assets/Add-user.jpg";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";

export const SeyahatKart = ({ seyahatler }) => {
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
            sigaraDurumu: sigaraDurumu,
            hayvanDurumu: hayvanDurumu,
            saat: saat,
            ucret: ucret,
          }
        );
        console.log(response.data);
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

  return (
    <div>
      <div>
        {Object.values(aramaKriterleri).every(value => value === "") && (
          <div>
            <Alert
              sx={{ fontSize: 20, backgroundColor: "salmon", borderRadius:20, width:900, marginTop:2 }}
              severity="error"
            >
              Bu Seçimlere Uyan Bir Seyahat Bulunamamaktadır!
            </Alert>
          </div>
        )}
      </div>
      {seyahatler && (
        <div className="seyahat">
          {seyahatler.map((seyahat, index) => (
            <div key={index} className="kart">
              <div className="kart-elemanlar">
                <div className="kart-eleman">
                  <p className="kart-eleman-seçilen">Kalkış Noktası: </p>
                  <p className="kart-eleman-gelen ayarla2">
                    {seyahat.baslangicNoktasi}
                  </p>
                </div>
                <div style={{ marginLeft: 4 }} className="kart-eleman2">
                  <p className="kart-eleman-seçilen">Varış Noktası: </p>
                  <p className="kart-eleman-gelen">{seyahat.bitisNoktasi}</p>
                </div>
              </div>
              <div className="kart-elemanlar">
                <div className="kart-eleman">
                  <p className="kart-eleman-seçilen">Boş Koltuk Sayısı:</p>
                  <p className="kart-eleman-gelen">{seyahat.bosKoltukSayisi}</p>
                </div>
                <div style={{ marginLeft: 63 }} className="kart-eleman2">
                  <p className="kart-eleman-seçilen">Tarih: </p>
                  <p className="kart-eleman-gelen">{seyahat.tarih}</p>
                </div>
              </div>
              <div className="kart-elemanlar">
                <div className="kart-eleman">
                  <p className="kart-eleman-seçilen">Sigara Durumu: </p>
                  <p className="kart-eleman-gelen ayarla">
                    {seyahat.sigaraDurumu ? "Evet" : "Hayır"}
                  </p>
                </div>
                <div style={{ marginLeft: 44 }} className="kart-eleman2">
                  <p className="kart-eleman-seçilen">Hayvan Durumu: </p>
                  <p className="kart-eleman-gelen">
                    {seyahat.hayvanDurumu ? "Evet" : "Hayır"}
                  </p>
                </div>
              </div>
              <div className="kart-elemanlar">
                <div className="kart-eleman">
                  <p className="kart-eleman-seçilen">Saat: </p>
                  <p className="kart-eleman-gelen">{seyahat.saat}</p>
                </div>
                <div style={{ marginLeft: 107 }} className="kart-eleman2">
                  <p className="kart-eleman-seçilen">Ücret: </p>
                  <p className="kart-eleman-gelen">{seyahat.ucret}</p>
                </div>
              </div>
              <div className="kart-elemanlar">
                <div className="sürücü-resim">
                  <img src={SürücüResim} alt="" />
                </div>
                <div className="iletisim">
                  <Link to="/mesajlar">Sürücü İle İletişime Geç</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
