import React from 'react';
import {
  Center,
  NativeBaseProvider,
  Stack,
  Button,
  Container,
  Heading,
  Text,
} from 'native-base';

function ImgUploadExample() {
  return (
      <NativeBaseProvider>
        <Center>
          <Container>
            <Heading
              size="md"
              fontSize={30}
              mt="15%"
              italic
              color="#192a56"
              mx="auto"
              shadow="9">
              Hello, Welcome to{' '}
            </Heading>
            <Heading mt="0.5%" size="xl">
              <Text
                color="emerald.600"
                alignContent="center"
                fontSize={40}
                shadow="9">
                DemoMobileApp
              </Text>
            </Heading>
          </Container>
          <Stack space={6} w="85%" maxW="400px" mx="auto">
            <Button
              variant="solid"
              size="lg"
              colorScheme="darkBlue"
              mt="10%"
              borderRadius="10"
              shadow="9">
              Login
            </Button>
          </Stack>
        </Center>
      </NativeBaseProvider>
  );
}

export default ImgUploadExample;
