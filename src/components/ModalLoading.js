import React from "react";
import { Text, Modal, View, ActivityIndicator } from "react-native";
import styled from 'styled-components/native';

export default function ModalLoading({ modalLoading = false }) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalLoading}
    >
      <ModalView />
      <View
        style={{
          position: 'absolute',
          top: '45%',
          left: '45%'
        }}
      >
        { modalLoading ? 
          <ActivityIndicator size={30} color="#fff" /> : null
        }
      </View>
    </Modal>
  );
}

const ModalView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 66, 90, 0.5);
`;