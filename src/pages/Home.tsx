import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import UnixClock from '../components/UnixClock';
import './Home.css';
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Unix Time</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <UnixClock />
      </IonContent>
    </IonPage>
  );
};

export default Home;
