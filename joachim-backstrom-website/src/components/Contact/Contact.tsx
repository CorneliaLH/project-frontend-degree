import { useState } from "react";
import { IContact } from "../../models/IContact";
import "./sass/contact.css";
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
