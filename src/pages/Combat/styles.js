import styled from 'styled-components/native';
import { InputBox, Label, Column } from '../../components/Global/styles';

export const FixedSizedLabel = styled(Label)`
  flex: 1;
  flex-basis: 20%;
  margin: 5px;
`;

export const NoFlexInputBox = styled(InputBox)`
  flex: 0;
`;
export const HalfPageColumn = styled(Column)`
  flex-basis: 50%;
`;
