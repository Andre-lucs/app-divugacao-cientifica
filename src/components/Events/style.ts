import styled from "styled-components/native";


export const EventPreview = styled.View`
    flex-direction: row;
    width: 380px;
    height: 160px;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    border-width: 2px;       
    border-color: #D9D9D9;       
    border-style: solid;
`;

export const EventImagePreview = styled.Image`
    height: 100%;
    width: 40%;
    border-radius: 10px;
`;

export const ArrowIcon = styled.Image`
    height: 20px;
    width: 20px;
`
export const EventPreviewInfo = styled.View`
    flex: 1;
    margin-left: 10px; /* Espaço entre imagem e texto */
    justify-content: space-between;
    padding: 5px;
    height: 100%;
`;

export const EventNamePreview = styled.Text`
    font-weight: bold;
    font-size: 18px; /* Equivalente a 1.2rem */
`;

export const EventCategoryPreview = styled.Text`
    background-color: #4CAC33;
    text-align: center;
    color: white;
    border-radius: 12px; 
    height: 25px;
    width: 35px;
    line-height: 25px; 
`;

export const CategoryInfo = styled.View`
    flex-direction: row;
    justify-content: space-between; 
    margin-top: 5px; 
`;

export const EventDatePreview = styled.Text``;
