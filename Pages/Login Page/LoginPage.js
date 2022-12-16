import React, {useState} from 'react';
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
  Pressable,
  Icon,
  Divider,
} from 'native-base';
import {MaterialIcons} from '@native-base/icons';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {View, ImageBackground} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '795084428389 - dc5thj7bj1o68vo25u6m5lh4cfq7iq5o.apps.googleusercontent.com',
});

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = React.useState(false);

  const login = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        clearAll();
      })
      .catch(err => {
        console.log(err);
        clearPW();
      });
  };

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        console.log(res);
        clearAll();
      });
  };

  function clearAll() {
    setEmail('');
    setPassword('');
  }

  function clearPW() {
    setPassword('');
  }

  return (
    <View>
      <ImageBackground
        source={require('../Img/gradient4.jpeg')}
        resizeMode="cover"
        style={{
          display: 'flex',
          height: '100%',
          opacity: 1,
        }}>
        <NativeBaseProvider>
          <Center>
            <Container>
              <Stack>
                <Heading
                  size="md"
                  fontSize={30}
                  mt="25%"
                  italic
                  color="#192a56"
                  mx="auto"
                  shadow="9">
                  Hi, Welcome back!{' '}
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
              </Stack>
            </Container>
            <Stack space={6} w="85%" maxW="400px" mx="auto" mt="15%">
              {/* <Input
                size="lg"
                variant="filled"
                placeholder="Username / Email Address"
                value={email}
                borderRadius="10"
                borderColor="darkBlue.300"
                onChangeText={txt => {
                  setEmail(txt);
                }}
              /> */}
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                size="lg"
                variant="filled"
                placeholder="Username / Email Address"
                value={email}
                borderRadius="10"
                borderColor="darkBlue.300"
                onChangeText={txt => {
                  setEmail(txt);
                }}
              />
              {/* <Input size="lg" variant="outline" placeholder="Password" /> */}
              <Input
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                size="lg"
                variant="filled"
                placeholder="Password"
                value={password}
                borderRadius="10"
                borderColor="darkBlue.300"
                onChangeText={txt => {
                  setPassword(txt);
                }}
              />
              <HStack space={3} justifyContent="space-between">
                <Checkbox
                  size="sm"
                  value="one"
                  justifyContent="flex-start"
                  ml="2.5"
                  shadow="9">
                  Remember Me
                </Checkbox>
                <Link
                  _text={{
                    fontSize: 'md',
                    _light: {
                      color: '#192a56',
                    },
                    color: '#192a56',
                  }}
                  href="#"
                  isUnderlined
                  _hover={{
                    _text: {
                      _light: {
                        color: '#192a56',
                      },
                      color: '#192a56',
                    },
                  }}
                  mr="2.5"
                  shadow="9">
                  Forgot Password?
                </Link>
              </HStack>
              <Button
                variant="solid"
                size="lg"
                colorScheme="darkBlue"
                mt="5%"
                borderRadius="10"
                shadow="9"
                onPress={login}>
                Login
              </Button>
            </Stack>
            <HStack space={3} justifyContent="center" mt="10%">
              <Divider
                width="25%"
                my="2"
                _light={{
                  bg: 'muted.800',
                }}
                _dark={{
                  bg: 'muted.50',
                }}
              />
              <Heading size="sm" color="#192a56" mx="auto" shadow="9">
                Or Login with
              </Heading>
              <Divider
                width="25%"
                my="2"
                _light={{
                  bg: 'muted.800',
                }}
                _dark={{
                  bg: 'muted.50',
                }}
              />
            </HStack>
            <Stack
              space={2}
              w="85%"
              maxW="400px"
              mx="auto"
              mt="5%"
              alignItems={'center'}
              shadow="9">
              <GoogleSigninButton
                style={{width: '95%', height: 55}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={onGoogleButtonPress}
                maxW="400px"
                mx="auto"
              />
            </Stack>
            <HStack space={3} justifyContent="center" mt="3%">
              <Text fontSize="md" shadow="9">
                Don't have an account?
              </Text>
              <Link
                shadow="9"
                _text={{
                  fontSize: 'md',
                  _light: {
                    color: '#192a56',
                  },
                  color: '#192a56',
                }}
                href="#"
                isUnderlined
                _hover={{
                  _text: {
                    _light: {
                      color: '#192a56',
                    },
                    color: '#192a56',
                  },
                }}>
                Sign Up
              </Link>
            </HStack>
          </Center>
        </NativeBaseProvider>
      </ImageBackground>
    </View>
  );
}

export default LoginPage;
