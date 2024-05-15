import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

//KAYIT OL 
export const basicSchema = yup.object().shape({
  ad: yup.string().required("Adınızı girmek zorunludur"),
  soyad: yup.string().required("Soyadınızı girmek zorunludur"),
  eposta: yup
    .string()
    .email("Geçerli bir e-mail giriniz")
    .required("E-mail adresi girmek zorunludur"),
    sifre: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
    tekrarliSifre: yup
    .string()
    .oneOf([yup.ref("sifre")], "Şifreler eşleşmiyor")
    .required("Şifreyi tekrar girmek zorunludur"),
});

//GİRİŞ YAP
export const advancedSchema = yup.object().shape({
    eposta: yup
    .string()
    .email("Geçerli bir e-mail giriniz")
    .required("E-mail adresi girmek zorunludur"),
    sifre: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  });

  // ŞİFRE GÜNCELLEME
  export const updatedSchema = yup.object().shape({
  guncellenmisSifre: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  });