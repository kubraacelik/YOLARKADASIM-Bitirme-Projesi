import React from "react";
import "../styles/Profil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../assets/avatar.jpg";
import { jwtDecode } from "jwt-decode";
import { Input } from "@mui/material";

export const Profil = () => {
  const userToken = localStorage.getItem("token");
  const data = jwtDecode(userToken);
  const name = data.ad;
  const surname = data.soyad;
  const password = data.sifre;
  const eposta = data.eposta;

  return (
    <>
      <Navbar />
      <div className="enKapsayici">
        <div className="profil">Profilinizi Düzenleyin</div>
        <div>
            <img className="kişiResmi" src={Avatar} alt="" />
            <button className="btnDuzenle">Düzenle</button>
          </div>
        <div className="kapsayıcı">
          <div className="profilBilgi">
            <label className="profil-label">Ad</label>
            <p className="profil-paragraf">{name}</p>
            <button className="btnDuzenle">Düzenle</button>
          </div>
          <div className="profilBilgi">
            <label className="profil-label">Soyad</label>
            <p className="profil-paragraf">{surname}</p>
            <button className="btnDuzenle">Düzenle</button>
          </div>
          <div className="profilBilgi">
            <label className="profil-label">Email</label>
            <p className="profil-paragraf">{eposta}</p>
            <button className="btnDuzenle">Düzenle</button>
          </div>
          <div className="yeniSifre">
            <div className="profilBilgiSifre">
              <label className="profil-label">Mevcut Şifrenizi Giriniz</label>
              <Input type="password" />
            </div>
            <div className="profilBilgiSifre">
              <label className="profil-label">Yeni Şifrenizi Giriniz</label>
              <Input type="password" />
            </div>
            <div className="profilBilgiSifre">
              <label className="profil-label">
                Yeni Şifrenizi Tekrar Giriniz
              </label>
              <Input type="password" />
            </div>
            <button className="btnGuncelle">Güncelle</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
