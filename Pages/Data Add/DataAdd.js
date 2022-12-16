import {View, ImageBackground, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  Center,
  Container,
  Heading,
  NativeBaseProvider,
  Button,
  Input,
  Stack,
  HStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';

function DataAdd() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const saveData = async () => {
    await firestore()
      .collection('Students')
      .add({
        Name: name,
        EmailAddress: email,
        ContactNumber: number,
        Age: age,
        Address: address,
      })
      .then(() => {
        console.log('User added!');
        Alert.alert('Student Info Successfully Saved');
        clearAll();
      })
      .catch(err => {
        console.error(err);
        Alert.alert("Couldn't Save Details, Please Try Again");
      });
  };

  function clearAll() {
    setName('');
    setEmail('');
    setNumber('');
    setAge('');
    setAddress('');
  }

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
              <HStack mt="30%" space={4} alignItems="center">
                <Icon
                  name="person-add-outline"
                  size={45}
                  color="#be123c"
                  style={{
                    marginTop: '2%',
                  }}
                />
                <Stack>
                  <Heading
                    size="xl"
                    fontSize={30}
                    color="rose.500"
                    mx="auto"
                    shadow="9"
                    italic>
                    Add New Record
                  </Heading>
                  <Heading
                    size="xl"
                    fontSize={20}
                    color="rose.800"
                    mx="auto"
                    mt="-3%"
                    shadow="9">
                    {'           '}to your collection
                  </Heading>
                </Stack>
              </HStack>
            </Container>
            <Stack space={6} w="85%" maxW="400px" mx="auto" mt="20%">
              <Input
                size="lg"
                variant="filled"
                placeholder="Full Name"
                
                value={name}
                borderRadius="10"
                borderColor="rose.300"
                shadow="9"
                onChangeText={txt => {
                  setName(txt);
                }}
              />
              <Input
                size="lg"
                variant="filled"
                placeholder="Email Address"
                value={email}
                borderRadius="10"
                borderColor="rose.300"
                shadow="9"
                onChangeText={txt => {
                  setEmail(txt);
                }}
              />
              <HStack space={2} justifyContent="space-between">
                <Input
                  size="lg"
                  variant="filled"
                  placeholder="Contact Number"
                  justifyContent="flex-start"
                  w="49%"
                  borderRadius="10"
                  shadow="9"
                  borderColor="rose.300"
                  value={number}
                  onChangeText={txt => {
                    setNumber(txt);
                  }}
                />
                <Input
                  size="lg"
                  variant="filled"
                  placeholder="Age"
                  justifyContent="flex-end"
                  w="49%"
                  borderRadius="10"
                  shadow="9"
                  borderColor="rose.300"
                  value={age}
                  onChangeText={txt => {
                    setAge(txt);
                  }}
                />
              </HStack>
              <Input
                size="lg"
                variant="filled"
                placeholder="Address"
                value={address}
                borderRadius="10"
                shadow="9"
                borderColor="rose.300"
                onChangeText={txt => {
                  setAddress(txt);
                }}
              />
              <Button
                variant="solid"
                size="lg"
                colorScheme="rose"
                mt="15%"
                borderRadius="10"
                shadow="9"
                onPress={saveData}>
                Save Student Info
              </Button>
            </Stack>
          </Center>
        </NativeBaseProvider>
      </ImageBackground>
    </View>
  );
}

export default DataAdd;

// const deleteData = async () => {
//   await firestore()
//     .collection('Students')
//     .doc('')
//     .delete()
//     .then(() => {
//       console.log('User deleted!');
//       Alert.alert('Student Data Deleted Successfully');
//     });
// };

// const updateData = async () => {
//   firestore()
//     .collection('Sudents')
//     .doc('')
//     .update({
//       age: 31,
//     })
//     .then(() => {
//       console.log('User updated!');
//       Alert.alert('Student Data Successfully Updated');
//     });
// };