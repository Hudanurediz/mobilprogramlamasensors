import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function BrightSensor(enabled) {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        //Brightness.setSystemBrightnessAsync(1);
        //Brightness.setSystemBrightnessAsync(0);
        //Brightness.setSystemBrightnessAsync(8/8);
        Brightness.getSystemBrightnessAsync(1);
      }
      
    })();
  }, []);

  if(enabled.enable){
    return (
    <View style={styles.container}>
      <Text>Brightness Module Example</Text>
    </View>
  );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Sensor kullanilmamaktadir</Text>
      </View>
    );
  } 
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    margin: 5,
  },
});
