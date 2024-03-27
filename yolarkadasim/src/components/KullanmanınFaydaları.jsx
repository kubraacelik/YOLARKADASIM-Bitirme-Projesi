import React from "react";
import "../styles/KullanmanınFaydaları.css";
import faydaları1 from "../assets/faydaları1.png";
import faydaları2 from "../assets/faydaları2.png";
import faydaları3 from "../assets/faydaları3.png";
import faydaları4 from "../assets/faydaları4.png";
import resim2 from "../assets/nasıl-kullanılır-resim2.png";
import resim3 from "../assets/nasıl-kullanılır-resim3.png";
import resim4 from "../assets/nasıl-kullanılır-resim4.png";
import resim5 from "../assets/nasıl-kullanılır-resim5.png";
import resim6 from "../assets/nasıl-kullanılır-resim6.png";

export default function KullanmanınFaydaları() {
  return (
    <div>
      <div>
        <p className="tanım">Yol Arkadaşım'ı Kullanmanın Faydaları</p>
      </div>
      <div>
        <div className="faydaları-container">
          <div className="faydalarıDiv">
            <div className="faydaları">
              <p className="başlık">1- Rezervasyon Kolaylığı</p>
              <div className="açıklamaDiv">
                <p className="açıklama">
                  Rezervasyonunuzu kolaylıkla yapın ve seyahatinizi planlayın!
                  Basit rezervasyon adımlarıyla istediğiniz tarihlerdeki uygun
                  seçenekleri bulun, yerinizi ayırtın ve seyahatinizi hızlıca
                  planlayın.
                </p>
              </div>
            </div>
            <div className="faydaları-resim">
              <img src={resim3} alt="" />
            </div>
          </div>
        </div>

        <div className="faydaları-container">
          <div className="faydalarıDiv">
            <div className="faydaları">
              <p className="başlık">2- Güvenli ve Rahat Ulaşım</p>
              <div className="açıklamaDiv">
                <p className="açıklama">
                  Rezervasyonunuzu kolaylıkla yapın ve seyahatinizi planlayın!
                  Basit rezervasyon adımlarıyla istediğiniz tarihlerdeki uygun
                  seçenekleri bulun, yerinizi ayırtın ve seyahatinizi hızlıca
                  planlayın.
                </p>
              </div>
            </div>
            <div className="faydaları-resim">
              <img src={resim4} alt="" />
            </div>
          </div>
        </div>

        <div className="faydaları-container">
          <div className="faydalarıDiv">
            <div className="faydaları">
              <p className="başlık">3- Ekonomik Bir Yolculuk</p>
              <div className="açıklamaDiv">
                <p className="açıklama">
                  Ekonomik bir yolculuk deneyimi yaşayın! Bütçenizi düşünerek
                  uygun fiyatlarla seyahat edin ve seyahat maliyetlerinizi en
                  aza indirerek ekonomik bir alternatifle istediğiniz yere
                  ulaşın.
                </p>
              </div>
            </div>
            <div className="faydaları-resim">
              <img src={resim5} alt="" />
            </div>
          </div>
        </div>

        <div className="faydaları-container">
          <div className="faydalarıDiv">
            <div className="faydaları">
              <p className="başlık">4- Alternatif Çevre Dostu</p>
              <div className="açıklamaDiv">
                <p className="açıklama">
                  Araç paylaşımı yaparak karbon ayak izinizi azaltabilir ve
                  doğaya daha az zarar veren bir seyahat seçeneği tercih
                  edebilirsiniz.
                </p>
              </div>
            </div>
            <div className="faydaları-resim">
              <img src={resim6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
