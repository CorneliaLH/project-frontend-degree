import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";

import { Header } from "../Header/Header";
import "./sass/layout.css";

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
