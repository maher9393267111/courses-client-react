

import { theme as chakuraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const fonts = {
  ...chakuraTheme.fonts,
  body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  lg: "63em",
});

const overrides = {
  ...chakuraTheme,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;




// import { extendTheme } from "@chakra-ui/react";
// import { createBreakpoints } from "@chakra-ui/theme-tools";

// const breakpoints = createBreakpoints({
//     sm: "400px",
//     md: "850px",
//     lg: "1200px",
//     xl: "144em",
//     "2xl": "256em",
// });

// export const theme = extendTheme({
//     breakpoints,
//     config: {
//         initialColorMode: "system",
//         useSystemColorMode: true,
//     },
//     // colors: {
//     //     blue: "#0079FF",
//     //     white: "#FEFEFE",
//     //     "grey-blue": "#697C9A",
//     //     "pale-blue": "#4B6A9B",
//     //     "grey-black": "#2B3442",
//     //     "grey-white": "#F6F8FF",
//     //     "marine-blue": "#141D2F",
//     //     "blue-high": "#1E2A47",
//     // },
// });











// import { extendTheme } from '@chakra-ui/react';

// const  ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// };

// const theme = extendTheme({ ...ThemeConfig });

// export default theme;