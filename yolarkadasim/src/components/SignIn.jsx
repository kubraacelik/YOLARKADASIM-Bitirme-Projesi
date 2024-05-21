import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {jwtDecode} from "jwt-decode";
import "../styles/SignIn.css"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      try {
        const data = jwtDecode(userToken);
        setEmail(data.eposta);
        setPassword(data.eposta);
      } catch (err) {
        console.error("Token decoding failed:", err);
      }
    }
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      console.error("Error signing in:", err);
    }
  };

  return (
    <div className="signIn-container">
      <h2>Mesajlaşmak İçin Giriş Yapınız</h2>
      <form className="signIn-container-form" onSubmit={handleSignIn}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="signIn-container-button" type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
