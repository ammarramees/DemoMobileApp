import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList, NativeBaseProvider, Box, HStack, VStack, Spacer } from 'native-base';

function DataPage() {
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Students')
      .onSnapshot(querySnapshot => {
        const Students = [];

        querySnapshot.forEach(documentSnapshot => {
          Students.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setStudents(Students);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
      <NativeBaseProvider>
        <FlatList
          data={Students}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.800"
              pl={['0', '4']}
              pr={['0', '5']}
              py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.Name}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.EmailAddress}
                  </Text>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          )}
        />
      </NativeBaseProvider>
  );
}

export default DataPage;
