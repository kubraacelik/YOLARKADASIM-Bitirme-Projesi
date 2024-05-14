import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { updateSchema } from "../schemas";
import { Alert } from "@mui/material";

const YeniSifre = () => {
  const [yeniSifre, setYeniSifre] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    if (yeniSifre === true) {
      const timer = setTimeout(() => {
        navigation("/profilAyarlari");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [yeniSifre, navigation]);

  const onSubmit = async (values, actions) => {
    try {
      const isPasswordValid = await validateCurrentPassword(values.sifre);
      if (isPasswordValid) {
        await updatePassword(values.yeniSifre);
        setYeniSifre(true);
        actions.resetForm();
      } else {
        setYeniSifre(false);
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };
  const updatePassword = async (newPassword) => {
    try {
      await axios.patch(
        "http://localhost:8080/api/kullanicilar", // Kullanıcı kimliğini ve yeni şifreyi uygun bir endpoint'e gönderin
        { newPassword }
      );
    } catch (error) {
      console.error("Şifre güncelleme hatası:", error);
      throw error;
    }
  };
  

  const validateCurrentPassword = async (password) => {
    try {
      const res = await axios.post("http://localhost:8080/api/kullanicilar", {
        password: password
      });
      console.log(res.data);
      return res.data.isValid;
    } catch (error) {
      console.log("Bir hata oluştu:", error);
      throw error;
    }
  };
  

  const { values, errors, isSubmitting, handleSubmit, handleChange } = useFormik({
      initialValues: {
        sifre: "",
        yeniSifre: "",
      },
      validationSchema: updateSchema,
      onSubmit,
    });
console.log(values.sifre);
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
                Mevcut Şifrenizi Giriniz *
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
                placeholder="Mevcut Şifrenizi Giriniz"
                value={values.sifre}
                onChange={handleChange}
                id="sifre"
                className={errors.sifre ? "input-error" : ""}
              />
              {errors.sifre && (
                <p className="error">{errors.sifre}</p>
              )}
            </div>
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
                value={values.yeniSifre}
                onChange={handleChange}
                id="yeniSifre"
                className={errors.yeniSifre ? "input-error" : ""}
              />
              {errors.yeniSifre && <p className="error">{errors.yeniSifre}</p>}
            </div>

            <div className="btnGuncelleContainer">
              <button className="btnGuncelle" type="submit">
                Güncelle
              </button>
            </div>
          </form>
        </div>
        {yeniSifre === true && (
          <div>
            <Alert
              sx={{ fontSize: 20, backgroundColor: "lightgreen", width:300, marginLeft:77, marginBottom:5, borderRadius:10  }}
              severity="success"
            >
              Başarıyla Güncelleme Yapıldı.
            </Alert>
          </div>
        )}
        {yeniSifre === false && (
          <div>
            <Alert
              sx={{ fontSize: 20, backgroundColor: "salmon", width:300, marginLeft:77, marginBottom:5, borderRadius:10 }}
              severity="error"
            >
              Mevcut Şifreniz Hatalı!
            </Alert>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default YeniSifre;
