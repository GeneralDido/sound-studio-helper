import React from "react";
import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonIcon,
    IonMenuButton,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {happyOutline} from "ionicons/icons";

const Instructions: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar mode={"ios"}>
                    <IonButtons>
                        <IonMenuButton slot={"start"} />
                    </IonButtons>
                    <IonTitle id={"header-title"}>Instructions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard mode={"md"}>
                    <IonGrid>
                        <br/><br/>
                        <IonRow>
                            <IonCol>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        I will guide you step-by-step in setting up and using the <IonText color={"warning"}>sound studio</IonText>
                                    </IonCardTitle>
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        Please follow the instructions in the following sections <IonText color={"warning"}>in order</IonText>
                                    </IonCardTitle>
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        Have fun! <IonIcon icon={happyOutline} color={"warning"} size={"large"}/>
                                    </IonCardTitle>
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                        <br/><br/>
                    </IonGrid>
                    <br/><br/>
                </IonCard>
                <IonCard  mode={"md"}>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton
                                    mode={"ios"}
                                    size={"large"}
                                    shape={"round"}
                                    id={"border-start"}
                                    expand={"full"}
                                    routerLink={"/switch-on"}
                                    color={"transparent"}
                                >
                                    <IonText color={"warning"} id={"button-card-big"}>
                                        Start!
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

export default Instructions;
