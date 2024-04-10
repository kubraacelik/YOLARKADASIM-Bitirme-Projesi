import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ÜyeOl.css";
import resim1 from "../assets/üyeOl-resim1.png";
import resim2 from "../assets/üyeOl-resim2.png";

export default function ÜyeOl() {
  const [agreed, setAgreed] = useState(false);
  const [showContract, setShowContract] = useState(false); // Kullanıcı sözleşmesi görünürlüğünü kontrol etmek için bir durum değişkeni

  const handleAgreementChange = () => {
    setAgreed(!agreed);
    if (!showContract) {
      setShowContract(true); // Onaylandığında sözleşme açılsın
    } else {
      setShowContract(false); // Onay kaldırıldığında sözleşme kapatılsın
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      // Onaylanmış, kayıt işlemi gerçekleştirilebilir
      console.log("Kullanıcı onayladı, kayıt işlemi gerçekleştiriliyor...");
    } else {
      // Onaylanmamış, kullanıcıya uyarı verilebilir
      console.log("Kullanıcı onaylamadı, kayıt işlemi gerçekleştirilemez.");
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
              <div class="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="Adınızı Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="Soyadınızı Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="text"
                  placeholder="E-Posta Adresinizi Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="Password"
                  placeholder="Şifrenizi Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <input
                  type="Password"
                  placeholder="Şifrenizi Tekrar Giriniz"
                  class="giriş"
                />
              </div>
              <div class="üyeOl-giriş">
                <label className="sözleşme">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={handleAgreementChange}
                    onClick={handleShowContract}
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
              <button className="kayıtOl-btn" type="submit">
                Kayıt Ol
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
