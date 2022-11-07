import React from 'react';
import {
  Center,
  Container,
  Heading,
  NativeBaseProvider,
  Button,
  Text,
  Input,
  Stack,
  Checkbox,
  Link,
  HStack,
} from 'native-base';

function LoginPage() {
  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Heading
            size="md"
            fontSize={30}
            mt="30%"
            italic
            color="#192a56"
            mx="auto">
            Hello, Welcome to{' '}
          </Heading>
          <Heading mt="0.5%" size="xl">
            <Text color="emerald.600" alignContent="center" fontSize={40}>
              DemoMobileApp
            </Text>
          </Heading>
        </Container>
        <Stack space={6} w="85%" maxW="400px" mx="auto" mt="20%">
          <Input
            size="lg"
            variant="outline"
            placeholder="Username / Email Address"
          />
          <Input size="lg" variant="outline" placeholder="Password" />
          <HStack space={3} justifyContent="space-between">
            <Checkbox
              size="sm"
              value="one"
              justifyContent="flex-start"
              ml="2.5">
              Remember Me
            </Checkbox>
            <Link
              _text={{
                fontSize: 'md',
                _light: {
                  color: 'cyan.500',
                },
                color: 'cyan.300',
              }}
              href="#"
              isUnderlined
              _hover={{
                _text: {
                  _light: {
                    color: 'cyan.600',
                  },
                  color: 'cyan.400',
                },
              }}
              mr="2.5">
              Forgot Password?
            </Link>
          </HStack>
          <Button variant="solid" size="lg" colorScheme="darkBlue" mt="15%">
            Login
          </Button>
        </Stack>
        <HStack space={3} justifyContent="center" mt="3%">
          <Text fontSize="md">Don't have an account?</Text>
          <Link
            _text={{
              fontSize: 'md',
              _light: {
                color: 'cyan.500',
              },
              color: 'cyan.300',
            }}
            href="#"
            isUnderlined
            _hover={{
              _text: {
                _light: {
                  color: 'cyan.600',
                },
                color: 'cyan.400',
              },
            }}>
            Click here
          </Link>
        </HStack>
      </Center>
    </NativeBaseProvider>
  );
}

export default LoginPage;
