import { Button, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { getNoteNames } from "utils";

interface Props {
  onClick: (noteName: string) => void;
}

const Keyboard: FC<Props> = ({ onClick }) => {
  const noteNames = getNoteNames();

  return (
    <SimpleGrid columns={12} gridGap={2}>
      {noteNames.map((noteName) => (
        <Button
          key={noteName}
          colorScheme="red"
          onClick={() => onClick(noteName)}
        >
          {noteName}
        </Button>
      ))}
    </SimpleGrid>
  );
};

export default Keyboard;
