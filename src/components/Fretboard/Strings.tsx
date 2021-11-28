import { chakra, Flex, Grid } from "@chakra-ui/react";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { fretboardState } from "state";

const StringsGrid = chakra(Grid, {
  baseStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    pointerEvents: "none",
  },
});

const String = chakra(Flex, {
  baseStyle: {
    alignItems: "center",
    _before: {
      w: "100%",
      content: `""`,
      boxShadow: "md",
      background: "linear-gradient(to bottom, gray, white, gray)",
    },
  },
});

const Strings: FC = () => {
  const fretboard = useRecoilValue(fretboardState);

  return (
    <StringsGrid templateRows={`repeat(${fretboard.tuning.length}, 1fr)`}>
      {fretboard.tuning.map((_, i) => (
        <String
          key={i}
          sx={{
            ":before": {
              h: (fretboard.guages[i] || 1) + "px",
            },
          }}
        />
      ))}
    </StringsGrid>
  );
};

export default Strings;
