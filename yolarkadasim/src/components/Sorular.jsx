import React from "react";
import "../styles/Sorular.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdControlPoint } from "react-icons/md";

export default function Sorular() {
  return (
    <div>
      <div>
        <p className="tanım">Sık Sorulan Sorular</p>
      </div>
      <div className="sorular-panel">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel1-content"
            className="header"
          >
            Yol Arkadaşım Nedir?
          </AccordionSummary>
          <AccordionDetails className="detay">
            Yol Arkadaşım, sürücülerin boş koltuklarını diğer yolcularla
            paylaşarak seyahat etmelerini sağlayan bir araç paylaşım
            platformudur.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel2-content"
            className="header"
          >
            Yol Arkadaşım Nasıl Çalışır?
          </AccordionSummary>
          <AccordionDetails>
            Yol Arkadaşım, sürücülerin seyahat planlarını paylaşmasına ve
            yolcuların bu planlara katılmasına olanak tanır. Sürücüler boş
            koltuklarını belirtir ve yolcular bu koltuklara rezervasyon yapar.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel3-content"
            className="header"
          >
            Yol Arkadaşım'ı Nasıl Kullanabilirim?
          </AccordionSummary>
          <AccordionDetails>
            Yol Arkadaşım'ı kullanmak için öncelikle bir hesap oluşturmanız
            gerekir. Ardından, seyahat planlarınızı paylaşabilir veya
            başkalarının planlarına katılabilirsiniz.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel4-content"
            className="header"
          >
            Yol Arkadaşım'ı Kullanmak Ücretli Midir?
          </AccordionSummary>
          <AccordionDetails>
            Yol Arkadaşım'ı kullanmak ücretsizdir. Ancak, sürücüler
            yolcularından seyahat masraflarını paylaşmalarını talep edebilirler.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel5-content"
            className="header"
          >
            Yol Arkadaşım'da Nasıl Sürücü Olabilirim?
          </AccordionSummary>
          <AccordionDetails>
            Yol Arkadaşım'da sürücü olmak için öncelikle platforma kayıt olmanız
            gerekir. Ardından, seyahat planlarınızı ve boş koltuklarınızı
            belirterek yolcuların rezervasyon yapmasını bekleyebilirsiniz.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel6-content"
            className="header"
          >
            Yol Arkadaşım'ı Kullanmanın Avantajları Nelerdir?
          </AccordionSummary>
          <AccordionDetails>
            Yol Arkadaşım kullanmanın avantajları arasında seyahat maliyetlerini
            azaltma, çevre dostu bir alternatif sunma, yeni insanlarla tanışma
            ve esnek seyahat planları yapma bulunur.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel7-content"
            className="header"
          >
            Yolculuk yaparken nelere dikkat etmeliyim?
          </AccordionSummary>
          <AccordionDetails>
            Yol Arkadaşım'da yolculuk yaparken dikkat etmeniz gerekenler
            arasında sürücünün değerlendirmelerini kontrol etmek, yolculuk
            detaylarını önceden doğrulamak, iletişim bilgilerini paylaşmak ve
            güvenliği ön planda tutmak yer alır.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdControlPoint />}
            aria-controls="panel8-content"
            className="header"
          >
            Nasıl Yolculuk Paylaşımı İlanı Veririm?
          </AccordionSummary>
          <AccordionDetails>
            Yol Arkadaşım'da yolculuk paylaşımı ilanı vermek kolaydır. Yola
            çıkış yerini ve varış noktalarını belirt, yola çıkacağın tarih ve
            saati seç, kaç yolcu alabileceğini ve koltuk fiyatını
            belirle.Ardından "Yolculuğu yayınla" öğesine dokun ve hepsi bu
            kadar!
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
