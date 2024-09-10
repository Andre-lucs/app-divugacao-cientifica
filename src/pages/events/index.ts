import Colors from "@/src/styles/Colors";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const EventPageContainer = styled.ScrollView`
    padding: 20px;
    padding-bottom: 100px;

`

export const EventImage = styled.Image`
    width: 100%;
    height: 224px;
    margin-top: 30px;
    background-color: red;
    border-radius: 15px;
    
`
export const EventPageTitle = styled.Text`
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
`
export const EventInfo = styled.View`
    gap: 10px;
`

export const EventPageDates = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    padding: 5px;
`;

export const EventPageDateText = styled.Text``;

export const EventName = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin: 20px 0px;
`;

export const EventAdditionalInfoLabel = styled.Text`
    font-weight: bold;
    font-size: 16px;
    
`;

export const EventAdditionalInfo = styled.Text`
     font-weight: 400;
`;

export const ButtonEvent = styled(TouchableOpacity)<{ color?: string }>`
    background-color: ${props => props.color || Colors.secondary};
    height: 40px;
    width: 116px;
    padding: 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

export const ButtonEventText = styled.Text`
    color: ${Colors.white};
    font-weight: bold;

`;

export const EventPageActions = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    gap: 5px;
    justify-content: flex-end;
`;


export const ContainerPageEvents = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const HeaderPageEvents = styled.View`
  width: 100%;
  padding: 10px;
  gap: 20px;
`;

export const TitlePageEvents = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;