import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Mesaj.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Mesaj() {
  return (
    <div>
      <Navbar />
      <div className="kapsayici">
        <div className="bilgi">
          <InfoIcon />
          <p className="kalkisYeri">Zonguldak</p>
          <ArrowRightAltIcon />
          <p className="varisYeri">Ankara</p>
          <p className="tarih">Perşembe, 25 Nisan 2024, 10:40</p>
          <br />
        </div>
        <p className="konusmaTarihi">20 Nisan 2024</p>
        <div className="mesajlar">
          <p className="sagMesaj">
            Merhaba
            <PersonIcon />
          </p>
          <br />
          <p className="solMesaj">
            <PersonIcon />
            Merhaba
          </p>
        </div>
        <div className="mesaj-input">
          <input
            className="text"
            type="text"
            placeholder="Mesajınızı buraya yazınız..."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
