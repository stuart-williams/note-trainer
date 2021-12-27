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

const AnswerIndicator: FC = () => {
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
    <Fade unmountOnExit in={indicator > -1}>
      <Mask bg={!ref.current ? "red.500" : "green.500"}>
        <Icon
          color="white"
          boxSize="6em"
          as={!ref.current ? IncorrectIcon : CorrectIcon}
        />
      </Mask>
    </Fade>
  );
};

export default AnswerIndicator;
