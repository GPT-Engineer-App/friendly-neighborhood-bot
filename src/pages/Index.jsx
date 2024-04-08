import { Box, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Box maxW="container.lg" mx="auto" py={8}>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <RecipeCard title="Pasta Carbonara" description="Classic Italian pasta dish with a creamy sauce" imageUrl="https://example.com/carbonara.jpg" />
          <RecipeCard title="Chicken Tikka Masala" description="Popular Indian curry with grilled chicken in a spiced tomato sauce" imageUrl="https://example.com/tikka-masala.jpg" />
          <RecipeCard title="Chocolate Chip Cookies" description="Soft and chewy cookies studded with chocolate chips" imageUrl="https://example.com/cookies.jpg" />
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
