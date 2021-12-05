import {
  Container,
  FormControl,
  FormLabel,
  Select,
  SelectProps,
  Switch,
  VStack,
} from "@chakra-ui/react";
import Card from "components/Card";
import * as config from "config";
import { map } from "lodash";
import React, { FC } from "react";
import { useRecoilState } from "recoil";
import { fretboardIdState, leftHandedState } from "state";
import { IFretboardId } from "types";

const FretboardSelect = () => {
  const [fretboardId, setFretboardId] = useRecoilState(fretboardIdState);

  const handleChange: SelectProps["onChange"] = (event) => {
    setFretboardId(event.target.value as IFretboardId);
  };

  return (
    <FormControl>
      <FormLabel>Fretboard</FormLabel>
      <Select value={fretboardId} onChange={handleChange}>
        {map(config.fretboards, (fretboard) => (
          <option key={fretboard.id} value={fretboard.id}>
            {fretboard.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

const LeftHandedMode = () => {
  const [leftHanded, setLeftHanded] = useRecoilState(leftHandedState);

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="left-handed" mb="0">
        Left Handed Mode
      </FormLabel>
      <Switch
        id="left-handed"
        isChecked={leftHanded}
        onChange={(event) => setLeftHanded(event.target.checked)}
      />
    </FormControl>
  );
};

export const SettingsPage: FC = () => (
  <Container>
    <VStack as={Card} spacing={6}>
      <FretboardSelect />
      <LeftHandedMode />
    </VStack>
  </Container>
);

export default SettingsPage;
