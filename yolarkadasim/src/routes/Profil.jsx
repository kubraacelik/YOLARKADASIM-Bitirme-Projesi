import React from "react";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../assets/avatar.jpg";
import { jwtDecode } from "jwt-decode";

export const Profil = () => {
  const userToken = localStorage.getItem('token');
  const data = jwtDecode(userToken);
  const name = data.user.ad;
  const surname = data.user.soyad;
  const password = data.user.sifre;
  const eposta = data.user.eposta;
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
          <p className="profil-paragraf">{name}</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="profil-label">Soyad</label>
          <p className="profil-paragraf">{surname}</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="profil-label">Şifre</label>
          <p className="profil-paragraf">{password}</p>
          <button className="btn">Düzenle</button>
        </div>
        <div className="profilBilgi">
          <label className="profil-label">Email</label>
          <p className="profil-paragraf">{eposta}</p>
          <button className="btn">Düzenle</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
