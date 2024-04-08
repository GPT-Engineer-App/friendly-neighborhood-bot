import { Box, Image, Heading, Text } from "@chakra-ui/react";

const RecipeCard = ({ title, description, imageUrl }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={title} />
      <Box p={6}>
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default RecipeCard;
