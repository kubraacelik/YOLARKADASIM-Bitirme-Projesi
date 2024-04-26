import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ÜyeOl.css";
import resim1 from "../assets/bg.png";
import resim2 from "../assets/bg2.png";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";
import axios from 'axios'

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  try {
    await addUserToMongoDB(values); // Kullanıcı bilgilerini MongoDB'ye gönder
    actions.resetForm(); // Formu sıfırla
    alert('Kullanıcı başarıyla kaydedildi.');
  } catch (error) {
    alert('Kullanıcı eklenirken bir hata oluştu.');
  }
};

const addUserToMongoDB = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/kullanicilar', userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Bir hata oluştu:', error);
    throw error;
  }
};

export default function ÜyeOl() {
  const [agreed, setAgreed] = useState(false);
  const [showContract, setShowContract] = useState(false); // Kullanıcı sözleşmesi görünürlüğünü kontrol etmek için bir durum değişkeni

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        ad: "",
        soyad: "",
        eposta: "",
        sifre: "",
        // tekrarliSifre: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  const handleAgreementChange = () => {
    setAgreed(!agreed);
    if (!showContract) {
      setShowContract(true); // Onaylandığında sözleşme açılsın
    } else {
      setShowContract(false); // Onay kaldırıldığında sözleşme kapatılsın
    }
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
          <div
            className="uyeOl-sol"
            style={{ backgroundImage: `url(${resim2})` }}
          ></div>
          <div className="uyeOl-sag">
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
              {/* <div className="üyeOl-giriş">
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
              </div> */}
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
                    {/* Sözleşme içeriği buraya gelecek */}
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
                disabled={isSubmitting}
              >
                Kayıt Ol
              </button>
              <div className="hesabinVarsaDiv">
              <Link to='/girisYap'>Hesabın var mı?</Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
