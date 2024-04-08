import { Box, Stack, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.100" py={10}>
      <Stack maxW="container.lg" mx="auto" direction={["column", "row"]} spacing={4} align="center">
        <Link href="#" isExternal>
          <FaTwitter />
        </Link>
        <Link href="#" isExternal>
          <FaFacebook />
        </Link>
        <Link href="#" isExternal>
          <FaInstagram />
        </Link>
      </Stack>
      <Box mt={8} textAlign="center">
        &copy; {new Date().getFullYear()} My Recipe Blog. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
