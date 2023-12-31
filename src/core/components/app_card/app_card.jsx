import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import useHover from "../../hooks/useHover";
import { Provider } from "./provider/card_context";

const AppCard = ({
  children,
  width = "300px",
  height = "150px",
  backgroundImageSrc = undefined,
  aspectRatio = undefined,
  borderColor = "#ccc",
  borderRadius = "10px",
  ...props
}) => {

  const [isHovered, handlers] = useHover();

  return (
    <Provider value={{ isHovered }}>
      <article
        {...handlers}
        {...props}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height,
          width,
          aspectRatio,
          borderColor,
          borderRadius,
          borderStyle: "solid",
          ...props.style,
        }}
      >
        {backgroundImageSrc && (
          <img
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: "0",
              left: "0",
              zIndex: "-1",
            }}
            src={backgroundImageSrc}
            alt="imagen de una peli"
          />
        )}

        {children}
      </article>
    </Provider>
  );
};

//Creando propiedades dentro de mi componente y le asigno subcomponentes
AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;

//Otra manera de hacerlo
// Object.assign(AppCard, {Header, Body, Footer})

export default AppCard;
