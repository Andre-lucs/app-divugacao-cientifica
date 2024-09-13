import { Image, View, Text, StyleSheet } from "react-native";
import { ArrowIcon, CategoryInfo, EventCategoryPreview, EventDatePreview, EventImagePreview, EventNamePreview, EventPreview, EventPreviewInfo } from "../styles";
import { PropsWithChildren } from "react";
import { Link } from "expo-router";

type Props = PropsWithChildren<{
    id: string
    name: string;
    startDate: string;
    category: string;
    imageUrl: string;
    path: string;
}>

export default function({ category, name, startDate, imageUrl, id, path }: Props) {
    return (
        <EventPreview >
            <EventImagePreview source={{ uri: imageUrl }} />
            <EventPreviewInfo>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <EventNamePreview><Text>{name}</Text></EventNamePreview>
                    <Link href={{pathname: path, params: {id: id }}}>
                        <ArrowIcon source={require('@/assets/images/arrow_icon.png')}/>
                    </Link>
                </View>
                <CategoryInfo>
                    <EventCategoryPreview>{category}</EventCategoryPreview>
                    <EventDatePreview>{startDate}</EventDatePreview>
                </CategoryInfo>
            </EventPreviewInfo>
        </EventPreview>
    );
}


