import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/GirişYap.css";
import resim1 from "../assets/üyeOl-resim1.png";

export default function GirişYap() {
  return (
    <>
      <Navbar />
      <div>
        <div className="girisYap-container">
          <div
            className="girisYap-sol"
            style={{ backgroundImage: `url(${resim1})` }}
          ></div>
          <div className="girisYap-sag">
            <div className="tanım">Giriş Yapın</div>
            <form>
            
              
              <div className="girisYap-giris">
                <input
                  type="text"
                  placeholder="E-Posta Adresinizi Giriniz"
                  className="giris"
                />
              </div>
              <div className="girisYap-giris">
                <input
                  type="Password"
                  placeholder="Şifrenizi Giriniz"
                  className="giris"
                />
              </div>
              <div className="girisYap-giris">
                <label className="beni-unutma">
                  <input type="checkbox" />Beni Unutma
                </label>
              </div>
              <div className="girisYap-giris">
                <p className="parolayi-unuttum">Parolamı Unuttum</p>
              </div>
              <button className="girisYap-btn" type="submit">
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
