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

const MonitoringOff: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons slot={"start"}>
            <IonBackButton defaultHref={"/switch-on"} />
          </IonButtons>
          <IonTitle id={"header-title"}>Monitoring Unit</IonTitle>
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
                      <b>Switch off monitoring unit</b>
                    </IonText>
                  </IonCardTitle>
                  <IonCol>
                    <IonCardTitle>
                      Depress the <b>3/4</b> and <b>A</b> buttons so to
                      deactivate them
                    </IonCardTitle>
                  </IonCol>
                  <IonCol>
                    <IonCardTitle>
                      Turn the <b>trim</b> knob to the center position
                    </IonCardTitle>
                  </IonCol>
                  <IonCol>
                    <IonCardTitle>
                      Turn down the <b>speaker</b> knob
                    </IonCardTitle>
                  </IonCol>
                  <IonCol>
                    <IonCardTitle>
                      The power button is located on the back of the unit.
                    </IonCardTitle>
                  </IonCol>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/MonitoringOff.png")}
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

export default MonitoringOff;
