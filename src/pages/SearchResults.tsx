import {
  IonContent,
  IonList,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonBackButton,
  IonButtons,
  IonLabel,
  IonSelectOption,
  IonDatetime,
  IonInput,
  IonButton,
  IonImg
} from "@ionic/react";
import React from "react";
import { add } from "ionicons/icons";
import { RouteComponentProps } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { makeMissingPeopleSearchResults } from "../util/demo";
import moment from "moment";
import _ from "lodash";
import { connect } from "react-redux";

interface Result {id: string, name: string, image: string, place: string, time: Date}

const FlexRow = styled.div`
  display: flex;
`;

const MiddleFlexRow = styled(FlexRow)`
  justify-content: center;
`;

const RoundImage = styled.div`
  border-radius: 100px;
  width: 50px;
  margin-right: 3em;
`;

const searchResults = makeMissingPeopleSearchResults;
console.log(searchResults);

const Home: React.FC<RouteComponentProps> = props => {
  //@ts-ignore
  const searchResults = props.searchResults;
  return (
    <IonPage>
      <Header {...props} />
      <IonContent className="ion-padding">
        <MiddleFlexRow>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonButton color="medium">Subscribe to search terms</IonButton>
        </MiddleFlexRow>
        <IonList>
          {_.map(searchResults, (result: Result, index) => (
            <MiddleFlexRow>
              <IonCard
                key={index}
                style={{ minimumWidth: "500px", width: "50%" }}
              >
                <IonCardHeader>
                  <IonCardSubtitle>Missing person</IonCardSubtitle>
                  
                  <IonCardTitle>{
                    result.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <FlexRow>
                    <RoundImage>
                      <IonImg src={
                        result.image} />
                    </RoundImage>
                    <div>
                      <p>Last seen family:</p>
                      <div>
                        {
                          result.place} at{" "}
                        {moment(
                          result.time).format("MMMM Do YYYY")}
                      </div>
                    </div>
                  </FlexRow>
                  <FlexRow>
                    <IonButton color="danger" onClick={() => props.history.push("/missing-person/" + result.id)}>Contact</IonButton>
                  </FlexRow>
                </IonCardContent>
              </IonCard>
            </MiddleFlexRow>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

//@ts-ignore
const mapStateToProps = state => ({
  searchResults: state.user.searchResults
})

export default connect()(Home);
