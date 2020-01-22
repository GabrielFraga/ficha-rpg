import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 14px;
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
export const Title = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 19px;
`;

export const FlexLabel = styled.Text`
  color: #555;
  font-weight: bold;
  font-size: 16px;
  flex-basis: 25%;
  flex-grow: 0;
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

export const FixedInput = styled.TextInput`
  flex-basis: 25%;
  flex-grow: 0;
  background-color: #fff;
  height: 50px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const List = styled.FlatList``;
