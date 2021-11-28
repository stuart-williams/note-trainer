import { Button, Container, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";

const IndexPage: FC = () => (
  <Container as={VStack} align="stretch">
    <Button as={Link} to="/name-the-note">
      Name the Note
    </Button>
    <Button as={Link} to="/find-the-note">
      Find the Note
    </Button>
    <Button as={Link} to="/settings">
      Settings
    </Button>
    <Button as={Link} to="/statistics">
      Statistics
    </Button>
  </Container>
);

export default IndexPage;
