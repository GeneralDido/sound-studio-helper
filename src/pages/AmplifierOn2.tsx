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
  IonImg,
  IonItem,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const AmplifierOn2: React.FC = () => {
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
      <IonContent>
        <IonCard mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>Step 2/2</IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  {/*<br />*/}
                  <IonCardTitle>
                    1. Set the <b>Mic Gain</b> knob to position 18
                  </IonCardTitle>
                  {/*<br />*/}
                  <IonCardTitle>
                    2. Switch on phantom power <b>(+48V)</b> by pressing button
                    in
                  </IonCardTitle>
                  {/*<br />*/}
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg
                  src={require("../assets/img/Amplifier3.png")}
                  id={"amplifier-on"}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          <br/>
        </IonCard>
        <IonCard mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  mode={"ios"}
                  size={"large"}
                  id={"border-start"}
                  shape={"round"}
                  color={"transparent"}
                  expand={"full"}
                  routerLink={"/switch-on"}
                >
                  <IonText color={"warning"} id={"button-card-big"}>
                    Done!
                  </IonText>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AmplifierOn2;
