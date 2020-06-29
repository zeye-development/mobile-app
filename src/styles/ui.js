import styled from 'styled-components/native';

/**
 * @param {string} fontFamily - Font Family Text
 */
export const Input = styled.TextInput`
  font-size: 16px;
  padding: 13px 33px;
  border-width: 2px;
  border-color: transparent;
  font-family: ${props => props.fontFamily || 'PoppinsRegular'};  
`;

export const Btn = styled.View`
  border-radius: 15px;
  margin: 15px 0;
  align-items: stretch;
  background-color: #fff;
`;

/**
 * @param {string} color      - Color Text
 * @param {string} fontFamily - Font Family Text
 */
export const TextBtn = styled.Text`
  color: ${props => props.color || '#FFF'};
  font-family: ${props => props.fontFamily || 'PoppinsRegular'};  
  font-size: 16px;
  padding: 13px;
  text-align: center;
`;

/**
 * @param {string} color      - Color Text
 * @param {string} fontFamily - Font Family Text
 * @param {string} fontSize   - Font Size Text
 */
export const Text = styled.Text`
  color: ${props => props.color || '#FFF'};
  font-family: ${props => props.fontFamily || 'PoppinsRegular'};
  font-size: ${props => props.fontSize || '16px'};
  text-align: center;
`;

// Modal
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