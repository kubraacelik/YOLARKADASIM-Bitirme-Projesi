import React from "react";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../assets/avatar.jpg";

export const Profil = () => {
  return (
    <>
      <Navbar />
      <div className="enKapsayici">
        <div className="profil">Profil</div>
        <div>
          <img className="kişiResmi" src={Avatar} alt="" />
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label>Ad</label>
          <p>İremnur</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label>Soyad</label>
          <p>Ahi</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label>Şifre</label>
          <p>Zonguldak</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label>Email</label>
          <p>iremnurahi@gmail.com</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label>Doğum Günü</label>
          <p>30/01/2000</p>
          <button className="btn">Düzenle</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
