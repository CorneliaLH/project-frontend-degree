import "./sass/footer.css";
export function Footer() {
  return (
    <>
      <footer>
        <div className='container-footer'>
          <article>
            <div className='container-contact-photo'>
              <p className='contact-footer'>Contact information to agent</p>
              <div className='container-credit-footer'>
                <p className='credit-footer'>Credit photos:</p>
                <p className='credit-photo-opera'>
                  Photos by Marek Olbrzymek from <br></br>Peter Grimes / Národni
                  divadlo in Brno <br></br>
                </p>
                <p className='credit-photo-portraits'>
                  Portrait photos by Marie Wirenstedt
                </p>
              </div>
            </div>
          </article>
          <p className='copyright'>Copyright 2023</p>
        </div>
      </footer>
    </>
  );
}
