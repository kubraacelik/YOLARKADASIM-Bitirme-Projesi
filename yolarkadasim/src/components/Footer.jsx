import React from "react";
import "../styles/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="sosyal-medya">
          <div className="çizgi"></div>
          <div className="sosyal-medya-eleman">
            <div className="ikon">
              <FaFacebook className="ikon" />
            </div>
            <div className="ikon">
              <FaInstagram className="ikon" />
            </div>
            <div className="ikon">
              <FaYoutube className="ikon" />
            </div>
            <div className="ikon">
              <FaXTwitter className="ikon" />
            </div>
            <div className="ikon">
              <FaLinkedin className="ikon" />
            </div>
            <div className="ikon">
              <MdAlternateEmail className="ikon" />
            </div>
          </div>
          <div className="çizgi"></div>
        </div>
        <div className="bilgilendirme">
          <div className="bilgilendirme-başlık">Yol Arkadaşım</div>
          <div className="bilgilendirme-açıklama">
            Copyright <FaRegCopyright className="copy" /> 2024 Yol Arkadaşım,
            Inc.
          </div>
        </div>
        <div className="çerezler">
          <div className="çerez">
            <u>Gizlilik Politikası</u>
          </div>
          <hr />
          <div className="çerez">
            <u>Güvenlik</u>
          </div>
          <hr />
          <div className="çerez">
            <u>Web Sitesi Erişilebilirliği</u>
          </div>
          <hr />
          <div className="çerez">
            <u>Çerezleri Yönet</u>
          </div>
        </div>
      </div>
    </div>
  );
}
