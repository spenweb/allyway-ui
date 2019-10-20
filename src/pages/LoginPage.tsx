import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import Logo from "../components/Logo";

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #dd545c;
`;

const LoginPage: React.FC<RouteComponentProps> = props => {
  return (
    <IonPage>
      <IonContent>
        <Container>
          <FlexRow>
            <Logo width={400} {...props} />
          </FlexRow>
          <FlexRow>
            <h1 style={{ color: "white" }}>Please sign in</h1>
          </FlexRow>
          <FlexRow>
            <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput autofocus={true} required></IonInput>
            </IonItem>
          </FlexRow>
          <FlexRow>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput autofocus={true} required type="password"></IonInput>
            </IonItem>
          </FlexRow>
          <FlexRow>
            <IonButton
              color="light"
              onClick={() => props.history.push("/home")}
            >
              Login
            </IonButton>
          </FlexRow>
          <FlexRow>
            <IonButton color="danger">Register as missing person</IonButton>
          </FlexRow>
          <FlexRow>
            <IonButton color="danger">Register as family member</IonButton>
          </FlexRow>
        </Container>
      </IonContent>
    </IonPage>
  );
};
export default LoginPage;
