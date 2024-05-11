import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ÜyeOl.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";

const ÜyeOl = () => {
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [showContract, setShowContract] = useState(false); // Kullanıcı sözleşmesi görünürlüğünü kontrol etmek için bir durum değişkeni
  const navigation = useNavigate();

  useEffect(() => {
    if (registerSuccess !== null) {
      const successTimer = setTimeout(() => {
        setRegisterSuccess(null);
        // Başarılı kayıt olma durumunda 5 saniye sonra giriş sayfasına yönlendirme
        if (registerSuccess === true) {
          navigation('/girisYap');
        }
      }, 3000);
  
      return () => clearTimeout(successTimer);
    }
  }, [registerSuccess, navigation]);
  

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    try {
      if (agreed) {
        await addUserToMongoDB(values); // Kullanıcı bilgilerini MongoDB'ye gönder
        actions.resetForm(); // Formu sıfırla
        setRegisterSuccess(true);
      } else {
        setRegisterSuccess(false);
      }
    } catch (error) {
      setRegisterSuccess(false);
    }
  };

  const addUserToMongoDB = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/kullanicilar/register",
        userData
      );
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
        ad: "",
        soyad: "",
        eposta: "",
        sifre: "",
        tekrarliSifre: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  const handleAgreementChange = () => {
    if (!agreed) {
      setShowContract(true); // Onaylandığında sözleşme açılsın
    } else {
      setShowContract(false); // Onay kaldırıldığında sözleşme kapatılsın
    }
    setAgreed(!agreed);
  };

  const handleShowContract = () => {
    setShowContract(true); // Sözleşme açılsın
  };

  const handleCloseContract = () => {
    setShowContract(false); // Sözleşme kapatılsın
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="uyeOl-container">
          <div className="uyeOl">
            <div className="tanım">Üye Olun</div>
            <form onSubmit={handleSubmit}>
              <div className="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="Adınızı Giriniz"
                  value={values.ad}
                  onChange={handleChange}
                  id="ad"
                  className={errors.ad ? "input-error" : ""}
                />
                {errors.ad && <p className="error">{errors.ad}</p>}
              </div>
              <div className="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="Soyadınızı Giriniz"
                  value={values.soyad}
                  onChange={handleChange}
                  id="soyad"
                  className={errors.soyad ? "input-error" : ""}
                />
                {errors.soyad && <p className="error">{errors.soyad}</p>}
              </div>
              <div className="üyeOl-giriş">
                <input
                  type="email"
                  placeholder="E-Posta Adresinizi Giriniz"
                  value={values.eposta}
                  onChange={handleChange}
                  id="eposta"
                  className={errors.eposta ? "input-error" : ""}
                />
                {errors.eposta && <p className="error">{errors.eposta}</p>}
              </div>
              <div className="üyeOl-giriş">
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
              <div className="üyeOl-giriş">
                <input
                  type="password"
                  placeholder="Şifrenizi Tekrar Giriniz"
                  value={values.tekrarliSifre}
                  onChange={handleChange}
                  id="tekrarliSifre"
                  className={errors.tekrarliSifre ? "input-error" : ""}
                />
                {errors.tekrarliSifre && (
                  <p className="error">{errors.tekrarliSifre}</p>
                )}
              </div>
              <div className="üyeOl-giriş">
                <label className="sözleşme">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={handleAgreementChange}
                    onClick={handleShowContract}
                    className="checkbox"
                  />
                  Kullanıcı sözleşmesini okudum ve kabul ediyorum.
                </label>
              </div>

              {showContract && (
                <div className="sözleşme-modal">
                  <div className="sözleşme-içeriği">
                    <h2>Kullanıcı Sözleşmesi</h2>
                    <p>
                      <p>
                        Bu Kullanıcı Sözleşmesi, sizin ve Şirket arasında,
                        Şirket'in web sitesi üzerinden sunulan hizmetleri
                        kullanmanıza ilişkin koşulları ve şartları
                        belirlemektedir.
                      </p>
                      <p>
                        <b>1-Hizmetlerin Kapsamı:</b> Şirket,kullanıcıya Site
                        üzerinden sunulan hizmetleri sağlar. Bu hizmetler,
                        kullanıcının talebine bağlı olarak değişebilir.
                      </p>
                      <p>
                        <b>2-Kullanıcı Hesabı:</b> Kullanıcı, Site üzerinden
                        hizmet alabilmek için bir hesap oluşturmalıdır. Hesap
                        oluşturulurken sağlanan bilgilerin doğru ve güncel
                        olması kullanıcının sorumluluğundadır.{" "}
                      </p>
                      <p>
                        <b>3-Gizlilik:</b> Şirket, kullanıcının kişisel
                        bilgilerini gizli tutmayı taahhüt eder. Kullanıcı
                        bilgilerinin güvenliği için gerekli önlemleri alır ve
                        gizlilik politikasına uygun hareket eder.{" "}
                      </p>
                      <p>
                        <b>4-Kullanım Koşulları:</b> Kullanıcı, Site üzerinden
                        sağlanan hizmetleri yasalara ve bu sözleşmede belirtilen
                        koşullara uygun olarak kullanmalıdır. Kullanıcı,
                        başkalarının haklarını ihlal eden içerikler
                        yayınlamamalı veya Site'nin güvenliğini tehlikeye atacak
                        herhangi bir eylemde bulunmamalıdır.{" "}
                      </p>
                      <p>
                        <b>5-İptal ve Değişiklikler:</b> Şirket, Site üzerinden
                        sunulan hizmetlerde değişiklik yapma veya hizmeti iptal
                        etme hakkını saklı tutar. Bu tür değişiklikler hakkında
                        kullanıcılar önceden bilgilendirilir.
                      </p>
                      <p>
                        <b>6-Sorumluluk Sınırlaması:</b> Şirket, Site üzerinden
                        sağlanan hizmetlerin kullanımından kaynaklanan herhangi
                        bir zarardan sorumlu değildir. Kullanıcı, Site'yi kendi
                        riski altında kullanır.{" "}
                      </p>
                      <p>
                        {" "}
                        Bu sözleşmenin kabul edilmesi, kullanıcının Site
                        üzerinden sağlanan hizmetleri kullanması için
                        gereklidir. Bu nedenle, bu sözleşmeyi dikkatlice
                        okumanızı ve anlamanızı öneririz.
                      </p>
                    </p>
                    <div className="okudum-btn-container">
                      <button
                        className="okudum-btn"
                        onClick={handleCloseContract}
                      >
                        Okudum
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <button
                className="kayıtOl-btn"
                type="submit"
                disabled={isSubmitting || !agreed}
              >
                Kayıt Ol
              </button>
              {!agreed && !showContract && (
                  <div>
                  <Alert
                    sx={{ fontSize: 15, backgroundColor: "#F1C40F", marginTop: 2 }}
                    severity="warning"
                  >
                    Kullanıcı Sözleşmesini Okuyup Kabul Etmek Zorundasınız.
                  </Alert>
                </div>
              )}
              <div className="hesabinVarsaDiv">
                <Link style={{ color: "white" }} to="/girisYap">
                  Hesabın var mı?
                </Link>
              </div>
              {registerSuccess === true && (
                <div>
                  <Alert
                    sx={{ fontSize: 20, backgroundColor: "lightgreen" }}
                    severity="success"
                  >
                    Başarıyla Kayıt Olundu.
                  </Alert>
                </div>
              )}
              {registerSuccess === false && (
                <div>
                  <Alert
                    sx={{ fontSize: 20, backgroundColor: "salmon" }}
                    severity="error"
                  >
                    Daha Önce Bu Mail Hesabı İle Kayıt Olundu!
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

export default ÜyeOl;
