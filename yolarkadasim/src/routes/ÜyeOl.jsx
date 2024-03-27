import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ÜyeOl.css";
import resim1 from "../assets/üyeOl-resim1.png";
import resim2 from "../assets/üyeOl-resim2.png";

export default function ÜyeOl() {
  return (
    <>
      <Navbar />
      <div>
        <div className="uyeOl-container">
          <div
            className="uyeOl-sol"
            style={{ backgroundImage: `url(${resim2})` }}
          ></div>
          <div className="uyeOl-sag">
            <div className="tanım">Üye Olun</div>
            <form>
              <div class="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="Adınızı Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="Soyadınızı Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="E-Posta Adresinizi Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="Password"
                  placeholder="Şifrenizi Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="Password"
                  placeholder="Şifrenizi Tekrar Giriniz"
                  class="giriş"
                />
              </div>
              <button className="kayıtOl-btn">Kayıt Ol</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
