import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #dedede;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.View`
  margin-bottom: 25px;
`;

export const Label = styled.Text`
  color: #555;
  font-weight: bold;
  font-size: 17px;
`;

export const PickerView = styled.View`
  flex: 1;
  background-color: #fff;
  height: 50px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const InputBox = styled.TextInput`
  flex: 1;
  background-color: #fff;
  height: 50px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const Title = styled.Text`
  /* flex-basis: 15%; */
  color: #333;
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  margin: 0 5px;
`;

export const FlexLabel = styled.Text`
  flex-basis: 20%;
  color: #555;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
`;
export const FixedInput = styled.TextInput`
  flex-basis: 15%;
  background-color: #fff;
  height: 50px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const List = styled.FlatList``;

export const TitleView = styled.View``;

export const FinalValue = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;

export const ModalView = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const HabsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalHabsRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ModalFlexLabel = styled.Text`
  flex-basis: 10%;
  color: #555;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
`;
export const ModalFixedInput = styled.TextInput`
  flex-basis: 10%;
  background-color: #fff;
  height: 50px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;
export const Text = styled.Text`
  color: #333;
`;
