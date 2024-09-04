import { Image, View, Text, StyleSheet } from "react-native";
import { ArrowIcon, CategoryInfo, EventCategoryPreview, EventDatePreview, EventImagePreview, EventNamePreview, EventPreview, EventPreviewInfo } from "../style";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    name: string;
    date: string;
    category: string;
    imageUrl: string;
}>;

export default function({ category, name, date, imageUrl }: Props) {
    return (
        <EventPreview >
            <EventImagePreview source={{ uri: imageUrl }} />
            <EventPreviewInfo>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <EventNamePreview><Text>{name}</Text></EventNamePreview>
                    <ArrowIcon source={require('@/assets/images/arrow_icon.png')}/>
                </View>
                <CategoryInfo>
                    <EventCategoryPreview>{category}</EventCategoryPreview>
                    <EventDatePreview>{date}</EventDatePreview>
                </CategoryInfo>
            </EventPreviewInfo>
        </EventPreview>
    );
}


