import Colors from "@/src/styles/Colors";
import styled from "styled-components/native";


export const HeaderBackground = styled.View`
  background-color: ${Colors.primary};
  padding: 8px 20px;
  width: 100%;
  height: 70px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderImage = styled.Image`
  width: 35px;
  height: 35px;
`;