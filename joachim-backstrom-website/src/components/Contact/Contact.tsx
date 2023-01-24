import { useEffect, useState } from "react";
import { IContact } from "../../models/IContact";
import "./sass/contact.css";
import imagedark from "../../images/logo-dark2.svg";

export function Contact() {
  const [contactList, setContactList] = useState<IContact[]>([
    {
      id: 1,
      name: "Agent Agentsson",
      role: "Manager",
      phone: "+460000000",
      email: "manager@email.se",
    },
    {
      id: 2,
      name: "Agent Agentsson",
      role: "Manager",
      phone: "+460000000",
      email: "manager@email.se",
    },
  ]);

  //Change navigation color
  useEffect(() => {
    let navlinks = document.querySelectorAll<HTMLElement>(".nav-menu-link");
    let iconLight = document.querySelector<any>("#image-logo-light");
    let iconDark = document.querySelector<any>("#image-logo-dark");
    let iconLightMobile = document.querySelector<any>(
      "#image-logo-light-mobile"
    );
    let iconDarkMobile = document.querySelector<any>("#image-logo-dark-mobile");
    let hamburgerBackground = document.querySelector<any>(".burger-button");
    hamburgerBackground.style.backgroundColor = "#ffffff";

    // console.log(icon);
    if (iconLight != null && iconDark != null) {
      iconLight.style.display = "none";
      iconDark.style.display = "block";
    }
    if (iconLightMobile != null && iconDarkMobile != null) {
      iconLightMobile.style.display = "none";
      iconDarkMobile.style.display = "block";
    }

    if (window.innerWidth > 600 && window.innerWidth < 900) {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white";
      }
    } else if (window.innerWidth < 600) {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white";
      }
    } else {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "black";
      }
    }
  }, []);

  return (
    <>
      <div className='contact-container-page'>
        <div className='menu-banner'></div>
        <div className='contact-hero-image'></div>
        <div className='contact-hero-image-filter'></div>
        <section className='container-contact'>
          <h2 className='heading2'>Contact</h2>
          <h3 className='heading3'>Braathen Artist Management</h3>

          {contactList.map((item) => {
            return (
              <article key={item.id} className='contact-card'>
                <section className='contact-card-text'>
                  <h4 className='heading4'>{item.name}</h4>
                  <p>
                    <span className='bold-text'>Role: </span>
                    {item.role}
                  </p>
                  <p>
                    <span className='bold-text'>Telephone: </span>
                    {item.phone}
                  </p>
                  <p>
                    <span className='bold-text'>E-mail: </span>
                    {item.email}
                  </p>
                </section>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}
