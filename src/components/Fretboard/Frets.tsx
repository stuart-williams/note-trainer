import { Box, chakra, Circle, Grid } from "@chakra-ui/react";
import { times } from "lodash";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { fretboardState, fretMarkersState, leftHandedState } from "state";

const FretsGrid = chakra(Grid, {
  baseStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    pointerEvents: "none",
  },
});

const Fret = chakra(Grid, {
  baseStyle: {
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    _before: {
      w: "8px",
      top: 0,
      bottom: 0,
      position: "absolute",
      background: "linear-gradient(to right, gold, gray, gold)",
    },
  },
});

const Nut = chakra(Box, {
  baseStyle: {
    position: "relative",
    _before: {
      top: 0,
      bottom: 0,
      w: "16px",
      content: `""`,
      position: "absolute",
      background: "gray.200",
    },
  },
});

const FretMarker = chakra(Circle, {
  baseStyle: {
    h: "26px",
    w: "26px",
    bg: "gray.200",
  },
});

const Frets: FC = () => {
  const fretboard = useRecoilValue(fretboardState);
  const leftHanded = useRecoilValue(leftHandedState);
  const fretMarkers = useRecoilValue(fretMarkersState);
  const columns = fretboard.fretCount + 1;

  return (
    <FretsGrid templateColumns={`repeat(${columns}, 1fr)`}>
      {times(columns).map((i) => {
        const fretNum = leftHanded ? fretboard.fretCount - i : i;
        const numDots = fretNum % 12 === 0 ? 2 : 1;
        const hasMarker = fretboard.fretMarkers.includes(fretNum);
        const renderMarker = fretMarkers && hasMarker;

        const styles = {
          ":before": {
            [leftHanded ? "left" : "right"]: "-4px",
            content: fretNum === fretboard.fretCount ? undefined : `""`,
          },
        };

        return !fretNum ? (
          <Nut key={fretNum} sx={styles} />
        ) : (
          <Fret
            sx={styles}
            key={fretNum}
            templateRows={`repeat(${numDots}, 1fr)`}
          >
            {renderMarker && times(numDots).map((i) => <FretMarker key={i} />)}
          </Fret>
        );
      })}
    </FretsGrid>
  );
};

export default Frets;
