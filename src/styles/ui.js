import styled from 'styled-components/native';

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