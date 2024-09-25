import { ButtonEvent, ButtonEventText } from '@/src/pages/events';

type ButtonProps = {
    title: string;
    color?: string;
    width?: number;
    onPress?: () => void;
    disabled?: boolean;
};

const ButtonEventComponent = ({ title, color, width, onPress, disabled }: ButtonProps) => {
    return (
        <ButtonEvent 
            onPress={!disabled ? onPress : undefined} 
            color={disabled ? '#d3d3d3' : color} 
            width={width}
            disabled={disabled}
        >
            <ButtonEventText>{title}</ButtonEventText>
        </ButtonEvent>
    );
};

export default ButtonEventComponent;




