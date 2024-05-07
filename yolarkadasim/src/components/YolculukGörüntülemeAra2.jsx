import React from "react";
import "../styles/YolculukGörüntülemeAra2.css";

export const YolculukGörüntülemeAra2 = ({ degistirStil }) => {
  return (
    <div className="ara2">
      <div className="arama2">
        <div className="arama-elemanları2">
          <div className="kalkış2">
            <label for="sehirler">Kalkış Yeri</label>
            <select id="sehirler" name="sehirler">
              <option value="baslangic" disabled selected>
                Kalkış Yeri Seçiniz
              </option>
              <option value="Ankara">Ankara</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
          </div>
          <hr className="dikey-çizgi2" />
          <div className="varış2">
            <label for="sehirler">Varış Yeri</label>
            <select id="sehirler" name="sehirler">
              <option value="baslangic" disabled selected>
                Varış Yeri Seçiniz
              </option>
              <option value="Ankara">Ankara</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
          </div>
          <hr className="dikey-çizgi2" />
          <div className="tarih2">
            <label for="tarih">Tarih</label>
            <input type="date" id="tarih" name="tarih" />
          </div>
          <hr className="dikey-çizgi2" />
          <div className="kişi-sayısı2">
            <label>Kişi Sayısı</label>
            <input type="number" defaultValue={0} />
          </div>
        </div>
        <div>
          <button className="arama-btn2" onClick={degistirStil}>
            Ara
          </button>
        </div>
      </div>
    </div>
  );
};
