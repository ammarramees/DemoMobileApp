import {
  Center,
  Container,
  NativeBaseProvider,
  Heading,
  Text,
  Stack,
  Input,
  HStack,
  Checkbox,
  Button,
  Link,
  Icon,
  Pressable,
} from 'native-base';
import React, {useState} from 'react';
import {MaterialIcons} from '@native-base/icons';
import auth from '@react-native-firebase/auth';
import {Alert, View, ImageBackground} from 'react-native';

function SignupPage() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [uname, setUname] = useState('');
  const [pnumber, setPnum] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordagain, setPasswordagain] = useState('');

  const [show, setShow] = React.useState(false);

  const register = async () => {
    if (password == passwordagain) {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          auth().currentUser.updateProfile({
            displayName: uname,
            phoneNumber: pnumber,
          });
        })
        .then(() => {
          console.log('User account created & signed in!');
          Alert.alert('User account created & signed in!');
          clearAll();
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            Alert.alert('That email address is already in use!');
            clearEM();
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            Alert.alert('That email address is invalid!');
            clearEM();
          }

          console.error(error);
          clearAll();
        });
    } else {
      console.error('Passwords do not match');
      Alert.alert('Passwords do not match');
      clearPW();
    }
  };

  function clearAll() {
    setFname('');
    setLname('');
    setUname('');
    setPnum('');
    setEmail('');
    setPassword('');
    setPasswordagain('');
  }

  function clearEM() {
    setEmail('');
  }

  function clearPW() {
    setPassword('');
    setPasswordagain('');
  }

  return (
    <View>
      <ImageBackground
        source={require('../Img/gradient3.jpeg')}
        resizeMode="cover"
        style={{
          display: 'flex',
          height: '100%',
          opacity: 1,
        }}>
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
            <Stack space={5} w="85%" maxW="400px" mx="auto" mt="15%">
              <HStack space={2} justifyContent="space-between">
                <Input
                  size="lg"
                  variant="filled"
                  placeholder="First Name"
                  justifyContent="flex-start"
                  w="49%"
                  borderRadius="10"
                  borderColor="emerald.200"
                  value={fname}
                  onChangeText={txt => {
                    setFname(txt);
                  }}
                />
                <Input
                  size="lg"
                  variant="filled"
                  placeholder="Last Name"
                  justifyContent="flex-end"
                  w="49%"
                  borderRadius="10"
                  borderColor="emerald.200"
                  value={lname}
                  onChangeText={txt => {
                    setLname(txt);
                  }}
                />
              </HStack>
              <HStack space={2} justifyContent="space-between">
                <Input
                  size="lg"
                  variant="filled"
                  placeholder="Username"
                  justifyContent="flex-start"
                  w="49%"
                  borderRadius="10"
                  borderColor="emerald.200"
                  value={uname}
                  onChangeText={txt => {
                    setUname(txt);
                  }}
                />
                <Input
                  size="lg"
                  variant="filled"
                  placeholder="Phone Number"
                  justifyContent="flex-end"
                  w="49%"
                  borderRadius="10"
                  borderColor="emerald.200"
                  value={pnumber}
                  onChangeText={txt => {
                    setPnum(txt);
                  }}
                />
              </HStack>
              <Input
                size="lg"
                variant="filled"
                placeholder="Email Address"
                borderRadius="10"
                borderColor="emerald.200"
                value={email}
                onChangeText={txt => {
                  setEmail(txt);
                }}
              />
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
                borderRadius="10"
                borderColor="emerald.200"
                value={password}
                onChangeText={txt => {
                  setPassword(txt);
                }}
              />
              {/* <Input
            size="lg"
            variant="filled"
            placeholder="Password"
            value={password}
            onChangeText={txt => {
              setPassword(txt);
            }}
          /> */}
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
                placeholder=" Confirm Password"
                borderRadius="10"
                borderColor="emerald.200"
                value={passwordagain}
                onChangeText={txt => {
                  setPasswordagain(txt);
                }}
              />
              {/* <Input
            size="lg"
            variant="filled"
            placeholder="Confirm Password"
            value={passwordagain}
            onChangeText={txt => {
              setPasswordagain(txt);
            }}
          /> */}
              <Checkbox
                size="sm"
                value="one"
                justifyContent="flex-start"
                ml="2.5"
                shadow="9"
                mt="0%">
                Agree to terms and conditions
              </Checkbox>
              <Button
                variant="solid"
                size="lg"
                colorScheme="emerald"
                mt="15%"
                borderRadius="10"
                shadow="9"
                onPress={register}>
                Create Account
              </Button>
              <HStack space={3} justifyContent="center" mt="-2%">
                <Text fontSize="md" shadow="9">
                  Already have an account?
                </Text>
                <Link
                  shadow="9"
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
                  Login
                </Link>
              </HStack>
            </Stack>
          </Center>
        </NativeBaseProvider>
      </ImageBackground>
    </View>
  );
}

export default SignupPage;
