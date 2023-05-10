import { Dimensions } from 'react-native';

export const useConstants = () => {
  const dim = Dimensions.get('screen');

  return {
    dim,
    links: {
      github: 'https://github.com/kanzitelli/rnn-starter',
      website: 'https://batyr.io',
    },
  };
};

const fontName = "Oswald";
const fontRegularName = "Jost";

export const theme = {
  colors: {
    backdrop: '#181818',
    white: "white",
    formred: '#2B060D',
    formredlight: "#3B020B",
    borderorange: "#AF8E4D",
    borderorangelight: "#CAAB5E",
    black: 'black',
    gradientOrange: ["#E2B04A", "#FAD674", "#FAD674", "#FAD674", "#E2B04A"],
    gray: "lightgray",
    red: "#4B020F",
    lightgray: "#282828",
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }
  },
  fontHeadings: {
    light: fontName + "-Light",
    regular: fontName + "-Regular",
    semibold: fontName + "-SemiBold",
    extra_light: fontName + "-ExtraLight",
    bold: fontName + "-Bold",
    bold_italic: fontName + "-BoldItalic",
    extra_bold: fontName + "-ExtraBold",
    medium: fontName + "-Medium",
  },
  fontRegulars: {
    light: fontRegularName + "-Light",
    light_italic: fontRegularName + "-LightItalic",
    regular: fontRegularName + "-Regular",
    semibold: fontRegularName + "-SemiBold",
    semibold_italic: fontRegularName + "-SemiBoldItalic",
    extra_light: fontRegularName + "-ExtraLight",
    extra_light_italic: fontRegularName + "-ExtraLightItalic",
    bold: fontRegularName + "-Bold",
    bold_italic: fontRegularName + "-BoldItalic",
    extra_bold: fontRegularName + "-ExtraBold",
    extra_bold_italic: fontRegularName + "-ExtraBoldItalic",
    medium: fontRegularName + "-Medium",
    popins_semibold: "Poppins-SemiBold",
  }
}