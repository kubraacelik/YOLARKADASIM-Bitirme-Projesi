import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { updatedSchema } from "../schemas";

const YeniSifre = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const kullaniciId = decodedToken.kullaniciId;

  const updateUserPassword = async (values) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/kullanicilar/${kullaniciId}`,
        { yeniSifre: values.guncellenmisSifre }
      );
      setResponseMessage(response.data);
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      setResponseMessage("Şifre güncelleme işlemi başarısız oldu.");
    }
  };

  const formik = useFormik({
    initialValues: {
      guncellenmisSifre: ""
    },
    validationSchema: updatedSchema,
    onSubmit: async (values, { resetForm }) => {
      await updateUserPassword(values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="kullaniciId">Kullanıcı ID:</label>
        <input
          type="text"
          id="kullaniciId"
          value={kullaniciId}
          disabled
        />
      </div>
      <div>
        <label htmlFor="sifre">Yeni Şifre:</label>
        <input
          name="guncellenmisSifre"
          type="password"
          id="sifre"
          value={formik.values.guncellenmisSifre}
          onChange={formik.handleChange}
        />
        {formik.errors.guncellenmisSifre && <div>{formik.errors.guncellenmisSifre}</div>}
      </div>
      <button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Güncelleniyor..." : "Şifreyi Güncelle"}
      </button>
      <div>{responseMessage}</div>
    </form>
  );
};

export default YeniSifre;