import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/GirişYap.css";
import { useFormik } from "formik";
import { advancedSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
}

export default function GirişYap() {

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        email: "",
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
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <p className="error">{errors.email}</p>}
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
                <label className="beni-unutma">
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
