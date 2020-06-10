import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { powerOutline } from "ionicons/icons";

const AmplifierOff: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Mic amplifier</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id={"ion-background-2"}>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonText color="warning">
                      <b>Switch off mic amplifier</b>
                    </IonText>
                  </IonCardTitle>
                  <IonCardTitle>
                    Reset the <b>Gain</b> section by setting the knobs as shown
                    and switching off phantom power (+48V)
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Amplifier4.jpg")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>Then turn off</IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Amplifier2.jpg")}
                  id={"img-on4"}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol id={"button-start"}>
                <IonButton
                  size={"large"}
                  shape={"round"}
                  color={"transparent"}
                  id={"border-off-icon"}
                  routerLink={"/switch-off"}
                >
                  <IonIcon
                    icon={powerOutline}
                    color={"primary"}
                    size={"large"}
                  />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AmplifierOff;
