import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets

// Custom components

import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import FetchTableData from "../../../api/GetAllTables";
import FetchDishesCategory from "../../../api/GetDishCategory";
import FetchDrinksCategory from "../../../api/GetDrinkCategory";

import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justifyContent="space-between" align="start" p="4" gap="20px">
        <FetchTableData />
        <FetchDishesCategory />
        <FetchDrinksCategory />
      </Flex>
    </Box>
  );
}
