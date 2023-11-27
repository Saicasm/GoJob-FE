// Chakra imports
import { Flex, useColorModeValue, Text } from '@chakra-ui/react';

// Custom components
import { HorizonLogo, StatsIcon } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      <StatsIcon h="26px" w="175px" my="32px" color={logoColor} />
      <Text
        mb="36px"
        ms="4px"
        color="accent.primary"
        fontWeight="400"
        fontSize="lg"
      >
        Web Scraper
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
