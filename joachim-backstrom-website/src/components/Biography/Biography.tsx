import { useEffect } from "react";
import "./sass/biography.css";
import imagedark from "../../images/logo-dark2.svg";

export function Biography() {
  //Changes color navigation
  useEffect(() => {
    let navlinks = document.querySelectorAll<HTMLElement>(".nav-menu-link");
    let iconLight = document.querySelector<HTMLElement>("#image-logo-light");
    let iconDark = document.querySelector<HTMLElement>("#image-logo-dark");
    let iconLightMobile = document.querySelector<HTMLElement>(
      "#image-logo-light-mobile"
    );
    let iconDarkMobile = document.querySelector<HTMLElement>(
      "#image-logo-dark-mobile"
    );
    let hamburgerBackground =
      document.querySelector<HTMLElement>(".burger-button");
    if (hamburgerBackground != null) {
      hamburgerBackground.style.backgroundColor = "#ffffff";
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

    if (iconLight != null && iconDark != null) {
      iconLight.style.display = "none";
      iconDark.style.display = "block";
    }

    if (iconLightMobile != null && iconDarkMobile != null) {
      iconLightMobile.style.display = "none";
      iconDarkMobile.style.display = "block";
    }
  }, []);
  return (
    <>
      <div className='bio-container-page'>
        <div className='menu-banner'></div>
        <div className='bio-hero-image'></div>
        <div className='bio-hero-image-filter'></div>
        <section className='container-bio'>
          <h2 className='heading2'>Biography</h2>
          <p className='bio-subheading'>
            Fromage frais queso feta. Bocconcini brie lancashire cream cheese
            st. agur blue cheese cheesecake port-salut swiss. Gouda goat when
            the cheese comes out everybody's happy lancashire goat st. agur blue
            cheese fondue lancashire. St. agur blue cheese cottage cheese the
            big cheese monterey jack say cheese red leicester fromage frais
            boursin. Blue castello.
          </p>
          <p>
            Hard cheese who moved my cheese cheese strings. Taleggio edam red
            leicester fromage frais danish fontina lancashire fondue boursin.
            Goat croque monsieur cow fromage frais lancashire bocconcini squirty
            cheese bocconcini. Macaroni cheese cheesecake cheese triangles
            caerphilly. Airedale mascarpone mozzarella. Cheese and biscuits
            cheesecake fromage frais monterey jack manchego cheddar smelly
            cheese halloumi. Cut the cheese smelly cheese melted cheese chalk
            and cheese when the cheese comes out everybody's happy fondue cheesy
            feet macaroni cheese. Mascarpone hard cheese halloumi cheese on
            toast the big cheese caerphilly chalk and cheese bocconcini.
            Fromage. Cottage cheese cheese and biscuits edam. Blue castello
            mozzarella cheeseburger everyone loves fondue camembert de normandie
            mozzarella gouda. Cheeseburger fromage frais say cheese cheese
            slices mascarpone cheesy feet croque monsieur paneer. Cream cheese
            when the cheese comes out everybody's happy danish fontina parmesan
            paneer feta bavarian bergkase manchego. Parmesan. Camembert de
            normandie cheesecake bavarian bergkase. Say cheese hard cheese chalk
            and cheese pecorino hard cheese pecorino edam st. agur blue cheese.
            Camembert de normandie cow hard cheese cheddar cheddar rubber cheese
            babybel cheese on toast. Cheese slices cut the cheese who moved my
            cheese parmesan cheesecake.
          </p>
        </section>
      </div>
    </>
  );
}
