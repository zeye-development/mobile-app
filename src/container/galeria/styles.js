import styled from 'styled-components/native';

export const ContainerTransparent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 66, 90, 0.5);
`;

export const TextHeaderModal = styled.Text`
  font-size: 18px;
  color: #00425A;
  text-align: center;
  font-family: 'PoppinsBold';
`;
// TODO
// textShadowRadius: 2,

export const TextConfirmModal = styled.Text`
  font-size: 16px;
  color: #01B8E2;
  text-align: right;
  font-family: 'PoppinsRegular';
  margin: 40px 20px;
`;