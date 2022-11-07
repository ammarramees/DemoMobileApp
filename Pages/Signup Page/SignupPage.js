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
  Alert,
} from 'native-base';
import React, {useState} from 'react';
import {MaterialIcons} from '@native-base/icons';
import auth from '@react-native-firebase/auth';

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
        .then(
          auth().currentUser.updateProfile({
            displayName: uname,
            phoneNumber: pnumber,
          }),
        )
        .then(() => {
          console.log('User account created & signed in!');
          Alert.alert('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            Alert.alert('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      console.error('Passwords do not match');
      Alert.alert('Passwords do not match');
    }
  };

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
            mx="auto">
            Hello, Welcome to{' '}
          </Heading>
          <Heading mt="0.5%" size="xl">
            <Text color="emerald.600" alignContent="center" fontSize={40}>
              DemoMobileApp
            </Text>
          </Heading>
        </Container>
        <Stack space={5} w="85%" maxW="400px" mx="auto" mt="10%">
          <HStack space={2} justifyContent="space-between">
            <Input
              size="lg"
              variant="outline"
              placeholder="First Name"
              justifyContent="flex-start"
              w="50%"
              value={fname}
              onChangeText={txt => {
                setFname(txt);
              }}
            />
            <Input
              size="lg"
              variant="outline"
              placeholder="Last Name"
              justifyContent="flex-end"
              w="50%"
              value={lname}
              onChangeText={txt => {
                setLname(txt);
              }}
            />
          </HStack>
          <HStack space={2} justifyContent="space-between">
            <Input
              size="lg"
              variant="outline"
              placeholder="Username"
              justifyContent="flex-start"
              w="50%"
              value={uname}
              onChangeText={txt => {
                setUname(txt);
              }}
            />
            <Input
              size="lg"
              variant="outline"
              placeholder="Phone Number"
              justifyContent="flex-end"
              w="50%"
              value={pnumber}
              onChangeText={txt => {
                setPnum(txt);
              }}
            />
          </HStack>
          <Input
            size="lg"
            variant="outline"
            placeholder="Email Address"
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
            variant="outline"
            placeholder="Password"
            value={password}
            onChangeText={txt => {
              setPassword(txt);
            }}
          />
          {/* <Input
            size="lg"
            variant="outline"
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
            variant="outline"
            placeholder=" Confirm Password"
            value={passwordagain}
            onChangeText={txt => {
              setPasswordagain(txt);
            }}
          />
          {/* <Input
            size="lg"
            variant="outline"
            placeholder="Confirm Password"
            value={passwordagain}
            onChangeText={txt => {
              setPasswordagain(txt);
            }}
          /> */}
          <Checkbox size="sm" value="one" justifyContent="flex-start" ml="2.5">
            Agree to terms and conditions
          </Checkbox>
          <Button
            variant="solid"
            size="lg"
            colorScheme="amber"
            mt="5%"
            onPress={register}>
            Create Account
          </Button>
          <HStack space={3} justifyContent="center">
            <Text fontSize="md">Already have an account?</Text>
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
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default SignupPage;
