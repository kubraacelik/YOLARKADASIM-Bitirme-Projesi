import React from "react";
import "../styles/Mesaj.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";
import Chat from "../components/Chat";
import { AuthProvider, useAuth } from "../context/AuthContext";

const AppContent = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Chat />
  ) : (
    <div>
      <SignIn />
    </div>
  );
};

export default function Mesaj() {
  return (
    <div>
      <Navbar />
      <AuthProvider>
        <AppContent />
      </AuthProvider>
      <Footer />
    </div>
  );
}
