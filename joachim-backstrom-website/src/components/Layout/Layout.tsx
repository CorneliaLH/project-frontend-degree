import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";

import { Header } from "../Header/Header";
import "./sass/layout.css";

//Layout Component
//Contains Header and Footer component and Outlet where different views are diplayed
//Header and footer are not shown in login and admin and this is reglated through the url.

export function Layout() {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    handleLinks();
  }, [location]);

  const handleLinks = () => {
    if (location.pathname === "/login" || location.pathname === "/admin") {
      setShowHeaderFooter(false);
    } else {
      setShowHeaderFooter(true);
    }
  };
  return (
    <>
      {showHeaderFooter && <Header></Header>}
      <main className='main'>
        <Outlet></Outlet>
      </main>
      {showHeaderFooter && <Footer></Footer>}
    </>
  );
}
