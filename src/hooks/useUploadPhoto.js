import { useEffect, useState } from "react"

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from "expo-camera"

const useUploadPhoto = () => {

  const [image, setImage] = useState(null)
  const [base64, setBase64] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [hasCameraPermission, setHasCameraPermission] = useState(false)
  const [modalVisibleAlert, setModalVisibleAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState('')
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)
  const [autoFocus, setAutoFocus] = useState(Camera.Constants.AutoFocus.on)
  const [zoom, setZoom] = useState(0)
  const [whiteBalance, setWhiteBalance] = useState(Camera.Constants.WhiteBalance.auto)
  const [focusDepth, setFocusDepth] = useState(0)
  const [ratio, setRatio] = useState('4:3')
  const [estadocamara, setEstadocamara] = useState(true)
  const [modalLoading, setModalLoading] = useState(false)


  // get permission
  useEffect(() => {
    getPermissions()
  },[])

  const getPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      console.log('Status', status);
      // this.setState({ hasCameraPermission: status === 'granted' });
      setHasCameraPermission(status === 'granted')

      // if (status !== 'granted') {
      //   this.setState({
      //     mensajeAlert: 'Es posible que desee habilitar la cámara en la configuración de su teléfono',
      //     modalVisibleAlert: true
      //   })
      // }
    } catch (err) {
      console.log('err', err);
    }
  }

  const _pickImage = async () => {
    const options = { quality: 0.1, base64: true, allowsEditing:true  };
    let result = await ImagePicker.launchImageLibraryAsync(options);

    console.log('Result', result);
    if (!result.cancelled) {
      setBase64(result.base64)
      setImage(result.uri)
    }
  };

  const _takePictureButtonPressed = () => {

  }

  return {
    // permissions
    hasCameraPermission,
    // 
    base64,
    image,
    messageAlert,
    modalVisibleAlert,
    // methods
    getPermissions,
    _pickImage
  }
}

export default useUploadPhoto