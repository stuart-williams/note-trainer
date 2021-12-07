import {
  Container,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Select,
  Switch,
  VStack,
} from "@chakra-ui/react";
import Card from "components/Card";
import * as config from "config";
import { map } from "lodash";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import { fretboardIdState, halfNotesState, leftHandedState } from "state";
import { IFretboardId, IHalfNotes } from "types";

const FretboardSelect = () => {
  const [value, setValue] = useRecoilState(fretboardIdState);

  return (
    <FormControl>
      <FormLabel>Fretboard</FormLabel>
      <Select
        value={value}
        onChange={(event) => setValue(event.target.value as IFretboardId)}
      >
        {map(config.fretboards, (fretboard) => (
          <option key={fretboard.id} value={fretboard.id}>
            {fretboard.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

const LeftHanded = () => {
  const [isChecked, setChecked] = useRecoilState(leftHandedState);

  return (
    <FormControl>
      <FormLabel>Left Handed</FormLabel>
      <Switch
        isChecked={isChecked}
        onChange={(event) => setChecked(event.target.checked)}
      />
    </FormControl>
  );
};

const HalfNotes = () => {
  const [value, setValue] = useRecoilState(halfNotesState);

  return (
    <FormControl>
      <FormLabel>Half Notes</FormLabel>
      <RadioGroup
        value={value}
        onChange={(value) => setValue(value as IHalfNotes)}
      >
        <HStack>
          <Radio value="sharps">Sharps</Radio>
          <Radio value="flats">Flats</Radio>
          <Radio value="random">Random</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export const SettingsPage: FC = () => (
  <Container>
    <VStack as={Card} spacing={6}>
      <FretboardSelect />
      <LeftHanded />
      <HalfNotes />
    </VStack>
  </Container>
);

export default SettingsPage;
