import styled from "styled-components/native";
import CB from "expo-checkbox";

// BaseForm
export const Form = styled.View`
 display: flex;
 flex-direction:"column";
 width: 100%;
 padding: 10px;
 gap: 14px;
`;

export const FormBody = styled.View`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

// Buttons
export const FormButton = styled.TouchableHighlight`
  background-color: green;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
export const DiscreteFormButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
`;

// Inputs
export const BaseTextInput = styled.TextInput`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #D9D9D9;
  min-height: 48px;
  max-height: 48px;
  display: flex;
  flex-grow: 1;
  color: #000;
`;

export const FormTextInput = styled.View`
  display: flex;
  gap: 8px;
`;

export const TextInputLabel = styled.Text`
  font-size: 15px;
  font-weight: normal;
  color: #52525C;
`;

export const FormDateInput = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: 2px solid #D9D9D9;
  border-radius: 8px;
  padding: 10px;
  min-height: 48px;
  max-height: 48px;
  display: flex;
  flex-grow: 1;
`;

export const FormDateInputText = styled.Text`
  font-size: 15px;
  color: #D9D9D9;
`;

export const FormDatePressable = styled.Pressable`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const FormCheckBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const CheckBox = styled(CB)`
  width: 15px;
  height: 15px;
  border-radius: 5px;
`;