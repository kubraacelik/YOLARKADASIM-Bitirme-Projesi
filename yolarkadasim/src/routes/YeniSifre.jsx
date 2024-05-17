import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { updatedSchema } from "../schemas";
import "../styles/YeniSifre.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const YeniSifre = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (responseMessage !== null) {
      const redirectTimer = setTimeout(() => {
        navigate("/profilAyarlari");
      }, 3000);

      return () => clearTimeout(redirectTimer);
    }
  }, [responseMessage, navigate]);

  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const kullaniciId = decodedToken.kullaniciId;

  const updateUserPassword = async (values) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/kullanicilar/${kullaniciId}`,
        { newPassword: values.guncellenmisSifre }
      );
      if (response.status === 200) {
        setResponseMessage(true); // Başarılı
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      setResponseMessage(false); // Başarısız
    }
  };

  const formik = useFormik({
    initialValues: {
      guncellenmisSifre: "",
      guncellenmisTekrarliSifre: ""
    },
    validationSchema: updatedSchema,
    onSubmit: async (values, { resetForm }) => {
      await updateUserPassword(values);
      resetForm();
    }
  });

  return (
    <>
      <Navbar />
      <form onSubmit={formik.handleSubmit} className="yeniSifreForm">
        <div className="yeniSifre-container">
          <div>
            <label htmlFor="sifre" className="yeniSifre-name">
              Yeni Şifrenizi Giriniz:
            </label>
            <input
              name="guncellenmisSifre"
              type="password"
              id="sifre"
              value={formik.values.guncellenmisSifre}
              onChange={formik.handleChange}
            />
            <div className="yeniSifre-error">{formik.errors.guncellenmisSifre && (
              <div>{formik.errors.guncellenmisSifre}</div>
            )}</div>
          </div>
          <div>
            <label htmlFor="sifre" className="yeniSifre-name">
              Yeni Şifrenizi Tekrar Giriniz:
            </label>
            <input
              name="guncellenmisTekrarliSifre"
              type="password"
              id="sifre"
              value={formik.values.guncellenmisTekrarliSifre}
              onChange={formik.handleChange}
            />
            <div className="yeniSifre-error">{formik.errors.guncellenmisTekrarliSifre && (
              <div>{formik.errors.guncellenmisTekrarliSifre}</div>
            )}</div>
          </div>
          <button
            className="yeniSifre-btn"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Güncelleniyor..." : "Şifreyi Güncelle"}
          </button>
          {responseMessage === true && (
            <div>
              <Alert
                sx={{ fontSize: 20, backgroundColor: "lightgreen", borderRadius:20, marginTop:3 }}
                severity="success"
              >
                Şifre başarıyla güncellendi.
              </Alert>
            </div>
          )}
          {responseMessage === false && (
            <div>
              <Alert
                sx={{ fontSize: 20, backgroundColor: "salmon", borderRadius:20, marginTop:3 }}
                severity="error"
              >
                Şifre güncelleme işlemi başarısız oldu.
              </Alert>
            </div>
          )}
        </div>
      </form>
      <Footer />
    </>
  );
};

export default YeniSifre;
