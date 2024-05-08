import React, {useEffect, useState} from "react";
import "../styles/YolculukGörüntülemeAra2.css";
import axios from "axios";

export const YolculukGörüntülemeAra2 = ({ degistirStil }) => {

  const [baslangicNoktasi, setBaslangicNoktasi] = useState('');
  const [bitisNoktasi, setBitisNoktasi] = useState('');
  const [tarih, setTarih] = useState('');
  const [bosKoltukSayisi, setBosKoltukSayisi] = useState('');

  const [aramaKriterleri, setAramaKriterleri] = useState({});

  const handleSearch = () => {
    setAramaKriterleri({
      baslangic_noktasi: baslangicNoktasi,
      bitis_noktasi: bitisNoktasi,
      tarih: tarih,
      bos_koltuk_sayisi: parseInt(bosKoltukSayisi) // parseInt ile dönüştür
    });

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/seyahatler/arama", {
          params: aramaKriterleri
        });
        setSeyahatler(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Veriler getirilirken hata oluştu:", error);
      }
    };
    fetchData();
};

  return (
    <div className="ara2">
      <div className="arama2">
        <div className="arama-elemanları2">
          <div className="kalkış2">
            <label for="sehirler">Kalkış Yeri</label>
            <select id="sehirler" name="sehirler">
              <option value={baslangicNoktasi} disabled selected>
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
              <option value={bitisNoktasi} disabled selected>
                Varış Yeri Seçiniz
              </option>
              <option value="Ankara">Ankara</option>
              <option value="Zonguldak">Zonguldak</option>
            </select>
          </div>
          <hr className="dikey-çizgi2" />
          <div className="tarih2">
            <label for="tarih">Tarih</label>
            <input value={tarih} type="date" id="tarih" name="tarih" />
          </div>
          <hr className="dikey-çizgi2" />
          <div className="kişi-sayısı2">
            <label>Kişi Sayısı</label>
            <input value={bosKoltukSayisi} type="number" defaultValue={0} />
          </div>
        </div>
        <div>
          <button className="arama-btn2" onClick={handleSearch}>
            Ara
          </button>
        </div>
      </div>
    </div>
  );
};