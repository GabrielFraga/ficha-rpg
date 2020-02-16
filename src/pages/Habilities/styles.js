import styled from 'styled-components/native';

export const FlexLabel = styled.Text`
  flex-basis: 20%;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
export const FixedInput = styled.TextInput`
  flex-basis: 15%;
  opacity: ${props => (props.editable ? 1 : 0.5)};
  background: #823b38a8;
  color: #fff;
  border: 1px solid #b58886;
  margin: 5px;
  border-radius: 4px;
  text-align: center;
`;

export const FinalValue = styled.Text`
  color: #d8c203;
  font-weight: bold;
  font-size: 16px;
`;

export const Text = styled.Text`
  flex: 1;
  color: #333;
`;
