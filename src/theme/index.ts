import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f5f7f9",
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          // boxShadow: "lg",
        },
      },
    },
  },
});

export default theme;
