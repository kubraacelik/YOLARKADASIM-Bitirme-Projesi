import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/GirişYap.css";
import { useFormik } from "formik";
import { advancedSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";

const GirişYap = () => {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    if (loginSuccess !== null) {
      const timer = setTimeout(() => {
        setLoginSuccess(null);
        // Başarılı giriş yapma durumunda 5 saniye sonra ana sayfaya yönlendirme
        if (loginSuccess === true) {
          navigation("/");
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loginSuccess, navigation]);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    try {
      await loginUserFromMongoDB(values); // Kullanıcı bilgileriyle MongoDB'den giriş yap
      actions.resetForm(); // Formu sıfırla
      setLoginSuccess(true);
    } catch (error) {
      setLoginSuccess(false);
    }
  };

  const loginUserFromMongoDB = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/kullanicilar/login",
        userData
      );
      console.log(response.data.token);
      localStorage.setItem('token',response?.data)
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Bir hata oluştu:", error);
      throw error;
    }
  };

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        eposta: "",
        sifre: "",
      },
      validationSchema: advancedSchema,
      onSubmit,
    });

  return (
    <>
      <Navbar />
      <div>
        <div className="girisYap-container">
          <div className="girisYap">
            <div className="tanım">Giriş Yapın</div>
            <form onSubmit={handleSubmit}>
              <div className="girisYap-giris">
                <input
                  type="email"
                  placeholder="E-Mail Adresinizi Giriniz"
                  value={values.eposta}
                  onChange={handleChange}
                  id="eposta"
                  className={errors.eposta ? "input-error" : ""}
                />
                {errors.eposta && <p className="error">{errors.eposta}</p>}
              </div>

              <div className="girisYap-giris">
                <input
                  type="password"
                  placeholder="Şifrenizi Giriniz"
                  value={values.sifre}
                  onChange={handleChange}
                  id="sifre"
                  className={errors.sifre ? "input-error" : ""}
                />
                {errors.sifre && <p className="error">{errors.sifre}</p>}
              </div>

              <div className="girisYap-giris">
                <label className="beni-unutma" htmlFor="beniUnutma">
                  <input type="checkbox" />
                  Beni Unutma
                </label>
              </div>
              <button
                disabled={isSubmitting}
                className="girisYap-btn"
                type="submit"
              >
                Giriş Yap
              </button>
              <div className="hesabinVarsaDiv">
                <Link style={{ color: "white" }} to="/uyeOl">
                  Hesabın yok mu?
                </Link>
              </div>
              {loginSuccess === true && (
                <div>
                  <Alert
                    sx={{ fontSize: 20, backgroundColor: "lightgreen" }}
                    severity="success"
                  >
                    Başarıyla Giriş Yapıldı.
                  </Alert>
                </div>
              )}
              {loginSuccess === false && (
                <div>
                  <Alert
                    sx={{ fontSize: 20, backgroundColor: "salmon" }}
                    severity="error"
                  >
                    E-Posta Hesabınız veya Şifreniz Hatalı!
                  </Alert>
                </div>
              )}
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GirişYap;
