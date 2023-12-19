// components/Footer.js
import React, { useEffect, useState } from "react";
/* import InfoComponents from "../information/informationpart/InfoComponents"; */
import "../../styles/login.styles.css";
import { Compon1, Compon2, Compon3, Compon4, Compon5, Compon6, Compon7, Compon8, Language } from "../information/barril/index";

import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footer.styles";

const Footer = () => {
  return (
    <Box>
      <FooterContainer className="thisfooter">

        <Row>

          {/* Primera Columna */}
          <Column>
            <Heading>
              {/* Aca va el primer component, "Preguntas Frecuentes" */}
              <Compon1></Compon1>
            </Heading>
            {/* Aca va el segundo component, "" */}
            <FooterLink href="#">
              <Compon2></Compon2>
            </FooterLink>
            {/* Sexto Component */}
            <FooterLink href="#">
              <Compon6></Compon6>
            </FooterLink>
            {/* Button para Language */}
            <FooterLink href="#">
              <Language></Language>
            </FooterLink>
          </Column>

          {/* Segunda Columna */}

          <Column>
            {/* Quinto Component */}
            <FooterLink href="#">

            </FooterLink>
            {/* Sexto Component */}
            <FooterLink href="#">
              <Compon3></Compon3>
            </FooterLink>
            <FooterLink>
              <Compon7></Compon7>
            </FooterLink>
          </Column>

          {/* Tercera Columna */}

          <Column>
            {/* Septimo Component */}
            <FooterLink href="#">
              <Compon4></Compon4>
            </FooterLink>
            {/* Octavo Component */}
            <FooterLink href="#">
              <Compon8></Compon8>
            </FooterLink>
          </Column>

          {/* Cuarta Columna */}

          <Column>
            <FooterLink href="#">
              <Compon5></Compon5>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;