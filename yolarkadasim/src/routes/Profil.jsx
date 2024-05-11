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
          <label className="profil-label">Ad</label>
          <p className="profil-paragraf">İremnur</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="profil-label">Soyad</label>
          <p className="profil-paragraf">Ahi</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="profil-label">Şifre</label>
          <p className="profil-paragraf">Zonguldak</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="profil-label">Email</label>
          <p className="profil-paragraf">iremnurahi@gmail.com</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="profil-label">Doğum Günü</label>
          <p className="profil-paragraf">30/01/2000</p>
          <button className="btn">Düzenle</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
