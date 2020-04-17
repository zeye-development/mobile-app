import React from 'react';
import styled from 'styled-components/native';

export const Separator = () => <SeparatorItem />;

const SeparatorItem = styled.View`
  height: 1px;
  width: 100%;
  background-color: #f2f2f2;
  margin: 10px 0;
`;