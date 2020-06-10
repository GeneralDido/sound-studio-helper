import React from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

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

import Start from "./pages/StartPage";
import ReportError from "./pages/ReportError";
import MicrophoneOn from "./pages/MicrophoneOn";
import SwitchOn2 from "./pages/SwitchOn2";
import MicrophoneOn2 from "./pages/MicrophoneOn2";
import ComputerOn from "./pages/ComputerOn";
import SoundCardOn from "./pages/SoundCardOn";
import AmplifierOn from "./pages/AmplifierOn";
import AmplifierOn2 from "./pages/AmplifierOn2";
import MonitoringOn from "./pages/MonitoringOn";
import MonitoringOn2 from "./pages/MonitoringOn2";
import SpeakersOn from "./pages/SpeakersOn";
import ConfirmOn from "./pages/ConfirmOn";
import SwitchOn from "./pages/SwitchOn";
import CreateProject from "./pages/CreateProject";
import CreateProject2 from "./pages/CreateProject2";
import RecordingLevels from "./pages/RecordingLevels";
import RecordingLevels2 from "./pages/RecordingLevels2";
import MonitoringLevels from "./pages/MonitoringLevels";
import MonitoringLevels2 from "./pages/MonitoringLevels2";
import StartRecording from "./pages/StartRecording";
import ExportRecording from "./pages/ExportRecording";
import ExportSingleTrack from "./pages/ExportSingleTrack";
import ExportMultitrack from "./pages/ExportMultitrack";
import ConfirmOn2 from "./pages/ConfirmOn2";
import SwitchOff from "./pages/SwitchOff";
import SpeakersOff from "./pages/SpeakersOff";
import MonitoringOff from "./pages/MonitoringOff";
import AmplifierOff from "./pages/AmplifierOff";
import SoundCardOff from "./pages/SoundCardOff";
import ComputerOff from "./pages/ComputerOff";
import MicrophoneOff from "./pages/MicrophoneOff";
import Finish from "./pages/FinishPage";
import {
  bugOutline,
  bulbOutline,
  caretForwardCircleOutline,
  homeOutline, listOutline,
  powerOutline,
  radioButtonOffOutline
} from "ionicons/icons";
import About from "./pages/About";
import Instructions from "./pages/Instructions";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId={"main"}>
        <IonHeader>
          <IonToolbar color="warning">
            <IonTitle>
              <IonText color={"light"}>
                <b>Sound Studio</b>
              </IonText>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink={"/"} routerDirection={"none"}>
                <IonIcon slot={"start"} icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink={"/instructions"} routerDirection={"none"}>
                <IonIcon slot={"start"} icon={listOutline} />
                <IonLabel>instructions</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                button
                routerLink={"/switch-on"}
                routerDirection={"none"}
              >
                <IonIcon slot={"start"} icon={radioButtonOffOutline} />
                <IonLabel>Set Up</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                button
                routerLink={"/switch-on2"}
                routerDirection={"none"}
              >
                <IonIcon slot={"start"} icon={caretForwardCircleOutline} />
                <IonLabel>Record/Export</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                button
                routerLink={"/switch-off"}
                routerDirection={"none"}
              >
                <IonIcon slot={"start"} icon={powerOutline} />
                <IonLabel>Switch Off Studio</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink={"/about"} routerDirection={"none"}>
                <IonIcon slot={"start"} icon={bulbOutline} />
                <IonLabel>About</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                button
                routerLink={"/report-error"}
                routerDirection={"none"}
              >
                <IonIcon slot={"start"} icon={bugOutline} />
                <IonLabel>Feedback/Report Error</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id={"main"}>
        <Route path={"/"} exact>
          <Start />
        </Route>
        <Route path={"/switch-on"}>
          <SwitchOn />
        </Route>
        <Route path={"/microphone-on"}>
          <MicrophoneOn />
        </Route>
        <Route path={"/microphone-on2"}>
          <MicrophoneOn2 />
        </Route>
        <Route path={"/computer-on"}>
          <ComputerOn />
        </Route>
        <Route path={"/soundcard-on"}>
          <SoundCardOn />
        </Route>
        <Route path={"/amplifier-on"}>
          <AmplifierOn />
        </Route>
        <Route path={"/amplifier-on2"}>
          <AmplifierOn2 />
        </Route>
        <Route path={"/monitoring-on"}>
          <MonitoringOn />
        </Route>
        <Route path={"/monitoring-on2"}>
          <MonitoringOn2 />
        </Route>
        <Route path={"/speakers-on"}>
          <SpeakersOn />
        </Route>
        <Route path={"/confirm-on"}>
          <ConfirmOn />
        </Route>
        <Route path={"/switch-on2"}>
          <SwitchOn2 />
        </Route>
        <Route path={"/create-project"}>
          <CreateProject />
        </Route>
        <Route path={"/create-project2"}>
          <CreateProject2 />
        </Route>
        <Route path={"/recording-levels"}>
          <RecordingLevels />
        </Route>
        <Route path={"/recording-levels2"}>
          <RecordingLevels2 />
        </Route>
        <Route path={"/monitoring-levels"}>
          <MonitoringLevels />
        </Route>
        <Route path={"/monitoring-levels2"}>
          <MonitoringLevels2 />
        </Route>
        <Route path={"/start-recording"}>
          <StartRecording />
        </Route>
        <Route path={"/export-recording"}>
          <ExportRecording />
        </Route>
        <Route path={"/export-single-track"}>
          <ExportSingleTrack />
        </Route>
        <Route path={"/export-multi-track"}>
          <ExportMultitrack />
        </Route>
        <Route path={"/confirm-on2"}>
          <ConfirmOn2 />
        </Route>
        <Route path={"/switch-off"}>
          <SwitchOff />
        </Route>
        <Route path={"/speakers-off"}>
          <SpeakersOff />
        </Route>
        <Route path={"/monitoring-off"}>
          <MonitoringOff />
        </Route>
        <Route path={"/amplifier-off"}>
          <AmplifierOff />
        </Route>
        <Route path={"/sound-card-off"}>
          <SoundCardOff />
        </Route>
        <Route path={"/computer-off"}>
          <ComputerOff />
        </Route>
        <Route path={"/microphone-off"}>
          <MicrophoneOff />
        </Route>
        <Route path={"/finish"}>
          <Finish />
        </Route>
        <Route path={"/report-error"}>
          <ReportError />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/instructions"}>
          <Instructions />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
