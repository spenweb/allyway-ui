import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from "@ionic/react";
import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import Logo from "../components/Logo";

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  padding: 0.5em;
`;

const NewItem: React.FC<RouteComponentProps> = props => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>|React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
    event.preventDefault();
    props.history.push("/home");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Register as missing person</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit}>
          <FlexRow>
            <Logo size="small" width={250} />
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
              <IonInput autofocus={true} required></IonInput>
            </IonItem>
          </FlexRow>
          <FlexRow>
            <IonButton
              color="light"
              onClick={handleSubmit}
            >
              Register
            </IonButton>
          </FlexRow>
        </form>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
