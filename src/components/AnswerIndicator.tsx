import { Center, chakra, Fade, Icon } from "@chakra-ui/react";
import React, { FC, useEffect, useRef } from "react";
import {
  AiOutlineCheck as CorrectIcon,
  AiOutlineClose as IncorrectIcon,
} from "react-icons/ai";
import { useMountedState } from "react-use";
import { useRecoilState } from "recoil";
import { answerIndicatorState } from "state";
import { IBinary } from "types";

const Mask = chakra(Center, {
  baseStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    position: "absolute",
  },
});

interface Props {
  indicateStates?: IBinary[];
}

const AnswerIndicator: FC<Props> = ({ indicateStates = [0, 1] }) => {
  const isMounted = useMountedState();
  const [indicator, setIndicator] = useRecoilState(answerIndicatorState);

  const ref = useRef<IBinary>(0);
  ref.current = (indicator > -1 ? indicator : ref.current) as IBinary;

  useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        setIndicator(-1);
      }
    }, 250);
  }, [indicator]);

  return (
    <Fade unmountOnExit in={indicateStates.includes(indicator as IBinary)}>
      <Mask bg={!ref.current ? "red.500" : "green.500"}>
        <Icon
          boxSize={40}
          color="white"
          as={!ref.current ? IncorrectIcon : CorrectIcon}
        />
      </Mask>
    </Fade>
  );
};

export default AnswerIndicator;
