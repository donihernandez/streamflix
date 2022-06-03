import type { FC } from 'react';
import { Flex, Heading, Text, chakra } from '@chakra-ui/react';

import { COLORS } from '../../../styles/theme';

const Welcome: FC = () => {
  return (
    <Flex direction="column" m="200px 0 80px 0" w="600px">
      <Heading
        fontSize={{ base: 'lg', lg: '8xl' }}
        fontFamily="Lato"
        color={COLORS.white}
        as="h1"
      >
        Welcome to Fun <chakra.span color={COLORS.orange}>Reviews</chakra.span>!
      </Heading>
      <Text color="white" fontSize="4xl" fontFamily="Nunito">
        The most completed and fun reviews platform for movies and tv shows.
      </Text>
    </Flex>
  );
};

export { Welcome };
