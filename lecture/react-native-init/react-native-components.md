import { View, Text, Image, TextInput, Pressable } from 'react-native'
// import React, { useState } from 'react'

// const index = () => {
//   const [name, setName] = useState("")

//   return (
//     <View>
//       <Text numberOfLines={2}>
//         Hello, world! This is vishal from my side.
//       </Text>

//       {/* Image from the internet */}
//       <Image
//         source={{
//           uri: "https://chaicode.com/assets/hitesh-suraj-dark-CKHA9jfT.webp"
//         }}
//         width={200}
//         height={200}
//       />
//       {/* Image from local */}
//       <Image
//         source={require("@/assets/images/icon.png")}
//         style={{
//           height: 100,
//           width: 100
//         }}
//         blurRadius={30}
//       />

//       <TextInput
//         placeholder='enter your name'
//         value={name}
//         onChangeText={setName}
//         placeholderTextColor={"blue"}
//         style={{
//           borderWidth: 1,
//           borderColor: "#111",
//           marginTop: 10,
//           fontSize: 24
//         }}
//       />

//       <Pressable
//         onPress={() => alert("Button Pressed")}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
//         })}
//       >
//         {({ pressed }) => pressed ? <Text>Processing...</Text> : <Text>Press me</Text>}
//       </Pressable>

//     </View>
//   )
// }

// export default index
