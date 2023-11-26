import React, { Children } from "react";

const Header = () => {
  return (
    <section>
        Header
    </section>
  )
}

const Body = () => {
    return (
      <section>
        Body
      </section>
    )
  }

  const Footer = () => {
    return (
      <section>
        Footer
      </section>
    )
  }

const AppCard = ({children}) => {
    
    
  return (
    <article>
        {children}
    </article>
  );
};

//Creando propiedades dentro de mi componente y le asigno subcomponentes
AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;

//Otra manera de hacerlo
// Object.assign(AppCard, {Header, Body, Footer})

export default AppCard;
