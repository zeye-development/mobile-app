import styled from 'styled-components/native';

export const Btn = styled.View`
  border-radius: 15px;
  margin: 15px 0;
  align-items: stretch;
  background-color: #fff;
`;

/**
 * @param {string} color - Color Text
 * @param {string} fontFamily - Font Family Text 
 */
export const TextBtn = styled.Text`
  font-size: 16px;
  padding: 13px;
  color: ${props => props.color || '#fff'};
  text-align: center;
  font-family: ${props => props.fontFamily || 'PoppinsRegular'};
`;