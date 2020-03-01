import styled from 'styled-components/native';

export const ModalView = styled.View`
  background: #823b38a8;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ModalHabilitiesRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ModalFlexLabel = styled.Text`
  flex-basis: 10%;
  color: #d8c203;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
`;

export const ModalFixedInput = styled.TextInput`
  flex-basis: 10%;
  opacity: ${props => (props.editable ? 1 : 0.5)};
  background: #823b38a8;
  color: #fff;
  border: 1px solid #b58886;
  margin: 5px;
  border-radius: 4px;
  text-align: center;
`;

export const BigTitle = styled.Text`
  color: #d8c203;
  font-weight: bold;
  font-size: 20px;
  height: 50px;
`;

export const Text = styled.Text`
  flex: 1;
  color: #fff;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin: 0 5px;
`;
