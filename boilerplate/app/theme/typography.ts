// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  SpaceGrotesk_700Bold as spaceGroteskBold,
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold
} from "@expo-google-fonts/space-grotesk"
import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium
} from "@expo-google-fonts/montserrat"
import {
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold
} from "@expo-google-fonts/open-sans"

export const customFontsToLoad = {
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,
  //TODO: replace completely with personal font choice
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold
}

const fonts = {
  spaceGrotesk: {
    // Cross-platform Google font.
    light: "spaceGroteskLight",
    normal: "spaceGroteskRegular",
    medium: "spaceGroteskMedium",
    semiBold: "spaceGroteskSemiBold",
    bold: "spaceGroteskBold"
  },
  montserrat: {
    light: Montserrat_300Light,
    medium: Montserrat_500Medium,
    regular: Montserrat_400Regular
  },
  openSans: {
    semiBold: OpenSans_600SemiBold,
    bold: OpenSans_700Bold,
    extra: OpenSans_800ExtraBold
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium"
  },
  courier: {
    // iOS only font.
    normal: "Courier"
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium"
  },
  monospace: {
    // Android only font.
    normal: "monospace"
  }
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.spaceGrotesk,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace })
}
