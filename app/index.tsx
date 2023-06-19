import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from 'expo-screen-orientation'
import { useState } from "react";

export default function Page() {

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Racket Track</Text>
        <Text style={styles.subtitle}>Connect device and start your game</Text>
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

        <Link href="/game" asChild>
          <View style={{paddingVertical: 0}}>
            <Button icon="bluetooth-connect" mode="contained">
              Connect Sensor
            </Button>
          </View>
        </Link>
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
