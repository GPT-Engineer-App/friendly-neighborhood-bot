import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" color="white" fontSize="xl">
          My Recipe Blog
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/recipes" color="white" ml={4}>
          Recipes
        </Link>
        <Link as={RouterLink} to="/about" color="white" ml={4}>
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
