import { useState } from "react";
import { useCardContext } from "../provider/card_context";

const Header = ({ children, ...props }) => {

    const {isHovered} = useCardContext();

  return (
    <section
      {...props}
      style={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        backdropFilter: "blur(4px)",
        opacity: isHovered ? "1" : "0",
        transition: "all 0.2s ease-in-out",
        transform: isHovered ? "translateY(0)" : "translateY(-10px)",
        ...props.style,
      }}
    >
      {children}
    </section>
  );
};

export default Header;
