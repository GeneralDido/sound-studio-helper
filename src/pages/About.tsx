import React from "react";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage, IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonButtons>
            <IonMenuButton slot={"start"} />
          </IonButtons>
          <IonTitle id={"header-title"}>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard mode={"md"}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    I’m your{" "}
                    <IonText color="warning">
                      <b>Sound Studio Assistant v1.0</b>
                    </IonText>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <br/>
            <IonRow>
              <IonCol>
                <IonCardTitle>
                  Designed by:
                  <p>
                    <IonText color="warning">
                      <b>Konstantinos Kokogias</b>
                    </IonText></p>
                  <p>
                    <IonText color="warning">
                      <b>Vilde Christina Ekse</b>
                    </IonText>
                  </p>
                </IonCardTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardTitle>
                  Created by:
                  <p>
                    <IonText color="warning">
                      <b>Dimitris Panouris</b>
                    </IonText>
                    <IonCardContent>
                      <IonRouterLink color="success" class="underline" href="https://www.linkedin.com/in/dimpanouris/">Add me on LinkedIn</IonRouterLink>
                    </IonCardContent>
                  </p>
                </IonCardTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                   <i> On behalf of the Institute of ICT & IT’s Media Centre</i>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <br/>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
