import { Box, chakra } from "@chakra-ui/react";

const Card = chakra(Box, {
  baseStyle: {
    p: 4,
    bg: "white",
    boxShadow: "md",
    borderRadius: "md",
  },
});

export default Card;
