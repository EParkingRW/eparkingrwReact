import { Flex, Heading, Text, Button, Stack } from '@chakra-ui/core';
import Default, { getLayout } from '../layouts/default';
import { MY_APP } from '../utils/constants';


const Home_ = () => {
  return (
    <Flex direction="column" justify="center" align="center">
      <Heading
        as="h1"
        mb={2}
        size="2xl"
        fontStyle="italic"
        fontWeight="extrabold"
      >
        {MY_APP}
      </Heading>

      <Button
        as="a"
        href="/login"
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        maxW="200px"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Login
      </Button>
    </Flex>
  );
};
const Home = () => {
    return <Default>
        <Home_/>
    </Default>
}


// Home.getLayout = getLayout;

export default Home;
