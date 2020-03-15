import styled from 'styled-components/native';
import { InputBox, Label } from '../../components/Global/styles';

export const FixedSizedColumn = styled.View`
  flex: 1;
  flex-basis: 25%;
`;

export const FixedSizedLabel = styled(Label)`
  flex: 1;
  margin: 5px;
  flex-basis: 20%;
  /* flex-wrap: nowrap; */
  /* text-align: center; */
`;

export const NoFlexInputBox = styled(InputBox)`
  flex: 0;
`;
