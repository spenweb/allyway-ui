import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonInput,
  IonButton
} from "@ionic/react";
import React from "react";
import { add } from "ionicons/icons";
import { RouteComponentProps } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Home: React.FC<RouteComponentProps> = props => {
  return (
    <IonPage>
      <Header {...props} />
      <IonContent className="ion-padding">
        <FlexRow>
          <h1>Find your family member</h1>
        </FlexRow>
        <FlexRow>
          <p>Type information to search for member</p>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Given name</IonLabel>
            <IonInput autofocus={true}></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Family name</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Nationality</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect cancelText="Close" okText="Okay">
              <IonSelectOption value="Male">Male</IonSelectOption>
              <IonSelectOption value="Female">Female</IonSelectOption>
              <IonSelectOption value="Non-binary">Non-binary</IonSelectOption>
              <IonSelectOption value="Gender Queer">
                Gender queer
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Age</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Eye color</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Hair color</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid #e2e2e2",
            padding: "1em",
            margin: "1em"
          }}
        />
        <FlexRow>
          <strong>Last seen place and time</strong>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Street</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">City/town</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">State/province</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Country</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonLabel position="floating">Date</IonLabel>
            <IonDatetime displayFormat="MMMM DD YYYY" />
          </IonItem>
        </FlexRow>
        <FlexRow>
          <IonItem>
            <IonButton onClick={() => props.history.push("/search-results")}>Submit</IonButton>
          </IonItem>
        </FlexRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
