import * as SplashScreen from "expo-splash-screen"

import App from "./app/app"

SplashScreen.preventAutoHideAsync()

function MainApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default MainApp
