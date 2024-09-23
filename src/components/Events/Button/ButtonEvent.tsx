import { ButtonEvent, ButtonEventText } from '../../../pages/events';

type ButtonProps = {
    title: string;
    color?: string;
    width?: number
    onPress?: () => void;
};

const ButtonEventComponent = ({ title, color, width, onPress }: ButtonProps) => {
    return (
        <ButtonEvent onPress={onPress} color={color} width={width}>
            <ButtonEventText>{title}</ButtonEventText>
        </ButtonEvent>
    );
};

export default ButtonEventComponent;

