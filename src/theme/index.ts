import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        h: "100%",
        display: "flex",
        overflowX: "hidden",
        flexDirection: "column",
      },
      body: {
        bg: "gray.50",
      },
    },
  },
  colors: {
    ebony: {
      "500": "#222222",
      "600": "#120b0d",
    },
    ivory: {
      "500": "#ffffff",
      "600": "#f2f2f2",
    },
  },
  components: {
    Modal: {
      baseStyle: {
        overlay: {
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export default theme;
