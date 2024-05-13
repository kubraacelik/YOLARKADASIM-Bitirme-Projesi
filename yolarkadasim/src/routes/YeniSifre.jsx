import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { advancedSchema } from "../schemas";
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
    console.log(values);
    console.log(actions);
    try {
      await validateCurrentPassword(values.sifre);
      setYeniSifre(true);
      actions.resetForm();
    } catch (error) {
      setYeniSifre(false);
    }
  };

  const validateCurrentPassword = async (password) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/kullanicilar/login",
        { password }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log("Bir hata oluştu:", error);
      throw error;
    }
  };

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        sifre: "",
        yeniSifre: "",
        tekrarliSifre: "",
      },
      validationSchema: advancedSchema,
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
            {errors.sifre && <p className="error">{errors.sifre}</p>}
          </div>
          <div className="yeniSifre-profilBilgi">
            <label className="yeniSifre-label">Yeni Şifrenizi Giriniz *</label>
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
              id="yeniSifreTekrar"
              className={errors.tekrarliSifre ? "input-error" : ""}
            />
            {errors.tekrarliSifre && (
              <p className="error">{errors.tekrarliSifre}</p>
            )}
          </div>
          <div className="btnGuncelleContainer">
            <button
              className="btnGuncelle"
              onSubmit={handleSubmit}
              type="button"
            >
              Güncelle
            </button>
          </div>
        </div>
        {yeniSifre === true && (
          <div>
            <Alert
              sx={{ fontSize: 20, backgroundColor: "lightgreen" }}
              severity="success"
            >
              Başarıyla Güncelleme Yapıldı.
            </Alert>
          </div>
        )}
        {yeniSifre === false && (
          <div>
            <Alert
              sx={{ fontSize: 20, backgroundColor: "salmon" }}
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