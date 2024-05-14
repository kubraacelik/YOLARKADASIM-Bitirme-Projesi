import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import axios from "axios";
import Alert from "@mui/material/Alert";

const YeniSifre = () => {
  const [yeniSifre, setYeniSifre] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    const successTimer = setTimeout(() => {
      setYeniSifre(null);
      // Başarılı kayıt olma durumunda 2 saniye sonra giriş sayfasına yönlendirme
      if (yeniSifre === true) {
        navigation("/profilAyarlari");
      }
    }, 2000);

    return () => clearTimeout(successTimer);
  }, [yeniSifre, navigation]);

  const onSubmit = async (values, actions) => {
    try {
      const token = localStorage.getItem("token"); // localStorage'dan token bilgisini al
      if (!token) {
        console.error("Token bulunamadı!");
        return;
      }

      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Token'ı parse ederek içindeki bilgilere erişme
      const eposta = decodedToken.eposta;

      await updateUserPassword(eposta, values.sifre); // Kullanıcının şifresini güncelle
      actions.resetForm(); // Formu sıfırla
      setYeniSifre(true); // Başarı durumunda true
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      setYeniSifre(false); // Hata durumunda false
    }
  };

  


  const updateUserPassword = async (eposta, newPass) => {
    try {
      // Kullanıcının şifresini güncelle
      const response = await axios.put(
        `http://localhost:8080/api/kullanicilar/${eposta}`,
        { sifre: newPass }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      throw error;
    }
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      sifre: "",
      tekrarliSifre: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div>
      <Navbar />
      <div className="yeniSifreContainer">
        <div className="yeniSifre-aciklama">
          <p>Şifre Değiştirme</p>
        </div>
        <div className="yeniSifreGuncelleme">
          <form onSubmit={handleSubmit}>
            <div className="yeniSifre-profilBilgi">
              <label className="yeniSifre-label">
                Yeni Şifrenizi Giriniz *
              </label>
              <input
                style={{
                  width: 300,
                  padding: 12,
                  fontSize: 15,
                  borderRadius: 10,
                  marginLeft: 610,
                  marginTop: 20,
                }}
                type="password"
                placeholder="Yeni Şifrenizi Giriniz"
                value={values.sifre}
                onChange={handleChange}
                id="sifre"
                className={errors.sifre ? "input-error" : ""}
              />
              {errors.sifre && <p className="error">{errors.sifre}</p>}
            </div>
            <div className="yeniSifre-profilBilgi">
              <label className="yeniSifre-label">
                Yeni Şifrenizi Tekrar Giriniz *
              </label>
              <input
                style={{
                  width: 300,
                  padding: 12,
                  fontSize: 15,
                  borderRadius: 10,
                  marginLeft: 610,
                  marginTop: 20,
                }}
                type="password"
                placeholder="Yeni Şifrenizi Tekrar Giriniz"
                value={values.tekrarliSifre}
                onChange={handleChange}
                id="tekrarliSifre"
                className={errors.tekrarliSifre ? "input-error" : ""}
              />
              {errors.tekrarliSifre && (
                <p className="error">{errors.tekrarliSifre}</p>
              )}
            </div>

            <div className="btnGuncelleContainer">
              <button className="btnGuncelle" type="submit">
                Güncelle
              </button>
            </div>
            {yeniSifre === true && (
              <div>
                <Alert
                  sx={{ fontSize: 20, backgroundColor: "lightgreen" }}
                  severity="success"
                >
                  Şifre Başarıyla Kayıt Edildi.
                </Alert>
              </div>
            )}
            {yeniSifre === false && (
              <div>
                <Alert
                  sx={{ fontSize: 20, backgroundColor: "salmon" }}
                  severity="error"
                >
                  Şifre Kayıt Edilirken Hata Oluştu!
                </Alert>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default YeniSifre;
