import { Link } from "react-router-dom";
import "./sass/notfound.css";

//NotFound Component
export function NotFound() {
  return (
    <>
      <div className='container-notfound-page'>
        <section className='container-notfound-card'>
          <h2>404</h2>
          <p>Something went wrong! Page not found</p>
          <Link className='notfound-link' to='/'>
            Home
          </Link>
        </section>
      </div>
    </>
  );
}
