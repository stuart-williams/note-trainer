import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Card from "components/Card";
import React, { FC, useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { gameStatsState } from "state";

const StatisticsPage: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const stats = useRecoilValue(gameStatsState);
  const resetStats = useResetRecoilState(gameStatsState);

  const handleResetClick = () => {
    resetStats();
    onClose();
  };

  return (
    <Container>
      <VStack as={Card} align="stretch">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Game</Th>
              <Th isNumeric>✅</Th>
              <Th isNumeric>Total</Th>
              <Th isNumeric>%</Th>
            </Tr>
          </Thead>
          <Tbody>
            {stats.map(({ game, correct, attempts, percent }) => (
              <Tr key={game}>
                <Td>{game}</Td>
                <Td isNumeric>{correct}</Td>
                <Td isNumeric>{attempts}</Td>
                <Td isNumeric>{percent}%</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <AlertDialog
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          leastDestructiveRef={cancelRef}
        >
          <AlertDialogOverlay>
            <AlertDialogContent mx={4}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Reset Statistics
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure? This can't be undone.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  variant="outline"
                  colorScheme="blue"
                >
                  Cancel
                </Button>
                <Button
                  ml={2}
                  colorScheme="red"
                  variant="outline"
                  onClick={handleResetClick}
                >
                  Reset
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Button onClick={onOpen} colorScheme="red" variant="outline">
          Reset Statistics
        </Button>
      </VStack>
    </Container>
  );
};

export default StatisticsPage;
