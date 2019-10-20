import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonCardContent,
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
import { makeMissingPeopleSearchResults } from "../util/demo";
import moment from "moment"

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`;

const RoundImage = styled.div`
  border-radius: 100px;
  width: 50px;
  margin-right: 3em;
`;

const Home: React.FC<RouteComponentProps> = props => {
  console.log("the match", props.match.params);
  //@ts-ignore
  const result = makeMissingPeopleSearchResults[props.match.params.id];
  return (
    <IonPage>
      <Header {...props} />
      <IonContent className="ion-padding">
        <FlexRow>
        <IonCard
                style={{ minimumWidth: "500px", width: "50%" }}
              >
                <IonCardHeader>
                  <IonCardSubtitle>Missing person</IonCardSubtitle>
                  <IonCardTitle>{result.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <FlexRow>
                    <RoundImage>
                      <IonImg src={result.image} />
                    </RoundImage>
                    <div>
                      <p>Last seen family:</p>
                      <div>
                        {result.place} at{" "}
                        {moment(result.time).format("MMMM Do YYYY")}
                      </div>
                    </div>
                  </FlexRow>
                  <FlexRow>
                    <IonButton color="danger" onClick={() => props.history.push("/missing-person/" + result.id)}>Contact</IonButton>
                  </FlexRow>
                </IonCardContent>
              </IonCard>
          </FlexRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
