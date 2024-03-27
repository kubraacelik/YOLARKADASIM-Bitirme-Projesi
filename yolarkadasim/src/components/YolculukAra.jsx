import React from "react";
import "../styles/YolculukAra.css";
import car1 from '../assets/örnek1.jpg'
import car2 from '../assets/örnek2.jpg'
import car3 from '../assets/örnek3.jpg'
import car4 from '../assets/örnek4.jpg'

function YolculukAra() {
  return (
    <div>
      <div>
        <div className="arama-resmi-container">
          <div className="arama-resmi">
            <img src={car1} alt="" />
          </div>
          <div className="tanım">
            <p>Yolculuk Maliyetlerini Düşüren Ekonomik Platform: Seyahatlerini Paylaş, Masrafları Azalt!</p>
          </div>
        </div>
      </div>
      <div className="arama">
        <div className="arama-elemanları">
          <div className="kalkış">
            <label for="sehirler">Kalkış Yeri</label>
            <select id="sehirler" name="sehirler">
              <option value="baslangic" disabled selected>
                Kalkış Yeri Seçiniz
              </option>
              <option value="ankara">Ankara</option>
              <option value="zonguldak">Zonguldak</option>
            </select>
          </div>
          <hr className="dikey-çizgi" />
          <div className="varış">
            <label for="sehirler">Varış Yeri</label>
            <select id="sehirler" name="sehirler">
              <option value="baslangic" disabled selected>
                Varış Yeri Seçiniz
              </option>
              <option value="ankara">Ankara</option>
              <option value="zonguldak">Zonguldak</option>
            </select>
          </div>
          <hr className="dikey-çizgi" />
          <div className="tarih">
            <label for="tarih">Tarih</label>
            <input type="date" id="tarih" name="tarih" />
          </div>
          <hr className="dikey-çizgi" />
          <div className="kişi-sayısı">
            <label>Kişi Sayısı</label>
            <input type="number" defaultValue={0} />
          </div>
        </div>
        <div>
            <button className="arama-btn">ARA</button>
        </div>
      </div>
    </div>
  );
}

export default YolculukAra;
