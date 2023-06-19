# Padel Track

A padel score tracking app

## Installation

Use the git to clone the repository.

```bash
git clone https://github.com/coolbotic/padel.git
```

## Usage
Start Expo Server
```bash
npx expo start --dev-client
```

> Pass the --latest flag to the eas build:run command to download and install the latest build on the iOS Simulator:

Install NPM packages (and check if compatible with expo)
```bash
npx expo install (e.g. react-native-paper)
```
> Use this page to find packages that are compatible with expo https://reactnative.directory/?order=updated

## Packages

- Expo  
- config-plugins/react-native-ble-plx, https://www.npmjs.com/package/@config-plugins/react-native-ble-plx
- expo-screen-orientation, https://docs.expo.dev/versions/latest/sdk/screen-orientation/


## Development builds (ESA)
https://docs.expo.dev/develop/development-builds/introduction/
Used to be able to run native code (e.g. bluetooth)

### Prereq
Installing EAS CLI as a global npm dependency
```terminal
npm install -g eas-cli
```

### Commands
https://github.com/demsr/expo-ble

Create iOS simulator build
```
eas build --profile development-simulator --platform ios
```
Create build for iOS device  
Register device,
```
eas device:create
```
Create dev build
```
eas build --profile development --platform ios
```


Create Android development build
```
eas build --profile development --platform android
```
> Add `--local` to build the app on local device not the dev server


Install android app onto device
https://expo.dev/accounts/coolbotic/projects/padel/builds/5a5d8f23-e292-40ad-abc1-196f2968d222  

Reinstall dev-client onto iOS simulator
```bash
eas build:run -p ios
```

Reinstall dev-client onto android simulator
```bash
eas build:run -p android
```

### Setup steps (Do not need to be repeated)
Install expo-dev-client
```bash
npx expo install expo-dev-client
```
Login to your Expo account (https://expo.dev/)
```bash
eas login
```
> You can check whether you are logged in by running eas whoami

## Project Creation Commands
```bash
npx create-expo-app --template
```
> Blank TS template used
```bash
npx expo install react-native-safe-area-context
```
```bash 
npm install react-native-paper
```
https://callstack.github.io/react-native-paper/docs/guides/getting-started/
```bash
npx expo install react-native-ble-plx @config-plugins/react-native-ble-plx
```
https://www.npmjs.com/package/@config-plugins/react-native-ble-plx
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)