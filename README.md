# MrDog App
### Stack technologies: Javascript, React Native(Expo), CSS

### Project start instruction 

1. npm install ( to install dependencies from package.json )
2. npm start
3. Expo dashboard: if you want to start project on your mobile, first of all you need to download Expo Client(for iOS) or Expo (for Android). Then in section "Connection" you need to choose LAN or Tunnel: if your PC and mobile are connected to the same network, you have to choose LAN. Otherwise, you need to choose Tunnel - then your address will be avaible to all mobiles regardless of network. After that, you need to scan QR-code on expo dashboard.  
3.1 If you want to start project on emulator : for Android  https://docs.expo.io/versions/v36.0.0/workflow/android-studio-emulator/  ; 
for iOS  (only for iOS PC users)  https://docs.expo.io/versions/v36.0.0/workflow/ios-simulator/  ; Then in expo dashboard you can select: "Run on android device/emulator" or "Run on iOS simulator".

---
### Usage
* After user downloads the application, the Login screen appears.
* User enters arbitrary non-empty username and password (invalid data must be validated and error displayed)
* Presses the "Sign In" button
* The Main screen appears.
* Every N seconds (3 seconds by default), a random image downloaded using the API is displayed on the screen - https://dog.ceo/api/breeds/image/random (https://dog.ceo/dog-api/ )
* User changes N to 1 second.
* User changes N to 10 seconds.
* User presses the exit button and enters the Login screen.
* 2 languages ​​are supported - English and Arabic. Switching languages functionality placed ​​on the Login screen.
---
If you ran into following error : **undefined is not an object (evaluating 'RNI18n.getLanguages')**, it means the module couldn't get the default language properly. To fix it, in the file index.js (might be located in node_modules/react-native-i18n/), replace the following lines:

```javascript
I18nJs.locale = RNI18n.languages[0]; // Line 7  
export const getLanguages = RNI18n.getLanguages; // Line 12
```

by

```javascript
I18nJs.locale = (RNI18n) ? RNI18n.languages[0] : "";
export const getLanguages = (RNI18n) ? RNI18n.getLanguages : () => {};
```

---
### Useful links:  
* https://facebook.github.io/react-native/
* https://docs.expo.io/versions/latest/
* https://expo.io/
  