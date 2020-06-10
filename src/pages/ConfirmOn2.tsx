import React from "react";
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const ConfirmOn2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode={"ios"}>
          <IonTitle id={"header-title"}>Great Job!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>
                    Finished? Great! Now let’s switch off and reset the studio
                  </IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size={"large"}
                  shape={"round"}
                  id={"border-start"}
                  color={"success"}
                  expand={"full"}
                  routerLink={"/switch-off"}
                >
                  Alright!
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size={"large"}
                  shape={"round"}
                  color={"danger"}
                  id={"border-start"}
                  expand={"full"}
                  routerLink={"/switch-on2"}
                >
                  Wait, need to go back
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmOn2;
