import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        h: "100%",
        display: "flex",
        flexDirection: "column",
      },
      body: {
        bg: "#f5f7f9",
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
