import { IonImg } from "@ionic/react";
import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

const LogoBox = styled.div`
`;


const Logo: React.FC<any> = props => {
  return (
    <LogoBox style={{width: props.width}} onClick={() => props.history.push("/home")}>
      <IonImg src={"/assets/logo.png"} />
    </LogoBox>
  );
};


export default Logo;