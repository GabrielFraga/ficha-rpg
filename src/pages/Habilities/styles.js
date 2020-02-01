import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const InputBox = styled.TextInput`
  flex: 1;
  background-color: #823b38a8;
  color: #fff;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const FlexLabel = styled.Text`
  flex-basis: 20%;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
export const FixedInput = styled.TextInput`
  flex-basis: 15%;
  background-color: #823b38a8;
  color: #fff;
  border: 1px solid #ccc;
  margin: 5px;
  border-radius: 4px;
  text-align: center;
`;

export const TitleView = styled.View``;

export const FinalValue = styled.Text`
  color: #d8c203;
  font-weight: bold;
  font-size: 16px;
`;

export const HabsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  flex: 1;
  color: #333;
`;

export const LvlHabButton = styled(RectButton)`
  flex-basis: 20%;
  background-color: #823b38a8;
  border: 1px solid #721410;
  margin: 5px;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContent = styled.Text`
  color: #fff;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background: #222222a8;
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  background-color: #823b38;
  /* background: #6b574d; */
  /* background-color: #1f1916; */
  height: 38%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 20px;
`;

export const RadioOptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RadioButtonContainer = styled.View`
  align-items: center;
  flex-basis: 50%;
  height: 80px;
  justify-content: space-evenly;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #acacac;
  align-items: center;
  justify-content: center;
`;

export const CheckedCircle = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #d8c203;
`;
