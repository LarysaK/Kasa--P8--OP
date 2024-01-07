import React from "react";
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    // BrowserRouter est une implémentation de routeur qui utilise l'API d'historique HTML5 pour synchroniserl'interface utilisateur avec l'URL.
    <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
  );
}
