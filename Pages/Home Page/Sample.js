import React from 'react'
import { Center, Container, NativeBaseProvider, HStack, Divider, Heading } from 'native-base'

export default function Sample() {
  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <HStack space={3} justifyContent="center" mt="25%">
            <Divider
              width="30%"
              my="2"
              _light={{
                bg: 'muted.800',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
            <Heading size="sm" color="#192a56" mx="auto">
              or Login with
            </Heading>
            <Divider
              width="30%"
              my="2"
              _light={{
                bg: 'muted.800',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
          </HStack>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
}