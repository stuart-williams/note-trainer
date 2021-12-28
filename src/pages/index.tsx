import { Button, Container, VStack } from "@chakra-ui/react";
import Card from "components/Card";
import React, { FC } from "react";
import { Link } from "react-router-dom";

const IndexPage: FC = () => (
  <Container mt={4}>
    <VStack as={Card} align="stretch">
      <Button as={Link} colorScheme="blue" to="/name-the-note">
        Name the Note
      </Button>
      <Button as={Link} colorScheme="blue" to="/find-the-note">
        Find the Note
      </Button>
      <Button as={Link} colorScheme="blue" to="/fretboard-reference">
        Fretboard Reference
      </Button>
      <Button colorScheme="blue" as={Link} to="/settings">
        Settings
      </Button>
      <Button colorScheme="blue" as={Link} to="/statistics">
        Statistics
      </Button>
    </VStack>
  </Container>
);

export default IndexPage;
