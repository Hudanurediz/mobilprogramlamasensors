import { CheckBox } from "react-native-elements";
import { useState } from 'react';
import { StyleSheet, View, Alert, } from 'react-native';
import { Card } from 'react-native-paper';
import AccelerometerSensor from './components/AccelerometerSensor';
import LocationSensor from './components/LocationSensor';
import GyroscopeSensor from './components/GyroscopeSensor';
import MagneSensor from './components/MagneSensor';
import BrightSensor from './components/BrightSensor';


export default function App() {
  const [ Accelerometer1, setAccelerometer1 ] = useState(false);
  const [ Location1, setLocation1 ] = useState(false);
  const [ Gyroscope1, setGyroscope1 ] = useState(false);
  const [ Magne1, setMagne1 ] = useState(false);
  const [ Bright1, setBright1 ] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <CheckBox
          title="s1"
          checked={Accelerometer1}
          onPress={() => setAccelerometer1(!Accelerometer1)}
        />
        <CheckBox
          title="s2"
          checked={Location1}
          onPress={() => setLocation1(!Location1)}
        />
        <CheckBox
          title="s3"
          checked={Gyroscope1}
          onPress={() => setGyroscope1(!Gyroscope1)}
        />
        <CheckBox
          title="s4"
          checked={Magne1}
          onPress={() => setMagne1(!Magne1)}
        />
        <CheckBox
          title="s5"
          checked={Bright1}
          onPress={() => setBright1(!Bright1)}
        />
      </View>

      <Card>
        <AccelerometerSensor enable={Accelerometer1} />
      </Card>

      <Card>
        <LocationSensor enable={Location1} />
      </Card>

      <Card>
        <GyroscopeSensor enable={Gyroscope1} />
      </Card>

      <Card>
        <MagneSensor a={Magne1} />
      </Card>
      
      <Card>
        <BrightSensor enable={Bright1} />
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 100,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
