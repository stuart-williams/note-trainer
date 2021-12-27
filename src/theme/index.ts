import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        h: "100%",
        display: "flex",
        overflowY: "hidden",
        flexDirection: "column",
      },
      body: {
        bg: "gray.50",
      },
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
