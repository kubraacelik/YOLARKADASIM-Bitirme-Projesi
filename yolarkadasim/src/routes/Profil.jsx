import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Profil = () => {
  return (
    <>
      <Navbar />
      <div className="enKapsayici">
        <div className="profil">Profil</div>
        <AccountBoxIcon sx={{ width: "45px", height: "45px", marginLeft: "20px" }} />
        <div className="profilBilgi">
          <label className="label1">Ad Soyad</label>
          <p className="paragraf1">İremnur Ahi</p>
          <button className="adSoyadButon">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="label1">Konum</label>
          <p className="paragraf1">Zonguldak</p>
          <button className="adSoyadButon">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="label1">Email</label>
          <p className="paragraf1">iremnurahi@gmail.com</p>
          <button className="adSoyadButon">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="label1">Doğum Günü</label>
          <p className="paragraf1">30/01/2000</p>
          <button className="adSoyadButon">Düzenle</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
