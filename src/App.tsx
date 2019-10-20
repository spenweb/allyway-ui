import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import NewItem from "./pages/NewItem";
import LoginPage from "./pages/LoginPage";
import FindRelative from "./pages/FindRelative"
import SearchResults from "./pages/SearchResults"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const isAuthed = true;
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/new"
            render={props => {
              return isAuthed ? (
                <NewItem {...props} />
              ) : (
                <LoginPage {...props} />
              );
            }}
          />
          <Route
            path="/find-family"
            render={props => {
              return isAuthed ? (
                <FindRelative {...props} />
              ) : (
                <LoginPage {...props} />
              );
            }}
          />
          <Route
            path="/search-results"
            render={props => {
              return isAuthed ? (
                <SearchResults {...props} />
              ) : (
                <LoginPage {...props} />
              );
            }}
          />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
