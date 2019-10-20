import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet
} from "@ionic/react";
import React from "react";
import { add } from "ionicons/icons";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #dd545c;
`;

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar >
        <Container>
          <IonTitle style={{color: "white"}}>Ally Way</IonTitle>
        </Container>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
