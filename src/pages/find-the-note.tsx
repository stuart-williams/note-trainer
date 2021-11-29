import { Heading, VStack } from "@chakra-ui/react";
import Fretboard from "components/Fretboard";
import { without } from "lodash";
import React, { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import simplur from "simplur";
import { ftnCountState, ftnGameSelector, ftnNoteState } from "state";
import { INote } from "types";

const FindTheNotePage: FC = () => {
  const targetNote = useRecoilValue(ftnNoteState);
  const [frettedNotes, updateGame] = useRecoilState(ftnGameSelector);
  const count = useRecoilValue(ftnCountState);
  const remaining = count - frettedNotes.length;

  const handleNoteClick = (note: INote) => {
    if (note.name === targetNote) {
      updateGame([...without(frettedNotes, note), note]);
    }
  };

  return (
    <VStack align="stretch" px={2}>
      <Fretboard frettedNotes={frettedNotes} onNoteClick={handleNoteClick} />
      <Heading alignSelf="center">
        {simplur`Find ${targetNote} in ${remaining} plac[e|es]`}
      </Heading>
    </VStack>
  );
};

export default FindTheNotePage;
