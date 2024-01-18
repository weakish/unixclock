import { IonDatetimeButton, IonModal, IonDatetime, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import './UnixClock.css';
import { useState } from 'react';

interface ContainerProps { }

const UnixClock: React.FC<ContainerProps> = () => {
  const now = new Date().toISOString()
  const [time, setTime] = useState(now);
  const unixTime = Math.floor(new Date(time).getTime() / 1000)
  // TODO prettify unix time:
  //           xxxy,yyy,zzz
  //      zzz is unimportant (time slices less than about 15 minutes are hard to manage)
  //      y,yyy can express time for a whole season (more than 3 months)
  //
  // TODO make time editable, i.e. display UTC time corresponding to unix time
  //
  // TODO allow customize locale (to keep things simple, just let user input the string)
  //
  // TODO support timezone other than UTC
  //
  // TODO different layout on big screens
  //
  // TODO instructions for browsers without JavaScript
  //
  // TODO alarm clock
  //
  // TODO timers
  //
  // TODO stopwatchss
  return (
      <IonGrid>
        <IonRow className="ion-justify-content-center">
      <h1>
        <time dateTime={time}>{new Intl.NumberFormat('en-001').format(unixTime)}</time>
      </h1>
        </IonRow>
        <IonRow className="ion-justify-content-center">
      <IonDatetime
        locale="en-001-u-hc-h23-ca-japanese"
        firstDayOfWeek={1}
        onIonChange={(e) => setTime(e.detail.value as string)}>
          <span slot='time-label'>UTC</span>
      </IonDatetime>
        </IonRow>
      </IonGrid>  
  );
};

export default UnixClock;
