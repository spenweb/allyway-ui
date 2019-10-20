import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonImg
} from '@ionic/react';
import React from 'react';
import Header from "../components/Header"

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <Header></Header>
      <IonContent>
      <IonImg src={"/assets/logo.png"} />
      </IonContent>
    </IonPage>
  );
};
export default NewItem;