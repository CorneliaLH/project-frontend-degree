import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./sass/footer.css";

//Footer Component
//The Footer has different content based on the url.
export function Footer() {
  const [showCredOpera, setShowCredOpera] = useState(false);
  const location = useLocation();

  useEffect(() => {
    handleLinks();
  }, [location]);

  const handleLinks = () => {
    if (location.pathname === "/") {
      setShowCredOpera(true);
    } else {
      setShowCredOpera(false);
    }
  };
  return (
    <>
      <footer>
        <div className='container-footer'>
          <div>
            <div className='container-contact-photo'>
              <p className='contact-footer'>Contact information to agent</p>
              <div className='container-credit-footer'>
                <p className='credit-footer'>Credit photos:</p>
                {showCredOpera && (
                  <p className='credit-photo-opera'>
                    Photos by Marek Olbrzymek from <br></br>Peter Grimes /
                    Národni divadlo in Brno <br></br>
                  </p>
                )}
                <p className='credit-photo-portraits'>
                  Portrait photos by Marie Wirenstedt
                </p>
              </div>
            </div>
          </div>
          <p className='copyright'>Copyright 2023</p>
        </div>
      </footer>
    </>
  );
}
