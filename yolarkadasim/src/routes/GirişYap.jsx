import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/GirişYap.css";
import { useFormik } from "formik";
import { advancedSchema } from "../schemas";
import { Link } from "react-router-dom";
import axios from "axios";

const onSubmit = async (values, actions) => {
  try {
    // Kullanıcı girişi için gerekli HTTP isteğini gönder
    const result = await axios.post("http://localhost:8080/api/kullanicilar/login", {
      eposta: values.eposta,
      sifre: values.sifre
    });

    // Giriş başarılı ise kullanıcıya yönlendirme yapabilirsiniz
    // Örneğin:
    if (result.data.success) {
      // Kullanıcı girişi başarılı, yönlendirme yap
      console.log("Giriş başarılı!");
      // Örnek olarak "/anasayfa" sayfasına yönlendirme yapabilirsiniz
      // Örnek: history.push("/anasayfa");
    } else {
      // Giriş başarısız ise kullanıcıya hata mesajı gösterebilirsiniz
      console.log("Giriş başarısız!");
      // Örneğin, bir hata mesajı göstermek için:
      // actions.setErrors({ giriş: "E-posta veya şifre yanlış!" });
    }
  } catch (error) {
    console.error("Giriş hatası:", error);
    // Hata durumunda kullanıcıya uygun bir mesaj gösterebilirsiniz
    // actions.setErrors({ giriş: "Giriş sırasında bir hata oluştu!" });
  }

  // Form işlemi tamamlandı, isSubmitting durumunu sıfırla
  actions.setSubmitting(false);
};


export default function GirişYap() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/kullanicilar");
        setUsers(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        eposta: "",
        sifre: "",
      },
      validationSchema:advancedSchema,
      onSubmit
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
                  <input type="checkbox" />Beni Unutma
                </label>
              </div>
              <button disabled={isSubmitting} className="girisYap-btn" type="submit">
                Giriş Yap
              </button>
              <div className="hesabinVarsaDiv">
              <Link style={{ color: 'white' }} to='/uyeOl'>Hesabın yok mu?</Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
