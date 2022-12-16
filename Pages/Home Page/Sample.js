import React from 'react';
import {
  Center,
  Container,
  NativeBaseProvider,
  HStack,
  Divider,
  Heading,
  Stack,
  Button,
  Box,
} from 'native-base';
import {ImageBackground, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'react-native-svg';
import {useToast} from 'native-base';

export default function Sample() {
  return (
    <View>
      <ImageBackground
        source={require('../Img/gradient5.jpeg')}
        resizeMode="cover"
        style={{
          display: 'flex',
          height: '100%',
          opacity: 1,
        }}>
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
                <Heading size="sm" color="#e84118" mx="auto">
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
      </ImageBackground>
    </View>
  );
}

//Copy paste items

{
  /* <View style={{backgroundColor: '#cfcfcf', display: 'flex', height: '100%', }}></View> */
}

{
  /* <NativeBaseProvider>
    //   <Center>
    //     <Container>
    //       <HStack mt="30%" space={4} alignItems="center">
    //         <Icon
    //           name="person-outline"
    //           size={45}
    //           color="#be123c"
    //           style={{
    //             marginTop: '2%',
    //           }}
    //         />
    //         <Stack>
    //           <Heading
    //             size="xl"
    //             fontSize={30}
    //             color="rose.500"
    //             mx="auto"
    //             shadow="9"
    //             italic>
    //             Add New Record
    //           </Heading>
    //           <Heading
    //             size="xl"
    //             fontSize={20}
    //             color="rose.800"
    //             mx="auto"
    //             mt="-3%"
    //             shadow="9">
    //             {'           '}to your collection
    //           </Heading>
    //         </Stack>
    //       </HStack>
    //     </Container>
    //   </Center>
    // </NativeBaseProvider> */
}
