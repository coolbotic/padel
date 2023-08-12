import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from "react";
import { Text, IconButton, MD3Colors } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [firstTeamScore, setFirstTeamScore] = useState(0)
  const [secondTeamScore, setSecondTeamScore] = useState(40)

  // async function toggleOrientation(){
  //   let currentOrientation = await ScreenOrientation.getOrientationAsync(); // get current orientation
  //   if(currentOrientation){
  //     console.log("Going LANDSCAPE")
  //   ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  //   }
  //   else {
  //     console.log("Going PORTRAIT")
  //     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  //     // ScreenOrientation.unlockAsync();
  //   }
  // }

  function quitGame(){ 
    Alert.alert(
      'Confirm Exit',
      'Are you sure you want to quit this game?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Quit',
          onPress: () => {
            router.back();
          },
          style: 'destructive'
        }
      ]
    );
  }

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  return (
  <SafeAreaView style={{flex: 1}}>

<IconButton
    icon="close"
    iconColor={MD3Colors.error50}
    size={35}
    style={styles.icon} 
    onPress={quitGame}
  />
  
  <View style={styles.scoreContainer}>
      
      <View style={{flexGrow: 1, flexDirection: 'column', borderColor: 'black', borderWidth: 1, backgroundColor: 'blue'}}>
        <IconButton size={40} style={{justifyContent: "center", alignSelf: 'center'}} icon={'menu-up'} onPress={() => {}} />
        <Text style={styles.scoreText}>{firstTeamScore}</Text>
        <IconButton size={40} style={{justifyContent: "center", alignSelf: 'center'}} icon={'menu-down'} onPress={() => {}} />
      </View>
      
      <View style={{flex: 1, flexDirection: 'column', borderColor: 'black', borderWidth: 1}}>
      <Text style={styles.scoreText}>-</Text>
      <IconButton size={40} style={{justifyContent: "center", alignSelf: 'center'}} icon={'shuffle-variant'} onPress={() => {}} />
      </View>
      
      <View style={{flexGrow: 1}}>
      <IconButton size={40} style={{justifyContent: "center", alignSelf: 'center'}} icon={'menu-up'} onPress={() => {}} />
      <Text style={styles.scoreText}>{secondTeamScore}</Text>
      <IconButton size={40} style={{justifyContent: "center", alignSelf: 'center'}} icon={'menu-down'} onPress={() => {}} />
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
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  scoreText: {
    fontWeight: '300', 
    fontSize: 128,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  scoreContainer: {
    flex: 1, 
    flexDirection: 'row', 
    // justifyContent: 'space-evenly', 
    alignItems: 'center'
  }
});