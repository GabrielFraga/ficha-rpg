import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #1f1916;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.View`
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  color: #d8c203;
  font-weight: bold;
  font-size: 16px;
  margin: 0 5px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;

export const PickerView = styled.View`
  flex: 1;
  background-color: #823b38a8;
  color: #fff;
  height: 50px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const Picker = styled.Picker`
  color: #fff;
`;

export const InputBox = styled.TextInput`
  flex: 1;
  background-color: ${props => (props.editable ? '#823b38a8' : '#b58886')};
  color: ${props => (props.editable ? '#fff' : '#f5f5f5')};
  border: 1px solid ${props => (props.editable ? '#ccc' : '#b58886')};
  margin: 5px;
  border-radius: 4px;
  text-align: center;
`;

export const LevelInputBox = styled.TextInput`
  /* flex: 1; */
  width: 50px;
  margin: 5px;
  background-color: ${props => (props.editableStyle ? '#823b38a8' : '#b58886')};
  color: ${props => (props.editableStyle ? '#fff' : '#f5f5f5')};
  border: 1px solid ${props => (props.editableStyle ? '#ccc' : '#b58886')};
  border-radius: 4px;
  text-align: center;
`;
export const HabilitiesRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleView = styled.View``;
