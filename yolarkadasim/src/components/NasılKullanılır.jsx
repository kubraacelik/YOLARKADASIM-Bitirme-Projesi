import React from "react";
import "../styles/NasılKullanılır.css";
import resim1 from "../assets/nasıl-kullanılır-resim.png";
import resim2 from "../assets/nasıl-kullanılır-resim2.png";
import resim3 from "../assets/nasıl-kullanılır-resim3.png";

export default function NasılKullanılır() {
  return (
    <div>
      <div>
        <p className="tanıtım">Nasıl Kullanılır?</p>
      </div>
      <div className="nasıl-kullanılır-container">
        <div className="nasıl-kullanılır">
          <div className="nasıl-kullanılır-eleman">
            <p className="başlık">Bilgilerinizi Doldurun</p>
            <p>
              Seyahat planınızı oluştururken bize birkaç bilgi verin, size en
              uygun seçenekleri sunalım! Kalkış ve varış noktalarınızı, tarih ve
              kişi sayısını belirtmek için aşağıdaki alanları doldurun.
              Yolculuklarınızı paylaşarak seyahat maliyetlerinizi azaltmanın
              keyfini çıkarın!
            </p>
          </div>
          <div className="nasıl-kullanılır-eleman">
            <p className="başlık">Sürücülerle Konuşun</p>
            <p>
              Seyahat öncesinde sürücülerle iletişime geçin ve detayları
              konuşun! İhtiyaçlarınızı karşılayacak en iyi seçenekleri bulmak
              için iletişim kurun ve güvenli ve keyifli bir yolculuk için
              gerekenleri paylaşın.
            </p>
          </div>
        </div>

        <div>
          <img className="nasıl-kullanılır-resim" src={resim1} alt="" />
        </div>
        <div className="nasıl-kullanılır">
          <div className="nasıl-kullanılır-eleman">
            <p className="başlık">Rotayı Seçin</p>
            <p>
              Yolculuğunuz için en uygun rotayı seçin ve detayları planlayın!
              Seyahatiniz boyunca keyifli ve güvenli bir deneyim yaşamak için
              rotanızı önceden belirleyin, ilginizi çekebilecek yerleri keşfedin
              ve yolculuğunuzun her anını özel kılacak anılar biriktirin.
            </p>
          </div>
          <div className="nasıl-kullanılır-eleman">
            <p className="başlık">Yolculuğunuzu Yapın</p>
            <p>
              Yolculuğunuzu gerçekleştirin ve keyfini çıkarın! Belirlediğiniz
              rotada ilerleyerek, yeni insanlarla tanışın, güzel manzaraların
              tadını çıkarın ve unutulmaz anılar biriktirin. Yolculuğunuzun
              keyfini doyasıya yaşayın!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
