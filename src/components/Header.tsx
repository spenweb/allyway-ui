import {
  IonHeader,
  IonButton,
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
import { RouteComponentProps } from "react-router-dom";
import Logo from "./Logo";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #dd545c;
`;

const StyledLink = styled.div`
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  padding: 1em;
`;

const LinkBox = styled.div`
  display: flex;
`;

const Header: React.FC<RouteComponentProps> = props => {
  return (
    <IonHeader>
      <IonToolbar>
        <Container>
          <Logo size="small" width={100} {...props} />
          <LinkBox>
            <a
              onClick={e => {
                e.preventDefault();
                props.history.push("/find-family");
              }}
            >
              <StyledLink>Find family</StyledLink>
            </a>
            <a
              onClick={e => {
                e.preventDefault();
                props.history.push("/add-location");
              }}
            >
              <StyledLink>Add location</StyledLink>
            </a>
            <a
              onClick={e => {
                e.preventDefault();
                props.history.push("/contact-family");
              }}
            >
              <StyledLink>Contact family</StyledLink>
            </a>
          </LinkBox>
          <LinkBox>
          <IonButton onClick={() => props.history.push("/login")} color="light">Sign out</IonButton>
            <IconButton onClick={() => props.history.push("/login")}>
              <AccountCircleIcon />
            </IconButton>
          </LinkBox>
        </Container>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
