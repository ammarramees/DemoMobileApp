// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
// } from 'react-native';
// import {Input, NativeBaseProvider, Slider, Box} from 'native-base';

// function HomePageDemo() {
//   const [text, setText] = useState('');

//   const getText = () => {
//     console.log(text);
//   };

//   useEffect(() => {
//     console.log('this is useEffect test');
//   }, []);

//   return (
//     <View style={style1.main}>
//       <Text>HomePage</Text>

//       <Image
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//         style={{width: 50, height: 50}} //inline styling
//       />

//       <TextInput
//         value={text}
//         onChangeText={e => {
//           setText(e);
//         }}
//         style={style1.text_inp}
//         placeholder="Enter Your Name"
//       />

//       <Button
//         style={style1.btn}
//         title="Click Me" //styles wont work on react native button component
//         color={'#EA2027'}
//         //onPress={console.log('pressed')}
//       />

//       <TouchableOpacity style={style1.btn} onPress={getText}>
//         <Text>Click Me</Text>
//       </TouchableOpacity>

//       <NativeBaseProvider>
//         <Box>
//           <Input
//             variant="rounded"
//             placeholder="Email ID"
//             my={50}
//             height={10}
//             marginLeft={10}
//             marginRight={10}
//           />
//           <Input
//             variant="rounded"
//             placeholder="Password"
//             my={50}
//             height={10}
//             marginLeft={10}
//             marginRight={10}
//           />
//           <Slider
//             w="3/4"
//             maxW="300"
//             defaultValue={70}
//             minValue={0}
//             maxValue={100}
//             accessibilityLabel="hello world"
//             step={10}>
//             <Slider.Track>
//               <Slider.FilledTrack />
//             </Slider.Track>
//             <Slider.Thumb />
//           </Slider>
//         </Box>
//       </NativeBaseProvider>
//     </View>
//   );
// }

// const style1 = StyleSheet.create({
//   text_inp: {
//     //width: "80%",
//     borderColor: 'red',
//     backgroundColor: '#0652DD',
//     height: 40,
//     margin: 12,
//     marginTop: '12%',
//     marginBottom: '12%',
//     borderWidth: 1,
//     padding: 10,
//   },
//   main: {
//     backgroundColor: '#009432',
//   },
//   btn: {
//     //styles wont work on react native button component
//     width: '70%',
//     height: 50,
//     backgroundColor: '#FA5C98',
//     borderRadius: 90,
//     marginLeft: '20%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     marginTop: 5,
//     marginBottom: 5,
//   },
// });

// export default HomePageDemo;
