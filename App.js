import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import IMAGES from './src/Images/Index';

const App = () => {
  const [selectImage, setSelectImage] = useState();


  const [Img, setImg] = useState(false)

  const Imagepicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      setSelectImage(response.assets[0].uri)
      console.log(response)
    })
  }

  const launchCamerapicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchCamera(options, response => {
      setSelectImage(response.assets[0].uri)
      console.log(response)
    })
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'} />

      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>

        <View style={{ height: 254, width: '90%', alignSelf: 'center', borderWidth: 2, borderRadius: 22 }}>
          {
            Img == false ? <Image style={{ height: 250, width: '100%', alignSelf: 'center', borderRadius: 20 }} source={require("./src/Images/imgpicker.png")} />
              : <Image style={{ height: 250, width: '100%', alignSelf: 'center', borderRadius: 20 }} source={{ uri: selectImage }} />
          }

        </View>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 80 }}>
          <TouchableOpacity style={{
            backgroundColor: '#D0D0D0', height: 80, width: 80, alignSelf: 'center', borderRadius: 100, marginTop: 10, borderWidth: 1,
            borderColor: 'black'
          }}
            onPress={() => {
              Imagepicker(),
                setImg(true)
            }}>
            <Image source={IMAGES.imgpicker} style={{ height: 50, width: 50, alignSelf: 'center', marginTop: 15 }} />
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: '#D0D0D0', height: 80, width: 80, alignSelf: 'center', borderRadius: 100, marginTop: 10, borderWidth: 1,
            borderColor: 'black'
          }} onPress={() => { launchCamerapicker() }}
          >
            <Image source={IMAGES.camera} style={{ height: 50, width: 50, alignSelf: 'center', marginTop: 15 }} />
          </TouchableOpacity>


        </View>

      </SafeAreaView>

    </View>
  )
}
export default App 