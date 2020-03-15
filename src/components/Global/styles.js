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

export const Column = styled.View`
  flex-direction: column;
`;

export const FlexdCol5 = styled.View`
  flex: 1;
  flex-basis: 20%;
`;

export const FlexCol4 = styled.View`
  flex: 1;
  flex-basis: 25%;
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

export const FixedSizedLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  flex-basis: 20%;
`;

export const FirstLine = styled.View`
  flex-basis: 25%;
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
  opacity: ${props => (props.editable === true ? 1 : 0.5)};
  background: #823b38a8;
  color: #fff;
  border: 1px solid #b58886;
  margin: 5px;
  border-radius: 4px;
  text-align: center;
`;

export const LevelInputBox = styled.TextInput`
  width: 50px;
  margin: 5px;
  opacity: ${props => (props.editableStyle ? 1 : 0.5)};
  background: #823b38a8;
  color: #fff;
  border: 1px solid #b58886;
  border-radius: 4px;
  text-align: center;
`;
export const HabilitiesRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleView = styled.View``;
