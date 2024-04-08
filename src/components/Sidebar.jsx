import { Button, VStack } from "@chakra-ui/react";
import { FaUsers, FaLayerGroup, FaBuilding, FaFileContract } from "react-icons/fa";

const Sidebar = () => {
  return (
    <VStack bg="gray.100" p={4} spacing={4} align="stretch" borderRight="1px" borderColor="gray.200">
      <Button leftIcon={<FaUsers />}>Users</Button>
      <Button leftIcon={<FaLayerGroup />}>Groups</Button>
      <Button leftIcon={<FaBuilding />}>Companies</Button>
      <Button leftIcon={<FaFileContract />}>Contracts</Button>
    </VStack>
  );
};

export default Sidebar;
