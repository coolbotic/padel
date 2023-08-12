import { Link } from "expo-router";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button, Card, Chip, IconButton, MD3Colors, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from 'expo-screen-orientation'
import { useEffect, useState } from "react";
import Carousel from 'react-native-reanimated-carousel';
import SensorCard from "../components/SensorCard";
import { BleManager } from 'react-native-ble-plx';

export const manager = new BleManager();

const sensors: SensorCarouselItem[] = [
  {
    id: 0,
    source: require('../assets/sensors/ring_button_v1.png'),
    title: 'Ring Button (Version 1)',
    description: 'This sensor is worn on your weak hand and allows the updating of the score using either a signal or two rings.'
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 1,
    source: require('../assets/sensors/ring_button_v2.png'),
    title: 'Ring Button (Version 2)',
    description: 'This sensor is worn on your weak hand and allows the updating of the score using either a signal or two rings.'
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {id: 2,
  source: require('../assets/sensors/ring_button_v2.png'),
  title: 'Ring Button (Version 3)',
  description: 'This sensor is worn on your weak hand and allows the updating of the score using either a signal or two rings.'
}, // https://unsplash.com/photos/oO62CP-g1EA

];

export default function Page() {
  const width = Dimensions.get('window').width;

  const [currentIndex, setCurrentIndex] = useState<Number | null>(0);
  

  const connectDevice = () => { 
    console.log("Connecting to device...");
    
  }

  function scanAndConnect() {
    manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            // Handle error (scanning will be stopped automatically)
            return
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (device?.name === 'TI BLE Sensor Tag' || 
            device?.name === 'SensorTag') {
            
            // Stop scanning as it's not necessary if you are scanning for one device.
            manager.stopDeviceScan();

            // Proceed with connection.
        }
    });
}


  useEffect(() => {
    const subscription = manager.onStateChange((state) => {
        if (state === 'PoweredOn') {
          console.log("Device is powered on");
            scanAndConnect();
            subscription.remove();
        }
    }, true);
    return () => subscription.remove();
  }, [manager]);

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Padel Track</Text>
        <Text style={styles.subtitle}>Connect device and start your game</Text>
        </View>
       
       <View style={{ flexShrink: 1,
                      padding: 10,
                      justifyContent: 'center'}}>

     
      <View style={{}}>
      <Carousel
      style={{}}
      data={sensors}
        width={width}
        height={400}
        autoPlay={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 115,
        }}
        data={[...new Array(3).keys()]}
        scrollAnimationDuration={600}
        onProgressChange={(offsetProgress: number, absoluteProgress: number) => {
          if (absoluteProgress % 1 == 0 || absoluteProgress % 1 <= 0.1 || absoluteProgress % 1 >= 0.9) { 
            if (Math.round(absoluteProgress) == 3) {
              setCurrentIndex(Math.round(0))
            } else setCurrentIndex(Math.round(absoluteProgress))
          } else setCurrentIndex(null)
        }}

        renderItem={({ index }) => ( <SensorCard data={sensors[index]} currentIndex={currentIndex} /> )}
      />
      </View>

      <View style={{marginVertical: -50, marginHorizontal: 45}}>
      <Button icon="bluetooth-connect" mode="contained" style={{marginVertical: 7.5}}>
                Connect Sensor
              </Button>
              </View>
      </View>
      {/* <Button onPress={toggleOrientation}>Change Orientation</Button> */}

      <View style={styles.buttons}>
          <View style={{paddingVertical: 12}}>
        <Link href="/game" asChild>
            <Button icon="tennis" mode="contained">
              Start Game
            </Button>
        </Link>
          </View>

        
          <View style={{paddingVertical: 0}}>
            <Button icon="bluetooth-connect" mode="contained" onPress={connectDevice}>
              Connect Sensor
            </Button>
          </View>
        

      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  buttons: {
    flexGrow: 1,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
